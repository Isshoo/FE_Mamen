/* eslint-disable class-methods-use-this */
class reviewForm extends HTMLElement {
  emptyContent() {
    this.innerHTML = '';
  }

  connectedCallback() {
    this.render();
  }

  otorisasi() {
    const formDisabler = document.querySelector('.formDisabler');

    const token = localStorage.getItem('accessToken');
    if (token) {
      formDisabler.remove();
    }
  }

  render() {
    this.emptyContent();
    this.innerHTML += `
      <section class="formReviewContainer">
        <div class="formDisabler"><p class="disablerText">Harap Login terlebih dahulu untuk memberikan review</p></div>
        <div class="titleFormReview">
          <h2>Form Review</h2>
        </div>
        <form action="" class="formReview" id="formReview">
          <div class="formReviewDesc">
            <div class="nama-review">
              <label for="namaReviewer">Nama</label>
              <input type="text" name="namaReviewer" id="namaReviewer" placeholder="Nama" required>
            </div>
            <div class="rating-review">
              <label for="userRating">Rating</label>
              <input type="number" name="userRating" id="userRating" min="1" max="5" placeholder="1 - 5" required>
            </div>
            <div class="body-reviews">
              <label for="reviewBody">Review</label>
              <textarea name="reviewBody" id="reviewBody" placeholder="Deskripsi" required></textarea>
            </div>
          </div>
          <button class="btnFormReview" type="submit">Add review</button>
        </form>
      </section>
    `;
    this.otorisasi();
  }
}

customElements.define('form-review', reviewForm);
