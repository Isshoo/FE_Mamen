/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
import UmkmsDbSource from '../api/umkms-api';
import { createUmkmSliderTemplate } from '../view/templates/template-creator';

class UmkmSlider extends HTMLElement {
  emptyContent() {
    this.innerHTML = '';
  }

  connectedCallback() {
    this.render();
  }

  async umkm() {
    const umkmContainer = document.querySelector('.slider');
    umkmContainer.innerHTML = '';
    const umkms = await UmkmsDbSource.getUmkms();

    if (umkms.length === 0) {
      umkmContainer.innerHTML = 'Tidak ada UMKM untuk ditampilkan.';
    } else {
      const filteredUmkms = umkms.filter((umkm) => umkm.rating >= 4);

      if (filteredUmkms.length === 0) {
        umkmContainer.innerHTML = 'Tidak ada UMKM dengan rating 4 ke atas.';
      } else {
        filteredUmkms.forEach((umkm) => {
          umkmContainer.innerHTML += createUmkmSliderTemplate(umkm);
        });

        const categories = document.querySelectorAll('.cate-item');
        categories.forEach((category) => {
          if (category.innerHTML === 'null') {
            category.innerHTML = 'Belum ada kategori';
          }
        });
      }
    }
  }

  buttons() {
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');
    const slider = document.querySelector('.slider');

    next.addEventListener('click', () => {
      const slides = document.querySelectorAll('.slides');
      slider.appendChild(slides[0]);
    });

    prev.addEventListener('click', () => {
      const slides = document.querySelectorAll('.slides');
      slider.prepend(slides[slides.length - 1]);
    });
  }

  render() {
    this.emptyContent();
    this.innerHTML += `
    <section class="sliderumkm-secton">
        <div class="slide-title"><h3>Top Rated <span>UMKM</span></h3></div>
        <div class="slider-con">
          <div class="slider">
          </div>
        </div>
        <div class="slider-buttons">
          <span class="prev"><i class="fa-solid fa-chevron-left"></i></span>
          <span class="next"><i class="fa-solid fa-chevron-right"></i></span>
        </div>
      </section>
        `;
    this.umkm();
    this.buttons();
  }
}

customElements.define('umkm-slider', UmkmSlider);
