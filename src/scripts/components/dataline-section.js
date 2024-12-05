class DatalineSection extends HTMLElement {
  emptyContent() {
    this.innerHTML = '';
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.emptyContent();
    this.innerHTML += `
        <section id="datalineCon">
            <div class="dataline">
              <p>"Exceptional service isn’t just a perk—it’s your most powerful promotion."</p>
            </div>
            <div class="category-line">
              <section class="category-list left">
                <div class="category-icons umkm">
                  <article>
                    <picture><i class="fa-solid fa-user-tie"></i></picture>
                    <h4>Fashion</h4>
                  </article>
                  <article>
                    <picture><i class="fa-solid fa-bag-shopping"></i></picture>
                    <h4>Souvenir</h4>
                  </article>
                  <article>
                    <picture><i class="fa-solid fa-utensils"></i></picture>
                    <h4>Kuliner</h4>
                  </article>
                </div>
                <div class="category-sub left">
                  <h3>UMKM</h3>
                </div>
              </section>
              <section class="category-list right">
                <div class="category-sub right">
                  <h3>Product</h3>
                </div>
                <div class="category-icons">
                  <article>
                    <picture><i class="fa-solid fa-burger"></i></i></picture>
                    <h4>Foods</h4>
                  </article>
                  <article>
                    <picture><i class="fa-solid fa-coins"></i></picture>
                    <h4>Jewelry</h4>
                  </article>
                  <article>
                    <picture><i class="fa-solid fa-shirt"></i></picture>
                    <h4>T-Shirt</h4>
                  </article>
                </div>
              </section>
            </div>
        </section>
    `;
  }
}

customElements.define('dataline-section', DatalineSection);
