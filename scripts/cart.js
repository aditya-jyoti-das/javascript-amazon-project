export let cartDict = {}



let countAddToCartProduct = document.querySelector('.cart-quantity');

export function AddToCartFun() {
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
