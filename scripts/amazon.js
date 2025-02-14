let countAddToCartProduct = document.querySelector('.cart-quantity');
renderingProduct();
AddToCartFun();


function AddToCartFun() {
  document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click', (event) => {
      // let productId = event.target.getAttribute('data-product-id');


      const productId = button.dataset.productId;
      let quantitySelectElement = getSiblingByClass(button, 'product-quantity-container');

      AddItemToCart({
        productId,
        quantity: Number(quantitySelectElement.children[0].value)
      })
      countAddToCartProduct.innerHTML = totalCount();

    });
  });

}

function renderingProduct() {

  let productContainers = ``;
  products.forEach((prodObj) => {
    productContainers +=
      `<div class="product-container">
        <div class="product-image-container">
          <img class="product-image" src="${prodObj.image}">
        </div>

        <div class="product-name limit-text-to-2-lines">
            ${prodObj.name}
        </div>

        <div class="product-rating-container">
          <img class="product-rating-stars" src="images/ratings/rating-${prodObj.rating.stars * 10}.png">
          <div class="product-rating-count link-primary">
            ${prodObj.rating.count}
          </div>
        </div>

        <div class="product-price">
          $${numeral(prodObj.priceCents / 100).format('0.00')}
        </div>

        <div class="product-quantity-container">
          <select class = 'js-select-quantity'>
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        <div class="product-spacer"></div>

        <div class="added-to-cart">
          <img src="images/icons/checkmark.png">
          Added
        </div>

        <button class="add-to-cart-button button-primary  js-add-to-cart" data-product-id=${prodObj.id}>
          Add to Cart
        </button>
      </div>`;
  });
  document.querySelector('.products-grid').innerHTML = productContainers;
}
function AddItemToCart(ItemObj) {
  if (cartDict[ItemObj.productId] != null) {
    cartDict[ItemObj.productId].quantity += ItemObj.quantity;
  }
  else {
    cartDict[ItemObj.productId] = ItemObj;
  }

}
function totalCount() {
  let totalCount = 0;
  for (let key in cartDict) {
    totalCount += cartDict[key].quantity;
  }
  return totalCount;
}
function getSiblingByClass(element, targetClass) {
  const parent = element.parentNode;
  const siblings = parent.children;
  for (let i = 0; i < siblings.length; i++) {
    if (siblings[i] !== element && siblings[i].classList.contains(targetClass)) {
      return siblings[i];
    }
  }
  return null;
}

