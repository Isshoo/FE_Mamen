import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import '../styles/login.scss';
import '../styles/popup.scss';
import '../styles/detail-umkm.scss';
import '../styles/umkm-slider.scss';
import '../styles/list-product.scss';
import '../styles/list-umkm.scss';
import '../styles/review.scss';
import '../styles/about.scss';
import '../styles/loading.scss';
import '../styles/elemen-pendukung.scss';
import '../styles/search-bar.scss';
import './components/footer-bar';
import './components/header-bar';
import './components/hero-section';
import './components/umkm-form';
import './components/product-form';
import './components/editUmkm-form';
import './components/editProduct-form';
import './components/review-form';
import './components/umkm-detail';
import './components/umkm-freedetail';
import './components/umkm-slider';
import './components/search-bar';
import './components/headline-section';
import './components/dataline-section';
import './utility/navbar-tambahan';
import './utility/header';
import './utility/umkmFunction';
import './utility/productFunction';
import './utility/loading';
import './utility/active-link';

import App from './view/app';
import swRegister from './utility/sw-register';

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  button: document.querySelector('#nav-toggle'),
  drawer: document.querySelector('#nav-list'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  window.scrollTo(0, 0);
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
