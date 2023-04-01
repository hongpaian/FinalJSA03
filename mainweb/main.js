function search(){
    let input = document.getElementById('search').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('storeitems');
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}
function donate(){
    location.replace("../donate/donate.html")
}
function change7(){
    let a = document.getElementById("txt").value
    if (a == "" ){
        alert("Bạn hãy chia sẻ điều gì đó")
    }
    else{
        alert("Cảm ơn bạn đã chia sẻ")
    }
}
function shoppingcart(){
    location.replace("../cart/cart.html")
}

// Select the add-to-cart buttons
const addToCartButtons = document.querySelectorAll('.addtocart');

// Select the cart list and cart total price span
const cartList = document.querySelector('.cart-list');
const cartTotalPrice = document.querySelector('.cart-total-price');

// Select the clear cart button and cart popup
const clearCartButton = document.querySelector('.clear-cart-btn');
const cartPopup = document.querySelector('.cart-popup');

// Create an empty array to store cart items
let cartItems = [];

// Function to add item to cart
function addToCart() {
  // Get the item details from the store item element
  const storeItem = event.target.parentNode.parentNode;
  const itemName = storeItem.querySelector('.name').textContent;
  const itemPrice = storeItem.querySelector('.price').textContent;

  // Create a new cart item object with the item details and push it to the cartItems array
  const cartItem = {name: itemName, price: itemPrice};
  cartItems.push(cartItem);

  // Update the cart list and cart total price
  updateCart();
}

// Function to update the cart list and cart total price
function updateCart() {
  // Clear the cart list
  cartList.innerHTML = '';

  // Add each cart item to the cart list
  cartItems.forEach(function(item) {
    const li = document.createElement('li');
    li.innerHTML = `${item.name} <span>${item.price}</span>`;
    cartList.appendChild(li);
  });

  // Calculate and display the cart total price
  const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price.slice(7)), 0);
  cartTotalPrice.textContent = `$${totalPrice.toFixed(2)}`;

  // Show the cart popup
  cartPopup.style.display = 'flex';
}

// Function to clear the cart and hide the cart popup
function clearCart() {
  cartItems = [];
  updateCart();
  cartPopup.style.display = 'none';
}

// Add event listener to the add-to-cart buttons
addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

// Add event listener to the clear cart button
clearCartButton.addEventListener('click', clearCart);

function addToCart() {
  // Get the item details from the store item element
  const storeItem = event.target.parentNode.parentNode;
  const itemName = storeItem.querySelector('.name').textContent;
  const itemPrice = storeItem.querySelector('.price').textContent;

  // Create a new cart item object with the item details and push it to the cartItems array
  const cartItem = {name: itemName, price: itemPrice};
  cartItems.push(cartItem);

  // Remove the event listener from the button
  event.target.removeEventListener('click', addToCart);

  // Update the cart list and cart total price
  updateCart();

  // Add the event listener back to the button
  event.target.addEventListener('click', addToCart);
}
function update(){
  alert("Will update soon")
}