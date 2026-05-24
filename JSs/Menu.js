const categories = document.getElementById("categories");
const menuItems = document.getElementById("menuItems");
const content = document.getElementById("content");

const cartItems = document.getElementById("cartItems");
const totalEl = document.getElementById("total");

let cart = [];

// MENU DATA
let menus = {};

// LOAD JSON FILE
fetch("../JSON/MenuData.json")
  .then((res) => res.json())
  .then((data) => {
    menus = data;
  });

// SHOW MENU WITH STAGGER
function showMenu(type) {
  categories.classList.remove("active");

  setTimeout(() => {
    const items = menus[type];

    content.innerHTML = "";

    items.forEach((item, index) => {
      const div = document.createElement("div");
      div.className = "item";
      div.style.animationDelay = `${index * 0.1}s`;

      div.innerHTML = `<span>${item.name}</span>
  <span>$${item.price}</span>

  <div class="actions">
    <button onclick="addToCart('${item.name}', ${item.price})">Add</button>
    <button onclick="removeFromCart('${item.name}')" class="remove">Remove</button>
  </div>`;

      content.appendChild(div);
    });

    menuItems.classList.add("active");
  }, 300);
}

// BACK
function backToCategories() {
  menuItems.classList.remove("active");

  setTimeout(() => {
    categories.classList.add("active");
  }, 300);
}

// ADD TO CART
function addToCart(name, price) {
  cart.push({ name, price });
  renderCart();
}

// RENDER CART
function renderCart() {
  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach((item) => {
    total += item.price;

    const div = document.createElement("div");
    div.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(div);
  });

  totalEl.textContent = total;
}

function removeFromCart(name) {
  const index = cart.findIndex((item) => item.name === name);

  if (index !== -1) {
    cart.splice(index, 1);
    renderCart();
  }
}

const orderBtn = document.getElementById("orderBtn");
const modal = document.getElementById("modal");

// OPEN MODAL
orderBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }

  modal.classList.add("show");

  // reset cart after order
  cart = [];
  renderCart();
});

// CLOSE MODAL (click outside)
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});

const okBtn = document.getElementById("okBtn");

// close modal with animation
okBtn.addEventListener("click", () => {
  modal.classList.add("hide");

  setTimeout(() => {
    modal.classList.remove("show");
    modal.classList.remove("hide");
  }, 300);
});
