class FooterBar extends HTMLElement {
  emptyContent() {
    this.innerHTML = '';
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.emptyContent();
    this.innerHTML += `
      <div class="footer-container">
        <div class="footer-content">
          <div class="footer-info">
            <a href="#" class="footer-logo"><h3>Ma<span>men</span></h3></a>

            <p class="footer-description">
              Temukan dan dukung UMKM lokal di Mamen! Jelajahi bisnis-bisnis unik dari Sulawesi Utara dan bantu tumbuhkan ekonomi bersama.
            </p>
          </div>

          <div class="footer-data">
            <div>
              <h3 class="footer-title">About</h3>

              <ul class="footer-links">
                <li>
                  <a href="#/about" class="footer-link">About us</a>
                </li>

                <li>
                  <a href="https://www.dicoding.com/" class="footer-link">Dicoding</a>
                </li>

                <li>
                  <a href="https://pusatinformasi.kampusmerdeka.kemdikbud.go.id/hc/id" class="footer-link">SIB</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="footer-title">Tech Stack</h3>

              <ul class="footer-links">
                <li>
                  <a href="https://nodejs.org/en" class="footer-link">NodeJs</a>
                </li>

                <li>
                  <a href="https://hapi.dev/" class="footer-link">HapiJs</a>
                </li>

                <li>
                  <a href="https://webpack.js.org/" class="footer-link">Webpack</a>
                </li>

                <li>
                  <a href="https://sass-lang.com/" class="footer-link">Sass</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="footer-title">Contact</h3>

              <ul class="footer-links">
                <li>
                  <a href="https://www.linkedin.com/in/monica-aprilia-pandeiroth-364b79327/" class="footer-link">Monica St.</a>
                </li>

                <li>
                  <a href="https://www.linkedin.com/in/mutiara-pandejlaki-0856431b6/" class="footer-link">Muti St.</a>
                </li>

                <li>
                  <a href="https://www.linkedin.com/in/melia-nova-kuntono-974884249/" class="footer-link">Melia St.</a>
                </li>

                <li>
                  <a href="www.linkedin.com/in/algyngenget" class="footer-link">Algy Nt.</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="footer-title">Platform</h3>

              <ul class="footer-links">
                <li>
                  <a href="https://github.com/" class="footer-link">Github</a>
                </li>

                <li>
                  <a href="https://aws.amazon.com" class="footer-link">AWS</a>
                </li>

                <li>
                  <a href="https://www.netlify.com/" class="footer-link">Postman</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="footer-group">
          
          <div class="footer-social">
            <a
              href="https://web.facebook.com/mutiara.pandelaki/"
              class="footer-social-link"
            >
              <i class="ri-facebook-line"></i>
            </a>

            <a
              href="https://www.instagram.com/apriliamnc?igsh=bG81NjdhYnZrdjBq"
              class="footer-social-link"
            >
              <i class="ri-instagram-line"></i>
            </a>

            <a
              href="https://x.com/Isshoo25"
              class="footer-social-link"
            >
              <i class="ri-twitter-line"></i>
            </a>

            <a
              href="https://youtube.com/@lianva?si=QdDK6UDVSNT6TN5q"
              class="footer-social-link"
            >
              <i class="ri-youtube-line"></i>
            </a>
          </div>

          <div class="footer-copy">
            <p>
              &#169; Copyright <span>Mamenmdo.</span> All rights reserved
            </p>
          </div>
        </div>
      </div>
`;
  }
}

customElements.define('footer-bar', FooterBar);
