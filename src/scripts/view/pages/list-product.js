import ProductsDbSource from '../../api/products-api';
import SearchDbSource from '../../api/search-api';
import pageListProdukGsapJs from '../../utility/animation/list-produk-page/list-produk-gsap';
import produkItemGsapJs from '../../utility/animation/list-produk-page/produk-item-gsap';
// import footerGsapJs from '../../utility/animation/home-page/footer-gsap';
import Loading from '../../utility/loading';
import { createFreeProductItemTemplate } from '../templates/template-creator';

const renderProdukt = async (list) => {
  const productContainer = document.querySelector('.list-product');
  productContainer.innerHTML = '';
  list.forEach((product) => {
    productContainer.innerHTML += createFreeProductItemTemplate(product);
  });
};

const ListProduct = {
  async render() {
    return `
      <section class="exploreProd">
      <div class="judul-list-prod">
          <h2>Daftar Produk</h2>
          <p>"Setiap Usaha Kecil Memiliki Cerita Besar. Mari Dukung Kreativitas Lokal!"</p>
          <search-bar></search-bar>
        </div>
        <div class="page-list-prod">
          <div class="list-product"></div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    // RENDER PRODUCT
    const productContainer = document.querySelector('.list-product');
    productContainer.innerHTML = '';
    await Loading.loadingPage(productContainer);
    const allProductList = await ProductsDbSource.getProducts();
    const pageload = document.querySelector('.pageload');
    if (pageload) {
      pageload.remove();
    }
    pageListProdukGsapJs();
    await renderProdukt(allProductList);
    // footerGsapJs();
    // --------------------------------------------
    const searchInput = document.getElementById('searchInput');
    const searchForm = document.getElementById('searchForm');

    searchInput.addEventListener('input', async (e) => {
      e.preventDefault();
      const query = searchInput.value;
      const filteredProducts = await SearchDbSource.search(query);
      await renderProdukt(filteredProducts.products);
    });

    searchForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const query = searchInput.value;
      const filteredProducts = await SearchDbSource.search(query);
      await renderProdukt(filteredProducts.products);
    });

    produkItemGsapJs();
  },
};

export default ListProduct;
