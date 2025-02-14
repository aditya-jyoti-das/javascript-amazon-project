import * as cartObj from "./cart.js";
import { products } from "../data/products.js";

updatingReturnToHomeLinkElement();

RenderingCheckout();

export function RenderingCheckout() {
  let orderSummaryHTML = ``;
  let i = 0;
  for (let key in cartObj.cartDict) {
    ++i;
    let prodObj = findingTheProductDetail(key);
    orderSummaryHTML +=
      ` <div class="cart-item-container">
          <div class="delivery-date">
            Delivery date: Tuesday, June 21
          </div>

          <div class="cart-item-details-grid">
            <img class="product-image" src="${prodObj.image}">

            <div class="cart-item-details">
              <div class="product-name">
                ${prodObj.name}
              </div>
              <div class="product-price">
                $${(prodObj.priceCents / 100).toFixed(2)}
              </div>
              <div class="product-quantity">
                <span>
                  Quantity: <span class="quantity-label">${cartObj.cartDict[key].quantity}</span>
                </span>
                <span class="update-quantity-link link-primary">
                  Update
                </span>
                <span class="delete-quantity-link link-primary">
                  Delete
                </span>
              </div>
            </div>

            <div class="delivery-options">
              <div class="delivery-options-title">
                Choose a delivery option:
              </div>
              <div class="delivery-option">
                <input type="radio" checked class="delivery-option-input" name="delivery-option-${i}">
                <div>
                  <div class="delivery-option-date">
                    Tuesday, June 21
                  </div>
                  <div class="delivery-option-price">
                    FREE Shipping
                  </div>
                </div>
              </div>
              <div class="delivery-option">
                <input type="radio" class="delivery-option-input" name="delivery-option-${i}">
                <div>
                  <div class="delivery-option-date">
                    Wednesday, June 15
                  </div>
                  <div class="delivery-option-price">
                    $4.99 - Shipping
                  </div>
                </div>
              </div>
              <div class="delivery-option">
                <input type="radio" class="delivery-option-input" name="delivery-option-${i}">
                <div>
                  <div class="delivery-option-date">
                    Monday, June 13
                  </div>
                  <div class="delivery-option-price">
                    $9.99 - Shipping
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`;

  }
  document.querySelector('.order-summary').innerHTML = orderSummaryHTML;
  // console.log(document.querySelector('.order-summary'))

}
export function findingTheProductDetail(key) {
  let retProdObj = null;
  products.some((prodObj) => {
    if (prodObj.id === key) {
      retProdObj = prodObj;
      return true;
    }
    return false;
  });
  return retProdObj;
}
export function updatingReturnToHomeLinkElement() {
  document.querySelector('.return-to-home-link').innerText = cartObj.totalCount() + ' Items';
}

