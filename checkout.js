// PRODUCT INFO
const product_info_img = document.querySelector(".product_info img");
const product_info_name = document.querySelector(".product_info h2");
const price = document.querySelector(".price");
const describtion = document.querySelector(".describtion");

const clickedItem = JSON.parse(localStorage.getItem("selectedItem"));

if (clickedItem) {
  product_info_img.src = clickedItem.cakeImg;
  product_info_name.textContent = clickedItem.cakeName;
  price.textContent = `Price: ₦${clickedItem.cakePrice}`;
  describtion.textContent = clickedItem.cakeDescribtion;
}

// DELIVERY TOGGLE
const pickupRadio = document.getElementById("pickup");
const deliveryRadio = document.getElementById("delivery");
const deliveryFields = document.getElementById("delivery-fields");
const pickupAddress = document.getElementById("pickup-address");
const deliveryDate = document.getElementById("delivery-date");
const deliveryAddress = document.getElementById("delivery-address");

function toggleDelivery() {
  if (deliveryRadio.checked) {
    deliveryFields.style.display = "block";
    pickupAddress.style.display = "none";
    deliveryDate.disabled = false;
    deliveryAddress.disabled = false;
  } else {
    deliveryFields.style.display = "none";
    pickupAddress.style.display = "block";
    deliveryDate.disabled = true;
    deliveryAddress.disabled = true;
  }
}

pickupRadio.addEventListener("change", toggleDelivery);
deliveryRadio.addEventListener("change", toggleDelivery);
toggleDelivery();

// WHATSAPP SUBMISSION
document.querySelector(".order-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("full-name").value;
  const phone = document.getElementById("phone-number").value;
  const email = document.getElementById("email").value;
  const quantity = document.getElementById("quantity").value;
  const message = document.getElementById("message").value;
  const occasion = document.getElementById("occasion").value;
  const payment = document.getElementById("payment-method").value;

  const cakeName = product_info_name.textContent;
  const deliveryMethod = deliveryRadio.checked ? "Delivery" : "Pickup";
  const date = deliveryDate.value || "N/A";
  const address = deliveryAddress.value || "Campus 2 small gate";

  const text = `
🧁 *New Cake Order*

🍰 Cake: ${cakeName}
👤 Name: ${name}
📞 Phone: ${phone}
📧 Email: ${email || "N/A"}

🎂 Quantity: ${quantity}
✍ Message on Cake: ${message}
🎉 Occasion: ${occasion}

🚚 Method: ${deliveryMethod}
📅 Date: ${date}
📍 Address: ${address}

💳 Payment: ${payment}
  `;

  const whatsappNumber = "2348103827278";
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

  window.open(whatsappURL, "_blank");
});