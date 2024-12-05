/* eslint-disable class-methods-use-this */

class UmkmFreeDetail extends HTMLElement {
  constructor() {
    super();
    this.umkm = {
      id: null,
      name: null,
      description: null,
      subdistrict: null,
      address: null,
      contact: null,
      year: null,
      rating: null,
      cover_url: null,
    };
  }

  set umkmw(value) {
    this.umkm = value;

    // Render ulang
    this.render();
  }

  get umkmw() {
    return this.umkm;
  }

  emptyContent() {
    this.innerHTML = '';
  }

  render() {
    this.emptyContent();
    this.innerHTML += `
    <article id="detail-umkm" class="detail-umkm">
      <section id="imgSection" class="imgSection">
        <picture>
          <img 
          id="umkm-img" 
          src="${this.umkm.cover_url ? this.umkm.cover_url : './images/template-umkm-img.png'}" 
          alt="${this.umkm.name}"
          onerror="this.onerror=null;this.src='./images/template-umkm-img.png';"
          >
        </picture>
        <span><i class="fa-regular fa-star"></i> ${this.umkm.rating}</span>
        
      </section>
      <section class="infoSection free">
        <div class="title-con free">
          <h1 id="title-umkm free">${this.umkm.name}</h1>
          
        </div>
        <div class="detail-con free">
          <table>
          <tr>
            <td>Alamat</td>
            <td>:</td>
            <td id="alamat">${this.umkm.address}</td>
          </tr>
          <tr>
            <td>Kecamatan</td>
            <td>:</td>
            <td id="kecamatan">${this.umkm.subdistrict}</td>
          </tr>
          <tr>
            <td>Kontak</td>
            <td>:</td>
            <td id="kontak">${this.umkm.contact}</td>
          </tr>
          <tr>
            <td>Tahun</td>
            <td>:</td>
            <td id="tahun">${this.umkm.year}</td>
          </tr>
        </table>
        </div>
        <div class="category-con free">
          <div>
            <p>Kategori :</p>
            
          </div>
          <div id="listCategory" class="listCategoryFree">
          <div class="category free" style="background-color: transparent">
            <p style="color: transparent">tes</p>
          </div>
          </div>
        </div>
        <div class="description-con free">
          <div>
            <p>Deskripsi :</p>
            <p id="deskripsi" class="deskripsiFree">${this.umkm.description}</p>
          </div>
          <p></p>
        </div>
      </section>
     </article>
        `;
  }
}

customElements.define('umkm-freedetail', UmkmFreeDetail);
