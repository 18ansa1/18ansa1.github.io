// buttonScripts.js

function addToCart(productId, productName, productPrice) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Add the new product to the cart
  cart.push({ id: productId, name: productName, price: productPrice });

  // Save the updated cart back to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Product added to cart!");
}

function removeFromCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter((id) => id !== productId);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Product removed from cart!");
}

function checkout() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    localStorage.removeItem("cart");
    alert("Checkout successful!");
    window.location.reload(); // Reload the window after the alert
  }
}

function clearCart() {
  localStorage.removeItem("cart");
}

export { addToCart, removeFromCart, checkout, clearCart };
