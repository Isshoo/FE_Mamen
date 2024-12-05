import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function aboutGsapJs() {
  gsap.registerPlugin(ScrollTrigger);

  // HERO SECTION
  gsap.from('.txtAbout h1', {
    opacity: 0,
    y: 20,
    duration: 2,
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: '.txtAbout', // Sesuaikan dengan elemen hero section
      start: 'top 80%', // Animasi dimulai ketika hero 80% terlihat
      end: 'bottom 60%', // Animasi selesai ketika hero 60% terlihat
      toggleActions: 'play none none reverse', // Mainkan animasi maju dan mundur
    },
  });
  gsap.from('.txtAbout h1 span', {
    opacity: 0,
    y: 20,
    duration: 2,
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: '.txtAbout', // Sesuaikan dengan elemen hero section
      start: 'top 80%', // Animasi dimulai ketika hero 80% terlihat
      end: 'bottom 60%', // Animasi selesai ketika hero 60% terlihat
      toggleActions: 'play none none reverse', // Mainkan animasi maju dan mundur
    },
  });
  gsap.from('.txtAbout p', {
    opacity: 0,
    y: 20,
    duration: 2,
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: '.txtAbout', // Sesuaikan dengan elemen hero section
      start: 'top 80%', // Animasi dimulai ketika hero 80% terlihat
      end: 'bottom 60%', // Animasi selesai ketika hero 60% terlihat
      toggleActions: 'play none none reverse', // Mainkan animasi maju dan mundur
    },
  });
  gsap.from('.introduction-content h2', {
    opacity: 0,
    x: -30,
    duration: 2,
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: '.introduction-content', // Sesuaikan dengan elemen hero section
      start: 'top 80%', // Animasi dimulai ketika hero 80% terlihat
      end: 'bottom 60%', // Animasi selesai ketika hero 60% terlihat
      toggleActions: 'play none none reverse', // Mainkan animasi maju dan mundur
    },
  });
  gsap.from('.introduction-content p', {
    opacity: 0,
    x: 30,
    duration: 2,
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: '.introduction-content', // Sesuaikan dengan elemen hero section
      start: 'top 80%', // Animasi dimulai ketika hero 80% terlihat
      end: 'bottom 60%', // Animasi selesai ketika hero 60% terlihat
      toggleActions: 'play none none reverse', // Mainkan animasi maju dan mundur
    },
  });
  gsap.from('.vimi-card.left', {
    opacity: 0,
    x: -30,
    duration: 2,
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: '.vision-mission', // Sesuaikan dengan elemen hero section
      start: 'top 80%', // Animasi dimulai ketika hero 80% terlihat
      end: 'bottom 60%', // Animasi selesai ketika hero 60% terlihat
      toggleActions: 'play none none reverse', // Mainkan animasi maju dan mundur
    },
  });
  gsap.from('.vimi-card.right', {
    opacity: 0,
    x: 30,
    duration: 2,
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: '.vision-mission', // Sesuaikan dengan elemen hero section
      start: 'top 80%', // Animasi dimulai ketika hero 80% terlihat
      end: 'bottom 60%', // Animasi selesai ketika hero 60% terlihat
      toggleActions: 'play none none reverse', // Mainkan animasi maju dan mundur
    },
  });

  gsap.from('.values-item', {
    opacity: 0,
    y: 20,
    duration: 2,
    ease: 'power2.out',
    stagger: 0.5,
    scrollTrigger: {
      trigger: '.values-point', // Elemen container yang memicu animasi
      start: 'top 80%', // Mulai animasi saat container mencapai 80% dari viewport
      end: 'bottom 20%', // Selesai animasi saat container mencapai 20% dari viewport
      toggleActions: 'play none none reverse', // Mainkan animasi maju dan mundur
    },
  });
  gsap.from('.service-title.prom', {
    opacity: 0,
    x: 0,
    duration: 2,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.service-title.prom', // Elemen container yang memicu animasi
      start: 'top 80%', // Mulai animasi saat container mencapai 80% dari viewport
      end: 'bottom 20%', // Selesai animasi saat container mencapai 20% dari viewport
      toggleActions: 'play none none reverse', // Mainkan animasi maju dan mundur
    },
  });
  gsap.from('.service-text.prom', {
    opacity: 0,
    x: 0,
    duration: 2,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.service-text.prom', // Elemen container yang memicu animasi
      start: 'top 80%', // Mulai animasi saat container mencapai 80% dari viewport
      end: 'bottom 20%', // Selesai animasi saat container mencapai 20% dari viewport
      toggleActions: 'play none none reverse', // Mainkan animasi maju dan mundur
    },
  });
  gsap.from('.service-title.eds', {
    opacity: 0,
    x: 0,
    duration: 2,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.service-title.eds', // Elemen container yang memicu animasi
      start: 'top 80%', // Mulai animasi saat container mencapai 80% dari viewport
      end: 'bottom 20%', // Selesai animasi saat container mencapai 20% dari viewport
      toggleActions: 'play none none reverse', // Mainkan animasi maju dan mundur
    },
  });
  gsap.from('.service-text.eds', {
    opacity: 0,
    x: 0,
    duration: 2,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.service-text.eds', // Elemen container yang memicu animasi
      start: 'top 80%', // Mulai animasi saat container mencapai 80% dari viewport
      end: 'bottom 20%', // Selesai animasi saat container mencapai 20% dari viewport
      toggleActions: 'play none none reverse', // Mainkan animasi maju dan mundur
    },
  });
  gsap.from('#aboutSection .services-title', {
    opacity: 0,
    z: -10,
    duration: 2,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '#aboutSection .services-title', // Elemen container yang memicu animasi
      start: 'top 80%', // Mulai animasi saat container mencapai 80% dari viewport
      end: 'bottom 20%', // Selesai animasi saat container mencapai 20% dari viewport
      toggleActions: 'play none none reverse', // Mainkan animasi maju dan mundur
    },
  });
  gsap.from('.team-member .our-tittle h1', {
    opacity: 0,
    y: 20,
    duration: 2,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.team-member .our-tittle h1', // Elemen container yang memicu animasi
      start: 'top 80%', // Mulai animasi saat container mencapai 80% dari viewport
      end: 'bottom 20%', // Selesai animasi saat container mencapai 20% dari viewport
      toggleActions: 'play none none reverse', // Mainkan animasi maju dan mundur
    },
  });
  gsap.from('.member-card', {
    opacity: 0,
    x: 0,
    duration: 2,
    ease: 'power2.out',
    stagger: 0.5,
    scrollTrigger: {
      trigger: '.all-card', // Elemen container yang memicu animasi
      start: 'top 80%', // Mulai animasi saat container mencapai 80% dari viewport
      end: 'bottom 20%', // Selesai animasi saat container mencapai 20% dari viewport
      toggleActions: 'play none none reverse', // Mainkan animasi maju dan mundur
    },
  });
}
