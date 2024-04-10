// make the "Add to Cart" button interactive
export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart){
    cart = [{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2,
        deliveryOptionId: '1'
    }, {
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 1,
        deliveryOptionId: '2'
    }];
}

function saveToLocalStorage (){
    localStorage.setItem('cart', JSON.stringify(cart));
}

// make the "Add to Cart" button interactive
export function addToCart (productId){
    let matchingItem;
    cart.forEach((cartItem) => {
      if (productId === cartItem.productId){
        matchingItem = cartItem;
      }
    });
      if (matchingItem) {
        matchingItem.quantity += 1;
      }else {
        cart.push({
          productId: productId,
          quantity: 1,
          deliveryOptionId: '1'
        });
      }
      saveToLocalStorage();
}

//delete products from cart when clicking delete....first part
// 1. remove the product from the HTML....first part

// to remove the productId from the cart
// 1. create a new array
// 2. loop through the cart
// 3. add each product to the new array, except for this productId
export function removeFromCart (productId){
    // 1. create a new array
    const newCart = [];

    // 2. loop through the cart
    cart.forEach((cartItem) => {
        // 3. add each product to the new array, except for this productId
        if (cartItem.productId !== productId){
            newCart.push(cartItem);
        }
    });
    // take the our new cart and replace the cart
    cart = newCart;

    saveToLocalStorage();
}

export function updateDeliveryOption(productId, deliveryOptionId){
  let matchingItem;
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId){
      matchingItem = cartItem;
    }
  });

  matchingItem.deliveryOptionId = deliveryOptionId;

  saveToLocalStorage();
}