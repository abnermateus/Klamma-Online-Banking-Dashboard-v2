const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
const corsOptions = { origin: "http://localhost:3000" };
app.use(cors(corsOptions));

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

app.listen(3001, () => {
  console.log(`Servidor em execução na porta ${3001}`);
});
