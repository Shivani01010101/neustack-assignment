const API_BASE = "http://localhost:3000";

async function addToCart() {
  const body = {
    productId: document.getElementById("productId").value,
    name: document.getElementById("name").value,
    price: Number(document.getElementById("price").value),
    quantity: Number(document.getElementById("quantity").value),
  };

  const res = await fetch(`${API_BASE}/cart/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  alert("Item added to cart");
}

async function checkout() {
  const discountCode = document.getElementById("discountCode").value;

  const res = await fetch(`${API_BASE}/checkout`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ discountCode }),
  });

  const data = await res.json();
  document.getElementById("checkoutResult").textContent = JSON.stringify(
    data,
    null,
    2
  );
}

async function getStats() {
  const res = await fetch(`${API_BASE}/admin/stats`);
  const data = await res.json();

  document.getElementById("stats").textContent = JSON.stringify(data, null, 2);
}
