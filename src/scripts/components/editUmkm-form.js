const { default: Swal } = require('sweetalert2');
const { default: UmkmsDbSource } = require('../api/umkms-api');
const { renderUmkm } = require('../view/pages/profile');

/* eslint-disable class-methods-use-this */
class editUmkmForm extends HTMLElement {
  emptyContent() {
    this.innerHTML = '';
  }

  connectedCallback() {
    this.render();
  }

  async editUmkm() {
    const umkmByUser = await UmkmsDbSource.getUmkmByUser();
    const closeFormButton = document.getElementById('closeFormButtonEdit');
    const popupForm = document.querySelector('editumkm-form');
    const { id } = umkmByUser[0];

    // Set form values from UMKM data
    document.getElementById('nameEdit').value = umkmByUser[0].name;
    document.getElementById('descriptionEdit').value = umkmByUser[0].description;
    document.getElementById('subdistrictEdit').value = umkmByUser[0].subdistrict;
    document.getElementById('addressEdit').value = umkmByUser[0].address;
    document.getElementById('contactEdit').value = umkmByUser[0].contact;
    document.getElementById('yearEdit').value = umkmByUser[0].year;

    // Form submission handler
    async function handleSubmit(event) {
      event.preventDefault();
      const name = document.getElementById('nameEdit').value;
      const description = document.getElementById('descriptionEdit').value;
      const subdistrict = document.getElementById('subdistrictEdit').value;
      const address = document.getElementById('addressEdit').value;
      const contact = document.getElementById('contactEdit').value;
      const year = document.getElementById('yearEdit').value;
      const umkm = {
        name, description, subdistrict, address, contact, year,
      };

      try {
        popupForm.style.display = 'none';

        await UmkmsDbSource.putUmkmById(id, umkm);

        const umkmDetailByUser = await UmkmsDbSource.getUmkmByUser();

        await renderUmkm(umkmDetailByUser[0]);

        Swal.fire({
          icon: 'success',
          title: 'Berhasil',
          text: 'Data UMKM berhasil diperbarui!',
          confirmButtonText: 'OK',
          customClass: {
            confirmButton: 'custom-ok-button', // Tambahkan kelas khusus
          },
        });
      } catch (error) {
      // Show error message
        Swal.fire({
          icon: 'error',
          title: 'Gagal',
          text: `Terjadi kesalahan: ${error.message}`,
        });
      }
    }

    // Close the form popup
    closeFormButton.addEventListener('click', () => {
      popupForm.style.display = 'none';
    });

    // Ensure no duplicate listeners
    const form = document.getElementById('umkmFormEdit');
    form.removeEventListener('submit', handleSubmit);
    form.addEventListener('submit', handleSubmit);
  }

  render() {
    this.emptyContent();
    this.innerHTML += `
    <div id="popupFormEdit" class="popup-form">
        <div id="popup-contentEdit" class="popup-content">
            <span id="closeFormButtonEdit" class="close-button">&times;</span>
            <h2>Edit UMKM</h2>
            <form id="umkmFormEdit" class="umkm-form">
              <div class="nameCon">
                <label for="name">Nama :</label>
                <input type="text" id="nameEdit" name="name" required>
              </div>
              <div class="subCon">
                <label for="subdistrict">Daerah / Kecamatan :</label>
                <input type="text" id="subdistrictEdit" name="subdistrict" required>
              </div>
              <div class="almCon">
                <label for="address">Alamat :</label>
                <input type="text" id="addressEdit" name="address" required>
              </div>
              <div class="contactCon">
                <label for="contact">No. Kontak / Social Media :</label>
                <input type="text" id="contactEdit" name="contact" required>
              </div>
              <div class="yearCon">
                <label for="year">Tahun Dibuat :</label>
                <input type="number" id="yearEdit" name="year" min="1900" max="2024" required>
              </div>
              <div class="descCon">
                <label for="description">Deskripsi :</label>
                <textarea id="descriptionEdit" name="description" required></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
        </div>
    </div>
      `;
    this.editUmkm();
  }
}

customElements.define('editumkm-form', editUmkmForm);
