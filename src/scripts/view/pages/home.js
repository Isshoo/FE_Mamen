import ProductsDbSource from '../../api/products-api';
import ReviewsDbSource from '../../api/reviews-api';
import homeGsapJs from '../../utility/animation/home-page/home-gsap';
import homeProdukGsapJs from '../../utility/animation/home-page/home-produk-gsap';
import homeReviewGsapJs from '../../utility/animation/home-page/home-review-gsap';
import { createFreeProductItemTemplate, createHomeReviewItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <section id="home">
        <picture>
          <source 
            type="image/jpeg" 
            srcset="./images/hero-image.jpeg">
          <source 
            type="image/webp"
            srcset="./images/hero-image.webp">
          <source 
            type="image/jpeg"
            media="(max-width: 600px)" 
            srcset="./images/hero-image-small.jpg">
          <img
            src='./images/hero-image.jpg' 
            alt="Hero Image"
          >
        </picture>
        <hero-section></hero-section>
      </section>
      <headline-section></headline-section>
        <section id="infoUmkmCon">
        <div class="green-filter"></div>
          <div class="infoUMKM">
          <div id="umkm-list">
                <umkm-slider></umkm-slider>
            </div>
            <div class="info">
              <div class="judul">
                <h3><span>Mengenal</span> Lebih Banyak Tentang UMKM</h3>
              </div>
              <div class="infoDesc">
                <p>
                  UMKM (Usaha Mikro, Kecil, dan Menengah)
                  merupakan tulang punggung perekonomian yang memiliki peran penting dalam 
                  mendorong perekonomian lokal, termasuk di Kota Manado.
                </p>
                <br>
                <p>
                  UMKM di Kota Manado memiliki peran strategis 
                  dalam menggerakkan perekonomian lokal, terutama melalui 
                  sektor kuliner, kerajinan tangan, dan pariwisata yang menjadi daya tarik utama wilayah ini.
                </p>
              </div>
              <div class="btnInfo">
                <a href="#/umkms">Lihat Semua</a>
              </div>
            </div>
          </div>
        </section>
        <dataline-section></dataline-section>
        <section class="product-home-con">
          <div class="green-filter"></div>
          <div class="homeProdTitle">
            <h2>Maybe You Would Like </h2>
          </div>
          <div id="products" class="scroll"></div>
          <span class="link-to-products"><a>See All Products</a></span>
        </section>
        <section class="explore-con home-review">
          <div class="title-review-con">
            <span class="quotes"><i class="fa-solid fa-quote-left"></i></span>
            <h2 class="titleReview">What Customers Says</h2>
            <p>Discover the experiences of our customers and their thoughts about our service. Your satisfaction is our top priority!</p>
          </div>
          <div class="review-cons">
            <div class="white-filter"></div>
            <div id="reviews" class="infinite-scroll"></div>
          </div>
          <div class="closing-quotes">
            <p>Thank you for being part of our journey. Together, let’s create something extraordinary. See you again!</p>
          </div>
        </section>
    `;
  },

  async afterRender() {
    homeGsapJs();
    // CLICK EVENTS
    const cat = document.querySelector('#cat');
    const explore = document.querySelector('headline-section');

    cat.addEventListener('click', () => {
      explore.scrollIntoView({ behavior: 'smooth' });
    });
    // --------------------------------------------

    // RENDER PRODUCTS
    const productContainer = document.querySelector('#products');
    productContainer.innerHTML = '';
    const allProductList = await ProductsDbSource.getProducts();

    if (allProductList.length === 0) {
      productContainer.innerHTML = 'Tidak ada produk untuk ditampilkan.';
    } else {
      allProductList.forEach((product) => {
        productContainer.innerHTML += createFreeProductItemTemplate(product);
      });
    }
    homeProdukGsapJs();

    // --------------------------------------------

    // RENDER REVIEWS
    const reviewContainer = document.querySelector('#reviews');
    reviewContainer.innerHTML = '';
    const reviews = await ReviewsDbSource.getReviews();

    reviews.forEach((review) => {
      reviewContainer.innerHTML += createHomeReviewItemTemplate(review);
    });

    if (reviewContainer.innerHTML === '') {
      reviewContainer.innerHTML = 'Tidak ada review untuk ditampilkan.';
    }
    // --------------------------------------------
    const infiniteScroll = document.querySelector('.infinite-scroll');
    const reviewItems = document.querySelectorAll('.infinite-scroll .review-item');
    const itemWidth = 300; // Lebar minimum .review-item
    const gap = 32; // Gap antar item (2rem = 32px)

    // Total panjang kontainer
    const totalWidth = (itemWidth + gap) * reviewItems.length;

    // Atur lebar kontainer secara dinamis
    infiniteScroll.style.width = `${totalWidth}px`;

    // Hitung durasi animasi berdasarkan total panjang kontainer
    const animationDuration = (totalWidth + window.innerWidth) / 100; // Kecepatan 100px per detik
    infiniteScroll.style.animationDuration = `${animationDuration}s`;
    homeReviewGsapJs();
  },
};

export default Home;
