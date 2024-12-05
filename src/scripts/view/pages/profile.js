/* eslint-disable import/no-cycle */
import UmkmsDbSource from '../../api/umkms-api';
import ProductsDbSource from '../../api/products-api';
import ReviewsDbSource from '../../api/reviews-api';
import { createProductItemTemplate, createReviewItemTemplate } from '../templates/template-creator';
import {
  tambahUmkm,
} from '../../utility/umkmFunction';
import {
  editProduct, deleteProduct, productImage,
} from '../../utility/productFunction';
import Loading from '../../utility/loading';
import CategoriesDbSource from '../../api/categories-api';
import ProfileGsapJs from '../../utility/animation/profile-page/profile-gsap';
import ProfileProdukGsapJs from '../../utility/animation/profile-page/profile-produk-gsap';
// import footerGsapJs from '../../utility/animation/home-page/footer-gsap';
import profileReviewGsapJs from '../../utility/animation/profile-page/profile-review-gsap';
import blankProfileGsapJs from '../../utility/animation/profile-page/blank-profile-gsap';

export const renderUmkm = async (umkm) => {
  const umkmContainer = document.querySelector('#umkms');
  const umkmItem = document.createElement('umkm-detail');
  umkmItem.umkmw = umkm;
  umkmContainer.innerHTML = '';
  umkmContainer.append(umkmItem);
};

export const renderCategories = async (umkmId) => {
  const categoriesContainer = document.querySelector('#listCategory');
  const categories = await CategoriesDbSource.getCategoriesByUmkm(umkmId);
  categoriesContainer.innerHTML = '';
  // RENDER CATEGORIES BY UMKM
  if (categories.length === 0) {
    categoriesContainer.innerHTML = 'Belum terdapat kategori. Silahkan menambah terlebih dahulu';
  } else {
    categoriesContainer.innerHTML = categories.map((category) => `
          <div class="category" data-id="${category.id}">
            <p>${category.name}</p>
            <button class="delete-category"><i class="fa-solid fa-trash"></i></button>
          </div>`)
      .join('');
  }
};

export const renderProducts = async (umkmId) => {
  const productContainer = document.querySelector('#products');

  const products = await ProductsDbSource.getProductsByUmkm(umkmId);
  productContainer.innerHTML = '';
  try {
    if (products.length > 0) {
      productContainer.innerHTML = products
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((productItem) => createProductItemTemplate(productItem))
        .join('');
      ProfileProdukGsapJs();
    } else {
      productContainer.innerHTML = 'Belum ada produk untuk ditampilkan.';
    }
  } catch {
    productContainer.innerHTML = 'Terjadi kesalahan saat memuat produk.';
  }
};

export const renderReviews = async (umkmId) => {
  const reviewContainer = document.querySelector('#reviews');

  const reviews = await ReviewsDbSource.getReviewsByUmkm(umkmId);
  reviewContainer.innerHTML = '';
  try {
    if (reviews.length > 0) {
      reviewContainer.innerHTML = reviews.map((review) => createReviewItemTemplate(review)).join('');
      profileReviewGsapJs();
    } else {
      reviewContainer.innerHTML = 'Belum ada review yang ditampilkan.';
    }
  } catch {
    reviewContainer.innerHTML = 'Terjadi kesalahan saat memuat ulasan.';
  }
};

const Profile = {
  async render() {
    return `
      <section id="detailContainer">
        <umkm-form></umkm-form>
        <div id="umkmDetail" class="child-section">
          <div id="umkms" class="umkms"></div>
          <div class="product-separator">
            <div class="separator"></div>
          </div>
          <div class="section-title">
            <h2>Products</h2>
            <button id="new-product">Tambah Produk</button>
          </div>
          <div class="detailsection-produk">
            <div id="products" class="list-products">
            </div>
          </div>
          <div>
            <div class="separator"></div>
          </div>
          <div class="section-title">
            <h2>Reviews</h2>
          </div>
          <div id="reviews" class="reviews"></div>
          <div>
            <div class="separator"></div>
          </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const container = document.querySelector('#umkmDetail');
    await Loading.loadingPage(container);

    const pageload = document.querySelector('.pageload');
    const umkmByUser = await UmkmsDbSource.getUmkmByUser();

    if (!umkmByUser[0]) {
      if (pageload) {
        pageload.remove();
      }
      container.innerHTML = `
        <div class="blank-profile-con">
        <div class="blank-profile">
        <img class="blankImg" src="./images/newumkm.webp">
        <div class="blankCon">
        <h2>Nothing in here...</h2>
        <p>Kamu belum mempunyai UMKM. Silahkan menambah UMKM terlebih dahulu.</p>
        <button id="new-umkm">Tambah UMKM</button>
        </div>
        </div>
        </div>
          `;
      document.querySelector('#new-umkm').addEventListener('click', () => {
        document.querySelector('umkm-form').style.display = 'block';
      });
      tambahUmkm();
      blankProfileGsapJs();
      // footerGsapJs();
    } else {
      const { id } = umkmByUser[0];
      if (pageload) {
        pageload.remove();
      }

      const editForm = document.createElement('editumkm-form');
      const tambahProdukForm = document.createElement('product-form');
      container.appendChild(editForm);
      container.appendChild(tambahProdukForm);

      // UMKM
      await renderUmkm(umkmByUser[0]);
      ProfileGsapJs();

      // PRODUCT UMKM
      const newProductButton = document.querySelector('#new-product');
      newProductButton.addEventListener('click', () => {
        document.querySelector('product-form').style.display = 'block';
      });

      await renderProducts(id);
      const productContainer = document.querySelector('#products');
      productContainer.addEventListener('click', (event) => {
        const target = event.target.closest('.editProdBtn, .deleteProdBtn, .addImageFormProd');
        if (!target) return;

        const productId = target.dataset.id;

        if (target.classList.contains('editProdBtn')) {
          editProduct(productId);
        } else if (target.classList.contains('deleteProdBtn')) {
          deleteProduct(productId);
        } else if (target.classList.contains('addImageFormProd')) {
          productImage(productId);
        }
      });

      // REVIEW UMKM
      await renderReviews(id);

      // footerGsapJs();
    }
  },
};

export default Profile;
