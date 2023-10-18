const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
const corsOptions = { origin: "http://localhost:3000" };
app.use(cors(corsOptions));

app.get("/cards", (req, res) => {
  res.json({
    data: [
      {
        currentAmount: "1242.42",
        currency: "USD",
        cardNumber: "5495 7381 3759 2321",
        cardDate: "04 / 24",
      },

      {
        currentAmount: "249.00 ",
        currency: "EUR",
        cardNumber: "4535 8933 1673 6770",
        cardDate: "05 / 25",
      },

      {
        currentAmount: "249.00 ",
        currency: "EUR",
        cardNumber: "5363 7205 7398 4138",
        cardDate: "01 / 25",
      },
    ],
  });
});

app.listen(3001, () => {
  console.log(`Servidor em execução na porta ${3001}`);
});
