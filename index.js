const express = require("express");
const app = express();
const PORT = 3000;

// Dữ liệu mẫu
const products = [
  { id: 1, title: "Product A", stock: 100, price: 50 },
  { id: 2, title: "Product B", stock: 200, price: 30 },
  { id: 3, title: "Product C", stock: 50, price: 70 },
];

// Route /product
app.get("/product", (req, res) => {
  res.json({
    status: "success",
    data: products,
  });
});

// Server listen
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
