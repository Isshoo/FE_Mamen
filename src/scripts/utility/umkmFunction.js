/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import Swal from 'sweetalert2';
import UmkmsDbSource from '../api/umkms-api';
import CategoriesDbSource from '../api/categories-api';
import { renderCategories, renderUmkm } from '../view/pages/profile';

async function tambahUmkm() {
  const closeFormButton = document.getElementById('closeFormButton');
  const popupForm = document.querySelector('umkm-form');

  async function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const subdistrict = document.getElementById('subdistrict').value;
    const address = document.getElementById('address').value;
    const contact = document.getElementById('contact').value;
    const year = document.getElementById('year').value;
    const umkm = {
      name, description, subdistrict, address, contact, year,
    };

    try {
      popupForm.style.display = 'none';

      await UmkmsDbSource.postUmkm(umkm);

      await Swal.fire({
        icon: 'success',
        title: 'Berhasil',
        text: 'UMKM berhasil ditambahkan!',
        confirmButtonText: 'OK',
        customClass: {
          confirmButton: 'custom-ok-button', // Tambahkan kelas khusus
        },
      });
      window.location.reload();
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Gagal',
        text: `Terjadi kesalahan: ${error.message}`,
      });
      console.log(error);
    }
  }

  closeFormButton.addEventListener('click', () => {
    popupForm.style.display = 'none';
  });

  const form = document.getElementById('umkmForm');
  form.removeEventListener('submit', handleSubmit);
  form.addEventListener('submit', handleSubmit);
}

async function umkmImage() {
  const umkmDetailByUser = await UmkmsDbSource.getUmkmByUser();

  const labelAddImg = document.getElementById('addImgLabel');
  const resetImg = document.getElementById('resetImg');
  const submitImg = document.getElementById('submitImg');
  const addImgForm = document.getElementById('addImageForm');
  const fileInput = document.getElementById('addimage');
  const umkmImg = document.getElementById('umkm-img');

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      umkmImg.src = URL.createObjectURL(file);
      labelAddImg.style.display = 'none';
      resetImg.style.display = 'inline-block';
      submitImg.style.display = 'inline-block';
    } else {
      labelAddImg.style.display = 'inline-block';
      resetImg.style.display = 'none';
      submitImg.style.display = 'none';
    }
  };

  const handleReset = () => {
    fileInput.value = '';
    labelAddImg.style.display = 'inline-block';
    resetImg.style.display = 'none';
    submitImg.style.display = 'none';
    umkmImg.src = umkmDetailByUser[0].cover_url || './images/hero-image2.jpg';
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const coverUrl = fileInput.files[0];

    try {
      await UmkmsDbSource.postUmkmCover(umkmDetailByUser[0].id, coverUrl);
      const updatedUmkmDetail = await UmkmsDbSource.getUmkmByUser();
      await renderUmkm(updatedUmkmDetail[0]);

      labelAddImg.style.display = 'inline-block';
      resetImg.style.display = 'none';
      submitImg.style.display = 'none';

      Swal.fire({
        icon: 'success',
        title: 'Berhasil',
        text: 'Gambar UMKM berhasil diunggah!',
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

  fileInput.removeEventListener('change', handleFileChange);
  fileInput.addEventListener('change', handleFileChange);

  addImgForm.removeEventListener('reset', handleReset);
  addImgForm.addEventListener('reset', handleReset);

  addImgForm.removeEventListener('submit', handleSubmit);
  addImgForm.addEventListener('submit', handleSubmit);
}

async function addCategory() {
  const umkmDetailByUser = await UmkmsDbSource.getUmkmByUser();

  const addCategoryBtn = document.getElementById('addCategory');
  const addCategoryForm = document.getElementById('form-addCategory');
  const inputCategory = document.getElementById('input-category');

  async function handleSubmit(event) {
    event.preventDefault();
    const name = inputCategory.value;

    try {
      await CategoriesDbSource.postCategory(umkmDetailByUser[0].id, { name });
      const updatedUmkmDetail = await UmkmsDbSource.getUmkmByUser();
      await renderCategories(updatedUmkmDetail[0].id);

      inputCategory.value = '';
      addCategoryForm.style.display = 'none';
      addCategoryBtn.style.display = 'block';

      Swal.fire({
        icon: 'success',
        title: 'Berhasil',
        text: 'Kategori berhasil ditambahkan!',
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

  addCategoryForm.removeEventListener('submit', handleSubmit);
  addCategoryForm.addEventListener('submit', handleSubmit);
}

export {
  tambahUmkm, umkmImage, addCategory,
};
