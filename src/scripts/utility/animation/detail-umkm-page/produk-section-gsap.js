import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function DetailUmkmProdukGsapJs() {
  gsap.registerPlugin(ScrollTrigger);

  // PRODUK CARD
  gsap.from('.product-card', {
    opacity: 0,
    x: 0,
    duration: 2,
    ease: 'power2.out',
    stagger: 0.5,
    scrollTrigger: {
      trigger: '.list-products', // Elemen container yang memicu animasi
      start: 'top 70%', // Mulai animasi saat container mencapai 80% dari viewport
      end: 'bottom 20%', // Selesai animasi saat container mencapai 20% dari viewport
      toggleActions: 'play none none reverse', // Mainkan animasi maju dan mundur
    },
  });
}
