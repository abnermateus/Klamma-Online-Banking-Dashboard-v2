const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
const corsOptions = { origin: "http://localhost:3000" };
app.use(cors(corsOptions));

app.get("/cards", (req, res) => {
  res.json([
    {
      currentAmount: 1242.42,
      currency: "USD",
      number: "5495 7381 3759 2321",
      date: new Date(2024, 3),
    },

    {
      currentAmount: 249.0,
      currency: "EUR",
      number: "4535 8933 1673 6770",
      date: new Date(2025, 4),
    },

    {
      currentAmount: 249,
      currency: "EUR",
      number: "5363 7205 7398 4138",
      date: new Date(2025, 0),
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

app.get("/int-payments", (req, res) => {
  res.json([
    {
      status: "Awaiting",
      counter: 8,
    },

    {
      status: "In progress",
      counter: 5,
    },

    {
      status: "Completed",
      counter: 12,
    },

    {
      status: "Cancelled",
      counter: 4,
    },
  ]);
});

app.get("/recent-activities", (req, res) => {
  const TransactionType = {
    Sent: "Sent",
    Conversion: "Conversion",
    CafeAndRestaurants: "Cafe & Restaurants",
    Opened: "Opened",
  };

  res.json([
    {
      date: new Date(2023, 9, 26),
      title: "To Martin Mitchel",
      type: TransactionType.Sent,
      value: -3004.52,
      currency: "USD",
    },
    {
      date: new Date(2023, 9, 26),
      title: "To Jane Klamberberg",
      type: TransactionType.Sent,
      value: -1023.19,
      currency: "USD",
    },
    {
      date: new Date(2023, 9, 26),
      title: "EUR to USD",
      type: TransactionType.Conversion,
      value: +1456.0,
      currency: "USD",
    },
    {
      date: new Date(2023, 9, 25),
      title: "Starbucks",
      type: TransactionType.CafeAndRestaurants,
      value: -5.99,
      currency: "USD",
    },
    {
      date: new Date(2023, 9, 25),
      title: "Deposit to your USD balance",
      type: TransactionType.Opened,
      value: -4000.0,
      currency: "USD",
    },
  ]);
});

app.listen(3001, () => {
  console.log(`Servidor em execução na porta ${3001}`);
});
