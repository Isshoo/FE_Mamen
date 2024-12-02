import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function homeGsapJs() {
  gsap.registerPlugin(ScrollTrigger);

  // HERO SECTION
  gsap.from('header-bar', {
    opacity: 0,
    y: -30,
    duration: 2,
    ease: 'power2.inOut',

  });
  gsap.from('.home-content h1', {
    opacity: 0,
    y: -20,
    duration: 2,
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: '.home-content', // Sesuaikan dengan elemen hero section
      start: 'top 80%', // Animasi dimulai ketika hero 80% terlihat
      end: 'bottom 60%', // Animasi selesai ketika hero 60% terlihat
      toggleActions: 'play none none reverse', // Mainkan animasi maju dan mundur
    },
  });

  gsap.from('.home-content p', {
    opacity: 0,
    x: 20,
    duration: 2.5,
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: '.home-content',
      start: 'top 80%',
      end: 'bottom 60%',
      toggleActions: 'play none none reverse',
    },
  });
  gsap.from('.home-content button', {
    opacity: 0,
    y: 20,
    duration: 2.5,
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: '.home-content',
      start: 'top 80%',
      end: 'bottom 60%',
      toggleActions: 'play none none reverse',
    },
  });

  // HEADLINE SECTION
  gsap.from('headline-section section h2', {
    opacity: 0,
    y: 20,
    duration: 2.5,
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: 'headline-section section',
      start: 'top 90%',
      end: 'bottom 60%',
      toggleActions: 'play none none reverse',
    },
  });
  gsap.from('headline-section section div article', {
    opacity: 0,
    x: 0,
    duration: 2.5,
    ease: 'power2.inOut',
    stagger: 0.2,
    scrollTrigger: {
      trigger: 'headline-section section div article',
      start: 'top 80%',
      end: 'bottom 60%',
      toggleActions: 'play none none reverse',
    },
  });

  // INFO UMKM
  gsap.from('.infoUMKM #umkm-list', {
    opacity: 0,
    x: -30,
    duration: 3,
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: '.infoUMKM',
      start: 'top 80%', // Animasi dimulai saat elemen berada 80% dari bawah viewport
      end: 'bottom 60%', // Animasi berakhir saat elemen 60% dari bawah viewport
      toggleActions: 'play none none reverse', // Mainkan animasi ke depan saat elemen masuk viewport
    },
  });
  gsap.from('.infoUMKM .info', {
    opacity: 0,
    x: 30,
    duration: 3,
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: '.infoUMKM', // Elemen pemicu
      start: 'top 80%',
      end: 'bottom 60%',
      toggleActions: 'play none none reverse',
    },
  });

  gsap.from('.prev', {
    opacity: 0,
    y: 20,
    duration: 1.5,
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: '.prev',
      start: 'top 90%',
      end: 'bottom 70%',
      toggleActions: 'play none none reverse',
    },
  });

  gsap.from('.next', {
    opacity: 0,
    y: 20,
    duration: 1.5,
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: '.next',
      start: 'top 90%',
      end: 'bottom 70%',
      toggleActions: 'play none none reverse',
    },
  });

  // DATALINE
}
