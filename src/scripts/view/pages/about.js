import aboutGsapJs from '../../utility/animation/about-page/about-gsap';
import Loading from '../../utility/loading';

const AboutUs = {
  async render() {
    return `
  <section id="aboutSection">
      <div class="about-us">
        <img
        src='./images/coba7.webp' 
        alt="About Image" class="about-image" />
        <div class="txtAbout">
        <h1>About <span>Us</span></h1>
        <p>"Exceptional service isn’t just a perk—it’s your most powerful promotion."</p>
        </div>
      </div>

        <div class="introduction">
            <div class="introduction-content">
                <h2>Introduction <br> To <span>MA</span>MEN</h2>
                <p>Mamen adalah platform yang mendigitalisasi promosi UMKM di Manado. Kami membantu pelaku usaha meningkatkan visibilitas dan penjualan melalui teknologi dan media sosial. </p>
            </div>
        </div>
  <div class="vision-mission">
    <div class="vimi-card left">
      <div class="header red"></div>
      <div class="vimi-content">
        <h2>Our Vision</h2>
        <p>Kami bercita-cita menjadi mitra utama UMKM dalam mendorong pertumbuhan ekonomi melalui solusi inovatif, berkelanjutan, dan berdampak positif bagi masyarakat.</p>
      </div>
    </div>
    <div class="vimi-card right">
      <div class="header orange"></div>
      <div class="vimi-content">
        <h2>Our Mission</h2>
        <p>Kami berkomitmen untuk memberdayakan UMKM dengan menyediakan layanan berkualitas, edukasi bisnis, dan akses teknologi modern guna mendukung keberhasilan usaha mereka.</p>
      </div>
    </div>
  </div>

      <div class="values">
        <div class="values-point">
        <div class="values-item">INTEGRITAS</div>
        <div class="values-item">INOVASI</div>
        <div class="values-item">KUALITAS</div>
        <div class="values-item">KERJASAMA</div>
        </div>
      </div>

      <div class="services">
    <h1 class="services-title">Our Services</h1>
    <div class="services-container">
      <div class="services-item">
        <div class="filter-green"></div>
        <img src="./images/about-us-potrait-small.jpg" alt="Service Image 1" class="service-image">
        <div class="service-overlay">
          <p class="service-title prom">Promotion</p>
        </div>
      </div>
      <div class="services-item">
        <div class="service-overlay">
          <p class="service-text prom">
            Menjadi mitra terbaik bagi UMKM dengan menyediakan solusi inovatif yang membantu mempromosikan dan mengembangkan usaha mereka secara berkelanjutan.
          </p>
        </div>
      </div>
      <div class="services-item">
        <div class="service-overlay">
          <p class="service-text eds">
            Menyediakan edukasi dan informasi terkini dan relevan untuk membantu UMKM tetap kompetitif, mulai dari tren pasar hingga panduan praktis dalam mengelola usaha.
          </p>
        </div>
      </div>
      <div class="services-item">
        <div class="filter-green"></div>
        <img src="./images/about-us-potrait-small.jpg" alt="Service Image 3" class="service-image">
        <div class="service-overlay">
          <p class="service-title eds">Education</p>
        </div>
      </div>
    </div>
  </div>

    <div class="team-member">
        <div class="our-tittle">
            <h1>Our Team Members</h1>
        </div>
        <div class="all-card">
        <div class="member-card">
          <div class="image">
            <img src="images/member1.webp" alt="Member 1">
          </div>
          <h2>ALGY NGENGET</h2>
          <p class="position">Back-End Developer</p>
          <p>
            A fifth-semester Informatics student with a deep interest in web development. 
            Currently furthering skills at Dicoding Indonesia.
          </p>
          <div class="social-links">
            <a href="https://www.linkedin.com/in/algyngenget/"><i class="fab fa-linkedin"></i></a>
            <a href="https://github.com/Isshoo"><i class="fab fa-github"></i></a>
          </div>
        </div>
        <div class="member-card">
          <div class="image">
            <img src="images/member2.webp" alt="Member 2">
          </div>
          <h2>MONICA PANDEIROTH</h2>
          <p class="position">Front-End Dev & Designer</p>
          <p>
            Computer Engineering student 
            with a deep interest in web development and design.
            Have a passion for creative design and singing.
          </p>
          <div class="social-links">
            <a href="https://www.linkedin.com/in/monica-aprilia-pandeiroth-364b79327/"><i class="fab fa-linkedin"></i></a>
            <a href="https://github.com/apriliamonica"><i class="fab fa-github"></i></a>
          </div>
        </div>
        <div class="member-card">
          <div class="image">
            <img src="images/member3.webp" alt="Member 3">
          </div>
          <h2>SESILIA PANDEJLAKI</h2>
          <p class="position">Front-End Dev & Designer</p>
          <p>
            Informatics Engineering Student | Interested in becoming a Web Developer by studying ad Dicoding Indonesia
          </p>
          <div class="social-links">
            <a href="https://www.linkedin.com/in/sesilia-riliany-mutiara-pandejlaki-0856431b6/"><i class="fab fa-linkedin"></i></a>
            <a href="https://github.com/srmpandejlaki"><i class="fab fa-github"></i></a>
          </div>
        </div>
        <div class="member-card">
          <div class="image">
            <img src="images/member4.webp" alt="Member 4">
          </div>
          <h2>MELIA KUNTONO</h2>
          <p class="position">Front-End Dev & Designer</p>
          <p>
          A fifth-semester Informatics student with a passion for UI/UX designing experiences.
          gained hands-on experience in designing UI.
          </p>
          <div class="social-links">
            <a href="https://www.linkedin.com/in/melia-nova-kuntono-974884249/"><i class="fab fa-linkedin"></i></a>
            <a href="https://github.com/Hanliehae"><i class="fab fa-github"></i></a>
          </div>
        </div>
      </div>
    </div>
  <div>
        <div class="separator"></div>
    </div>
  </section>
    `;
  },

  async afterRender() {
    const container = document.querySelector('#aboutSection');
    await Loading.loadingPage(container);

    const pageload = document.querySelector('.pageload');
    if (pageload) {
      pageload.remove();
    }
    aboutGsapJs();
  },
};

export default AboutUs;
