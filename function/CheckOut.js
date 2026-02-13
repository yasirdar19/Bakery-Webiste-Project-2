let cart = []; //empty arry storing items 


// Update cart
function updateCartCount() {
  const cartCount = document.getElementById("cartCount");

  if (cartCount) {
    cartCount.textContent = cart.length;
  }
}


//add items to the cart
function addFromCard(card) {

  const name = card.querySelector("h3").textContent;
  const priceText = card.querySelector("h4").textContent;

  // extract number from text like "Price: $10"
  const price = Number(priceText.replace("Price: $", ""));


 
  cart.push({ name, price }); // add item to cart array

  updateCartCount();
}


// show and hide cart
function showCart() {
  const box = document.getElementById("cartBox");
  const itemsDiv = document.getElementById("cartItems");
  const totalEl = document.getElementById("cartTotal");

  // toggle cart visibility
  if (box.style.display === "block") {
    box.style.display = "none";
    return;
  }

  box.style.display = "block";

  itemsDiv.innerHTML = "";// clear previous items (searched from google)

  let total = 0;

  // display all items
  cart.forEach(item => {
    const p = document.createElement("p");
    p.textContent = item.name + " - $" + item.price;
    itemsDiv.appendChild(p);

    total += item.price;
  });

  totalEl.textContent = total;
}


// clear cart
function clearCart() {
  cart = [];
  updateCartCount();

  // refresh cart display if open
  const box = document.getElementById("cartBox");

  if (box.style.display === "block") {
    showCart();
    showCart(); // close + reopen (refresh)
  }
}


// checkout
function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  // calculate total
  let total = 0;
  cart.forEach(item => {
    total += item.price;
  });

  alert("Checkout successful!\nTotal: $" + total + "\nThank you!");

  // reset cart
  cart = [];
  updateCartCount();

  document.getElementById("cartBox").style.display = "none";
}
