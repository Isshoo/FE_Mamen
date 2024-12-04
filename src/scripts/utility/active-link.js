const setActiveLink = () => {
  const currentPath = window.location.hash; // Mendapatkan hash dari URL (contoh: #/home)

  // Ambil semua link dalam nav-menu
  const navLinks = document.querySelectorAll('.nav-link');
  const profilNav = document.querySelector('.fa-regular.fa-user');

  if (currentPath === '#/profile') {
    profilNav.classList.add('active-link');
  } else {
    profilNav.classList.remove('active-link');
  }

  navLinks.forEach((link) => {
    // Periksa apakah href dari link cocok dengan currentPath
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active-link');
    } else {
      link.classList.remove('active-link');
    }
  });
};

// Jalankan fungsi saat halaman dimuat
window.addEventListener('load', setActiveLink);

// Jalankan fungsi saat hash berubah (untuk menangkap navigasi ke halaman lain)
window.addEventListener('hashchange', setActiveLink);
