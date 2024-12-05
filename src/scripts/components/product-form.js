const { default: Swal } = require('sweetalert2');
const { default: ProductsDbSource } = require('../api/products-api');
const { default: UmkmsDbSource } = require('../api/umkms-api');
const { renderProducts } = require('../view/pages/profile');

/* eslint-disable class-methods-use-this */
class ProductForm extends HTMLElement {
  emptyContent() {
    this.innerHTML = '';
  }

  connectedCallback() {
    this.render();
  }

  async tambahProduk() {
    const umkmDetailByUser = await UmkmsDbSource.getUmkmByUser();
    const umkmId = umkmDetailByUser[0].id;
    const closeFormButton = document.getElementById('closeFormButtonProd');
    const popupForm = document.querySelector('product-form');
    const form = document.getElementById('productForm');

    // Form submission handler
    async function handleSubmit(event) {
      event.preventDefault();
      const name = document.getElementById('nameprod').value;
      const product_type = document.getElementById('type').value;
      const description = document.getElementById('descriptionprod').value;
      const price = document.getElementById('price').value;
      const product = {
        name, product_type, description, price,
      };

      try {
        popupForm.style.display = 'none';

        await ProductsDbSource.postProduct(umkmId, product);

        form.reset();
        await renderProducts(umkmId);

        Swal.fire({
          icon: 'success',
          title: 'Berhasil',
          text: 'Produk berhasil ditambahkan!',
          confirmButtonText: 'OK',
          customClass: {
            confirmButton: 'custom-ok-button', // Tambahkan kelas khusus
          },
        });
      } catch (error) {
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

    form.removeEventListener('submit', handleSubmit);
    form.addEventListener('submit', handleSubmit);
  }

  render() {
    this.emptyContent();
    this.innerHTML += `
    <div id="popupFormProd" class="popup-form">
        <div class="popup-content">
            <span id="closeFormButtonProd" class="close-button">&times;</span>
            <h2>Tambah Product</h2>
            <form id="productForm" class="product-form">
              <div class="nameProdCon">
                <label for="nameprod">Nama :</label>
                <input type="text" id="nameprod" name="nameprod" required>
              </div>
              <div class="typeCon">
                <label for="type">Tipe Produk :</label>
                <input type="text" id="type" name="type" required>
              </div>
              <div class="priceCon">
                <label for="price">Harga :</label>
                <input type="number" id="price" name="price" placeholder="Angka ditulis tanpa spasi/elemen lainnya" required>
              </div>
              <div class="descCon">
                <label for="descriptionprod">Deskripsi :</label>
                <textarea id="descriptionprod" name="descriptionprod" required></textarea>
              </div>
              
              <button type="submit">Submit</button>
            </form>
        </div>
    </div>
      `;
    this.tambahProduk();
  }
}

customElements.define('product-form', ProductForm);
