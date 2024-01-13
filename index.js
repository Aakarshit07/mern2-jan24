const express = require("express");
const {
  getAllUsers,
  getUserById,
  searchUsersByQuery,
} = require("./controllers/users.controller");
const currencyRoutes = require("./routes/currrency.routes");

const app = express();
const PORT = 7000;

app.get("/users", getAllUsers);
app.get("/users/search", searchUsersByQuery);
app.get("/users/:uuid", getUserById);

app.use("/currencies", currencyRoutes);

app.get("*", (req, res) => {
  return res.send("LOL");
});

app.listen(PORT, () => {
  console.log("Listening...");
});
