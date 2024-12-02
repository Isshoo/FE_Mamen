class HeadlineSection extends HTMLElement {
  emptyContent() {
    this.innerHTML = '';
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.emptyContent();
    this.innerHTML += `
    <section>
        <h2>Explore Now</h2>
        <div>
            <article>
                <picture><i class="fa-solid fa-utensils"></i></picture>
                <h3>Kuliner</h3>
                <p>Dapatkan kuliner-kuliner terbaik khas Manado dari berbagai daerah yang mungkin saja belum kau ketahui. Eksplore sekarang!</p>
            </article>
            <article class="middle-art">
                <picture><i class="fa-solid fa-fingerprint"></i></picture>
                <h3>Kerajinan</h3>
                <p>kerajinan-kerajinan tradisional yang beragam dari daerah Manado dapat kamu temukan disini. Jangan lupa untuk berkunjung!</p>
            </article>
            <article>
                <picture><i class="fa-solid fa-shop"></i></picture>
                <h3>Perdagangan</h3>
                <p>Jangan lewatkan kesempatan untuk mendapatkan produk-produk berkualitas di Manado dari produsennya langsung!</p>
            </article>
        </div>
    </section>
    `;
  }
}

customElements.define('headline-section', HeadlineSection);
