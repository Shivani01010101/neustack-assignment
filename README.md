📦 Neustack Assignment – E-commerce Backend API

This project is a simple e-commerce backend API built using Node.js and Express.js, as part of the Neustack assignment.

The application uses an in-memory data store (no database) and supports cart management, checkout with discount logic, and admin statistics.

🚀 Tech Stack

Node.js (v22+)

Express.js

ES6 Modules

UUID (for discount codes)

📂 Project Structure
src/
├── app.js
├── routes/
│ ├── cart.routes.js
│ ├── checkout.routes.js
│ └── admin.routes.js
├── services/
│ ├── cart.service.js
│ ├── checkout.service.js
│ ├── discount.service.js
│ └── admin.service.js
├── data/
│ └── store.js
├── utils/
│ └── constants.js

🛒 API Endpoints
➕ Add Item to Cart

POST /cart/add

{
"productId": "p1",
"name": "Shoes",
"price": 1000,
"quantity": 1
}

💳 Checkout

POST /checkout

Optional discount code:

{
"discountCode": "DISC-XXXXXX"
}

Checkout Features

Calculates total order amount

Applies discount code (single-use)

Generates a discount code after every nᵗʰ order

Clears cart after successful checkout

📊 Admin Statistics

GET /admin/stats

Returns:

Total items purchased

Total purchase amount

Total discount amount given

List of discount codes

🎁 Discount Rules

Discount percentage: 10%

Discount applies to the entire order

Discount codes are single-use

A new discount code is generated after every 3rd order

▶️ How to Run the Project
npm install
npm run dev

Server runs at:

http://localhost:3000

🧪 Testing

APIs were tested using Postman with raw JSON request bodies.

📝 Notes

No database is used; all data is stored in memory.

This is an API-first backend (no UI).

Designed with clean separation of routes and services.

✅ Assignment Status

✔ All required features implemented
✔ Clean and modular code structure
✔ ES6 standards followed

## 🌐 Optional Frontend UI

A basic HTML/CSS/JavaScript UI is included in the `frontend/` folder to demonstrate API usage.

To use:

1. Start backend server
2. Open `frontend/index.html` in a browser

This UI is optional and provided for demonstration purposes only.
