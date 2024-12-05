import ProductsDbSource from '../../api/products-api';
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
    const allProductList = await ProductsDbSource.getProducts(); // Ambil semua produk di awal
    const pageload = document.querySelector('.pageload');
    if (pageload) {
      pageload.remove();
    }
    pageListProdukGsapJs();
    await renderProdukt(allProductList);

    // --------------------------------------------
    const searchInput = document.getElementById('searchInput');
    const searchForm = document.getElementById('searchForm');

    // Filter produk secara lokal tanpa menggunakan API
    searchInput.addEventListener('input', (e) => {
      e.preventDefault();
      const query = searchInput.value.toLowerCase();

      const filteredProducts = allProductList.filter((product) => (
        product.name.toLowerCase().includes(query)
      || product.product_type.toLowerCase().includes(query)
      || product.description.toLowerCase().includes(query)
      || product.price.toString().includes(query)
      || product.umkm_name.toString().includes(query)
      ));

      renderProdukt(filteredProducts);
    });

    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const query = searchInput.value.toLowerCase();

      const filteredProducts = allProductList.filter((product) => (
        product.name.toLowerCase().includes(query)
      || product.type.toLowerCase().includes(query)
      || product.description.toLowerCase().includes(query)
      || product.price.toString().includes(query)
      || product.umkm_name.toString().includes(query)
      ));

      renderProdukt(filteredProducts);
    });

    produkItemGsapJs();
  },
};

export default ListProduct;
