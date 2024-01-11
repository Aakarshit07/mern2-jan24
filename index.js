const express = require("express");
const { data } = require("./DB/currency.json");
const {
  getCurrencies,
  getCurrencyBySymbol,
} = require("./controllers/currency.controller");
const {
  getAllUsers,
  getUserById,
  searchUsersByQuery,
} = require("./controllers/users.controller");

const app = express();
const PORT = 7000;

app.get("/", (req, res) => {
  return res.send("<h1>Currency Database</h1>");
});

app.get("/currencies", getCurrencies);

app.get("/currencies/:symbol", getCurrencyBySymbol);

app.get("/users", getAllUsers);

app.get("/users/search", searchUsersByQuery);

app.get("/users/:uuid", getUserById);


app.get("*", (req, res) => {
  return res.send("LOL");
});

app.listen(PORT, () => {
  console.log("Listening...");
});
