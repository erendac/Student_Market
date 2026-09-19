// js/details.js
// Powers details.html. Depends on js/data.js being loaded first.

// 0. Require login before ordering. Guests can still view the item.
const loggedInEmail = localStorage.getItem("email");
const loggedInName = localStorage.getItem("username");

// 1. Read which service this page is for, from the URL: details.html?id=textbooks-1
const params = new URLSearchParams(window.location.search);
const serviceId = params.get("id");
const service = getServiceById(serviceId);
const contentArea = document.getElementById("content-area");

if (!service) {

  contentArea.innerHTML =
    '<p class="text-center text-muted">This item could not be found.</p>';

} else {

  contentArea.innerHTML = `
    <div class="row g-4">
      <div class="col-md-6">
        <div class="details-image-box">
          <img src="${service.image}" alt="${service.name}">
        </div>
      </div>
      <div class="col-md-6">
        <div class="details-card">
          <span class="details-category">${service.category}</span>
          <h1>${service.name}</h1>
          <p class="text-muted">Sold by: ${service.provider}</p>
          <p>${service.description}</p>
          <h4 class="mb-4">${service.price}€</h4>
          <button class="btn btn-main" id="orderBtn">
            Porosit
          </button>
        </div>
      </div>
    </div>
  `;

  document.getElementById("orderBtn").addEventListener("click", function () {

    if (!loggedInEmail) {
      // Not logged in - send them to log in first, then they can come back and order.
      window.location.href = "login.html";
      return;
    }

    document.getElementById("orderingAs").textContent = loggedInName + " (" + loggedInEmail + ")";

    const modal = new bootstrap.Modal(document.getElementById("orderModal"));
    modal.show();

  });

}

// 2. Handle the order form: validate, save to localStorage, confirm.
document.getElementById("orderForm").addEventListener("submit", function (e) {

  e.preventDefault();

  const dateEl = document.getElementById("orderDate");
  const messageEl = document.getElementById("orderMessage");

  let valid = true;

  function checkField(errorId, isValid) {
    document.getElementById(errorId).style.display = isValid ? "none" : "block";
    if (!isValid) valid = false;
  }

  checkField("err-date", dateEl.value.trim() !== "");
  checkField("err-message", messageEl.value.trim() !== "");

  if (!valid) return;

  const order = {
    id: generateOrderId(),
    serviceId: service.id,
    serviceName: service.name,
    provider: service.provider,
    price: service.price,
    buyerName: loggedInName,
    buyerEmail: loggedInEmail,
    date: dateEl.value,
    message: messageEl.value.trim(),
    status: "Në pritje"
  };

  const orders = getOrders();
  orders.push(order);
  saveOrders(orders);

  alert("Porosia u dërgua me sukses!");
  window.location.href = "my-orders.html";

});