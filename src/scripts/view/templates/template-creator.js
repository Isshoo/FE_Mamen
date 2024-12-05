/* eslint-disable import/newline-after-import */
// import CONFIG from '../../globals/config';
import Utils from '../../utility/utils';
const createUmkmSliderTemplate = (umkm) => `
            <div
              data-id="${umkm.id}" 
              class="slides"
              style="background-image: url(${umkm.cover_url ? umkm.cover_url : './images/template-umkm-img.png'})"
              onerror="this.onerror=null;this.style.backgroundImage=url('./images/template-umkm-img.png');"
            >
            <span>${umkm.rating}</span>
              <div class="content">
                <h2>${umkm.name}</h2>
                <div class="sub"><p class="subs">${umkm.subdistrict}</p></div>
                <div class="cate">${umkm.categories && umkm.categories.length > 0
    ? umkm.categories.map((category) => `<p class="cate-item">${category}</p>`).join('')
    : '-'}</div>
              </div>
            </div>
`;

const createUmkmItemTemplate = (umkm) => `
            <article class="umkm-card">
              <div class="umkm-img">
                <img 
                class="lazyload" 
                data-src="${umkm.cover_url || './images/template-umkm-img.png'}" 
                alt="${umkm.name}" 
                onerror="this.onerror=null;this.src='./images/template-umkm-img.png';" 
              />
              </div>

              <div class="umkm-info">
                <h3><a href="/#/umkms/${umkm.id}">${umkm.name} <i class="fa-solid fa-arrow-up-right-from-square"></i></a></h3>
                <p>
                ${umkm.description}
                </p>
                <span>${umkm.subdistrict}</span>
              </div>
              <div class="umkm-rate">
                <i>&#9734;</i>
                <p>${umkm.rating}</p>
              </div>
            </article>
`;
const createProductItemTemplate = (product) => `
            <article class="product-card">
              <div class="product-img">
                <img 
                id="product-imgs-${product.id}" 
                class="lazyload" 
                data-src="${product.cover_url || './images/template-product-img.png'}" 
                alt="${product.name}" 
                onerror="this.onerror=null;this.src='./images/template-product-img.png';" 
              />
              <form id="addImageFormProd-${product.id}" class="addImageFormProd" data-id="${product.id}">
                <label id="addImgLabelProd-${product.id}" for="addimageprod-${product.id}"><i class="fa-solid fa-download"></i></label>
                <input type="file" class="addimageprod" id="addimageprod-${product.id}" accept="image/*" name="addimageprod-${product.id}" placeholder="Maks. 2mb" required>
                <button class="resetImgProd" id="resetImgProd-${product.id}" type="reset">reset</button>
                <button class="submitImgProd" id="submitImgProd-${product.id}" type="submit">Submit</button>
              </form>
              </div>

              <div class="product-info">
                <span>Rp. ${product.price}</span>
                <h3><a href="/#/products/${product.id}">${product.name}</a></h3>
                <p class="prod-type">
                ${product.product_type}
                </p>
                <p class="prod-des">
                ${product.description}
                </p>
                <div class="prod-buttons" >
                 <button data-id="${product.id}" class="editProdBtn"><i class="fa-regular fa-pen-to-square"></i></button>
                 <button data-id="${product.id}" class="deleteProdBtn"><i class="fa-solid fa-trash-can"></i></button>
                </div>
              </div>
            </article>
`;

const createFreeProductItemTemplate = (product) => `
            <article class="product-card">
              <div class="product-img">
                <img 
                id="product-imgs-${product.id}" 
                class="lazyload" 
                data-src="${product.cover_url || './images/template-product-img.png'}" 
                alt="${product.name}" 
                onerror="this.onerror=null;this.src='./images/template-product-img.png';" 
              />
              </div>

              <div class="product-info">
                <span>Rp. ${product.price}</span>
                <h3>${product.name}</h3>
                <p class="prod-type">
                ${product.product_type}
                </p>
                <p class="prod-des">
                ${product.description}
                </p>
                <p class="prod-umkm"><a href="/#/umkms/${product.umkms_id}">${product.umkm_name} <i class="fa-solid fa-arrow-up-right-from-square"></i></a></p>
              </div>
            </article>
`;
const createFreeProductItemForUmkmTemplate = (product) => `
            <article class="product-card">
              <div class="product-img">
                <img 
                id="product-imgs-${product.id}" 
                class="lazyload" 
                data-src="${product.cover_url || './images/template-product-img.png'}" 
                alt="${product.name}" 
                onerror="this.onerror=null;this.src='./images/template-product-img.png';" 
              />
              </div>

              <div class="product-info">
                <span>Rp. ${product.price}</span>
                <h3>${product.name}</h3>
                <p class="prod-type">
                ${product.product_type}
                </p>
                <p class="prod-des">
                ${product.description}
                </p>
                </div>
            </article>
`;

const createReviewItemTemplate = (review) => `
          <div class="review-item">
            <div class="review-profil">
              <div class="review-name">
                <img src="./images/template-profil-review.png" alt="template foto profil">
                <p>${review.name}</p>
              </div>
              <div class="review-rating">
                <i class="fa-solid fa-star"></i>
                <h4>${review.user_rating}</h4>
              </div>
            </div>
            <div class="review-des">
                <p>" ${review.review} "</p>
            </div>
            <div class="review-date">
              <p></p>
              <p class="tggl">${Utils.parseDate(review.date)}</p>
            </div>
          </div>
`;
const createHomeReviewItemTemplate = (review) => `
          <div class="review-item">
            <div class="review-profil">
              <div class="review-name">
                <img src="./images/template-profil-review.png" alt="template foto profil">
                <p>${review.name}</p>
              </div>
              <div class="review-rating">
                <i class="fa-solid fa-star"></i>
                <h4>${review.user_rating}</h4>
              </div>
            </div>
            <div class="review-des">
                <p>" ${review.review} "</p>
            </div>
            <div class="review-date">
              <p>${review.umkm_name}</p>
              <p class="tggl">${Utils.parseDate(review.date)}</p>
            </div>
          </div>
`;

const createPageLoading = () => `
  <div class="pageload">
    <div class="pageCenter">
      <div class="pageRing"></div>
    </div>
  </div>
`;

const createSectionLoading = () => `
  <div class="sectionload">
    <div class="sectionCenter">
      <div class="sectionRing"></div>
    </div>
  </div>
  `;

export {
  createUmkmSliderTemplate,
  createUmkmItemTemplate,
  createProductItemTemplate,
  createReviewItemTemplate,
  createPageLoading,
  createSectionLoading,
  createFreeProductItemTemplate,
  createHomeReviewItemTemplate,
  createFreeProductItemForUmkmTemplate,
};
