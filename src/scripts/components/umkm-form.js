/* eslint-disable class-methods-use-this */
class UmkmForm extends HTMLElement {
  emptyContent() {
    this.innerHTML = '';
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.emptyContent();
    this.innerHTML += `
    <div id="popupForm" class="popup-form">
        <div class="popup-content">
            <span id="closeFormButton" class="close-button">&times;</span>
            <h2>Tambah UMKM</h2>
            <form id="umkmForm" class="umkm-form">
              <div class="nameCon">
                <label for="name">Nama :</label>
                <input type="text" id="name" name="name" required>
              </div>
              <div class="subCon">
                  <label for="subdistrict">Daerah / Kecamatan :</label>
                  <input type="text" id="subdistrict" name="subdistrict" required>
              </div>
              <div class="almCon">
                <label for="address">Alamat :</label>
                <input type="text" id="address" name="address" required>
              </div>
              <div class="contactCon">
                <label for="contact">No. Kontak / Social Media :</label>
                <input type="text" id="contact" name="contact" required>
              </div>
              <div class="yearCon">
                <label for="year">Tahun Dibuat :</label>
                <input type="number" id="year" name="year" max="2025" required>
              </div>
              <div class="descCon">
                <label for="description">Deskripsi :</label>
                <textarea id="description" name="description" required></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
        </div>
    </div>
    `;
  }
}

customElements.define('umkm-form', UmkmForm);
