import SearchDbSource from '../../api/search-api';
import UmkmsDbSource from '../../api/umkms-api';
import pageListUmkmGsapJs from '../../utility/animation/list-umkm-page/list-umkm-gsap';
import umkmItemGsapJs from '../../utility/animation/list-umkm-page/umkm-item-gsap';
// import footerGsapJs from '../../utility/animation/home-page/footer-gsap';
import Loading from '../../utility/loading';
import { createUmkmItemTemplate } from '../templates/template-creator';

const renderUmkm = async (list) => {
  const umkmContainer = document.querySelector('#list-umkm');
  umkmContainer.innerHTML = '';
  list.forEach((umkm) => {
    umkmContainer.innerHTML += createUmkmItemTemplate(umkm);
  });
  if (umkmContainer.innerHTML === '') {
    umkmContainer.innerHTML = 'Belum ada UMKM yang terdaftar.';
  }
};

const ListUmkm = {
  async render() {
    return `
      <section class="exploreUmkm">
        <div class="judul-list-umkm">
          <h2>Daftar UMKM</h2>
        </div>
        <div class="quote-umkm-list">
          <p>"Setiap Usaha Kecil Memiliki Cerita Besar. Mari Dukung Kreativitas Lokal!"</p>
        </div>
        <search-bar></search-bar>
        <div class="page-list-umkm">
          <div id="list-umkm"></div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    // RENDER UMKM
    const umkmContainer = document.querySelector('#list-umkm');
    await Loading.loadingPage(umkmContainer);
    const allUmkmList = await UmkmsDbSource.getUmkms();
    const pageload = document.querySelector('.pageload');
    if (pageload) {
      pageload.remove();
    }
    pageListUmkmGsapJs();
    await renderUmkm(allUmkmList);
    // footerGsapJs();

    const searchInput = document.getElementById('searchInput');
    const searchForm = document.getElementById('searchForm');

    searchInput.addEventListener('input', async (e) => {
      e.preventDefault();
      const query = searchInput.value;
      const filteredUmkms = await SearchDbSource.search(query);
      await renderUmkm(filteredUmkms.umkms);
    });

    searchForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const query = searchInput.value;
      const filteredUmkms = await SearchDbSource.search(query);
      await renderUmkm(filteredUmkms.umkms);
    });

    umkmItemGsapJs();
  },
};

export default ListUmkm;
