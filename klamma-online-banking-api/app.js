const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
const corsOptions = { origin: "http://localhost:3000" };
app.use(cors(corsOptions));

app.get("/sidebar", (req, res) => {});

app.get("/header", (req, res) => {});

app.get("/cards", (req, res) => {
  res.json([
    {
      currentAmount: 1242.4202,
      currency: "USD",
      cardNumber: "5495 7381 3759 2321",
      cardDate: new Date(2024, 3),
    },

    {
      currentAmount: 249.0,
      currency: "EUR",
      cardNumber: "4535 8933 1673 6770",
      cardDate: new Date(2025, 4),
    },

    {
      currentAmount: 249,
      currency: "EUR",
      cardNumber: "5363 7205 7398 4138",
      cardDate: new Date(2025, 0),
    },
  ]);
});

app.get("/limits", (req, res) => {
  res.json([
    {
      img: "credit-limit-chart",
      title: "Credit limit",
      value: 1500,
      limit: 2000,
    },

    {
      img: "online-limit-chart",
      title: "Online limit",
      value: 1324,
      limit: 1500,
    },
  ]);
});

app.get("/int-payments", (req, res) => {});

app.get("/recent-activities", (req, res) => {});

app.listen(3001, () => {
  console.log(`Servidor em execução na porta ${3001}`);
});
