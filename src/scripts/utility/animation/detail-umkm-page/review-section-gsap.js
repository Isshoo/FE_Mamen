import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function detailUmkmReviewGsapJs() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from('form-review', {
    opacity: 0,
    x: 0,
    duration: 1.5,
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: 'form-review', // Elemen pemicu
      start: 'top 80%',
      end: 'bottom 60%',
      toggleActions: 'play none none reverse',
    },
  });

  gsap.from('.review-item', {
    opacity: 0,
    x: 0,
    duration: 2,
    ease: 'power2.out',
    stagger: 0.5,
    scrollTrigger: {
      trigger: '.detailumkm-reviews', // Elemen container yang memicu animasi
      start: 'top 70%', // Mulai animasi saat container mencapai 80% dari viewport
      end: 'bottom 20%', // Selesai animasi saat container mencapai 20% dari viewport
      toggleActions: 'play none none reverse', // Mainkan animasi maju dan mundur
    },
  });
}
