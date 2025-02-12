# MAMEN (Manado Micro Enterprises Website)

## Deskripsi Proyek
<div style="display: flex; justify-content: space-between; align-items: center;">
  <img src="https://res.cloudinary.com/dtkczgmyn/image/upload/v1733478149/hero-dekstop_ksqahr.png" alt="Hero Section Desktop" style="width: 75%; margin-right: 4px;">
  <img src="https://res.cloudinary.com/dtkczgmyn/image/upload/v1733478147/hero-mobile_ejbakn.png" alt="Hero Section Mobile" style="width: 21%;">
</div>
MAMEN adalah sebuah website yang dibuat untuk membantu para pelaku UMKM (khususnya di daerah Manado) yang masih terkendala dalam mempromosikan usaha mereka secara online. MAMEN menawarkan berbagai manfaat bagi para pengguna mulai dari kemudahan penggunaan, sarana promosi yang terpusat, hingga tampilan yang menarik dan responsif di berbagai perangkat. MAMEN juga menyediakan berbagai fitur untuk membantu para pelaku UMKM, seperti menambahkan UMKM, menambahkan produk-produk untuk UMKM tersebut, dan memberikan review dari para pengguna.

## Fitur Utama
- Menampilkan daftar UMKM dan detail UMKM
- Menampilkan daftar produk dari seluruh UMKM
- Menambahkan UMKM dan produk
- Mengelola data UMKM dan produk
- Memberikan review untuk UMKM

## Tech Stack
- HTML : Untuk membuat struktur dasar halaman web.
- CSS : Untuk mengatur tampilan halaman web.
- Javascript : Bahasa pemrograman yang digunakan untuk menambahkan interaktivitas dan fungsionalitas ke halaman web.
- Webpack : Bundler untuk mengelola modul dan aset-aset ke dalam bundle yang lebih efisien.
- Sass : CSS Preprocessor untuk menulis CSS dengan lebih efisien.
- esLint : Tools untuk menjaga konsistensi kode dan mendeteksi kesalahan.
- Gsap : Library untuk animasi website.
- SweetAlert2: Library untuk menampilkan alert yang cantik dan responsif.


## Run Locally

Clone the project

```bash
git clone https://github.com/Isshoo/FE_Mamen.git
```

Make sure to be in Frontend-main directory

```bash
cd FE_Mamen
```

Install dependencies

```bash
npm install or npm i
```
Build project

```bash
npm run Build
```

Run the server in Development mode

```bash
npm run dev
```
or Run the server in Production mode

```bash
npm run build-serve
```


## Langkah-langkah Penggunaan

### 1. Mengakses Website tanpa Login
- Kunjungi [MAMEN Website](https://mamen-mdo.vercel.app/)
- Halaman awal website menyediakan berbagai menu untuk diakses:
  - **UMKM**: Lihat daftar UMKM
  - **Produk**: Lihat daftar produk dari seluruh UMKM
  - **About Us**: Informasi mengenai tim dan proyek
  - **Login**: Menu untuk login atau mendaftar pengguna baru

### 2. Melihat Daftar UMKM dan Detail UMKM
- Pilih menu **UMKM** untuk melihat daftar UMKM.
- Gunakan search bar untuk mencari UMKM tertentu.
- Klik nama UMKM pada kartu untuk melihat detail UMKM, termasuk produk dan review dari pengguna.

#### Memberikan Review untuk UMKM
- Setelah login, pengguna dapat memberikan review pada UMKM yang telah dilihat.
- Pada halaman detail UMKM, terdapat form untuk memberikan review.

### 3. Melihat Daftar Produk dan Detail UMKM dari Produk
- Pilih menu **Produk** untuk melihat daftar produk.
- Gunakan search bar untuk mencari produk tertentu.
- Klik nama UMKM di bagian bawah kartu produk untuk menuju ke halaman detail UMKM dari produk tersebut.

### 4. Login dan Registrasi Akun

#### A. Registrasi Akun
- Klik **Daftar** pada halaman login untuk mendaftar akun baru.
- Isi form dengan username/email, password, dan nama pengguna.
- Setelah pendaftaran berhasil, Anda akan diarahkan kembali ke halaman login.

#### B. Login
- Masukkan username dan password untuk login.
- Alternatif: Gunakan username `user1` dan password `user1` untuk login.

### 5. Mengakses Website dengan Login
- Setelah login, Anda akan melihat dua menu tambahan:
  - **Profil**: Menu untuk mengelola UMKM pengguna
  - **Logout**: Untuk keluar dari akun dan kembali ke halaman login

#### A. Profil Tanpa UMKM dan Cara Mendaftarkan UMKM
- Jika belum memiliki UMKM, halaman profil akan menampilkan opsi untuk mendaftarkan UMKM.
- Klik **Tambah UMKM** untuk membuka form pendaftaran UMKM dan isi data UMKM.
- Tekan **Submit** untuk menyimpan data UMKM.

#### B. Profil dengan UMKM
- Setelah UMKM didaftarkan, Anda dapat mengelola UMKM melalui halaman profil.
  - **Tambah atau Ganti Gambar UMKM**: Klik tombol **Upload Gambar** untuk mengganti gambar UMKM.
  - **Edit Data UMKM**: Klik tombol **Edit UMKM** untuk mengubah data UMKM.
  - **Tambah atau Hapus Kategori UMKM**: Klik **Tambah Kategori** untuk menambah kategori dan pilih ikon keranjang sampah untuk menghapus kategori.
  - **Hapus UMKM**: Klik **Hapus UMKM** untuk menghapus UMKM dan konfirmasi penghapusan.

#### C. Menambahkan dan Mengelola Produk
- Scroll ke bagian produk untuk menambah produk baru.
- Klik **Tambah Produk** dan isi data produk pada form popup, lalu tekan **Submit**.
- Untuk mengubah atau menghapus produk, klik tombol **Edit** atau **Hapus** pada kartu produk.

#### Menambah atau Mengganti Gambar Produk
- Klik tombol **Upload Gambar** pada kartu produk untuk mengganti gambar produk.
- Pilih gambar, dan gambar akan muncul sebagai preview. Klik **Submit** untuk menyimpan perubahan.

#### Edit Data Produk
- Klik **Edit** pada kartu produk untuk mengubah data produk.
- Tekan **Submit** untuk menyimpan perubahan.

#### Hapus Produk
- Klik **Hapus** pada kartu produk dan konfirmasi penghapusan produk.

### 6. Memberikan Review untuk UMKM
- Setelah login, Anda dapat memberikan review untuk UMKM.
- Pada halaman profil UMKM, scroll ke bagian bawah untuk menemukan form pengisian review.
- Isi form dengan nama, rating, dan deskripsi review.
- Klik **Submit** untuk mengirimkan review. Review akan muncul pada bagian komentar.

---

## Tim Pengembang
- **Algy F.C. Ngenget** (B243070A)
- **Monica A. Pandeiroth** (B243071A)
- **Sesilia R.M. Pandejlaki** (B243072A)
- **Melia N. Kuntono** (B243073A)

## Link Terkait
- [Dokumentasi Backend](https://github.com/Isshoo/BE_Mamen)
