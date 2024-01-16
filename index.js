require('dotenv').config();
const express = require("express");
const currencyRoutes = require("./routes/currrency.routes");
const userRoutes = require("./routes/users.routes");
const { verifyAuth } = require("./middlewares/verifyAuth");

const app = express();
const PORT = 7000;

app.use("/users", userRoutes);
app.use(verifyAuth);
app.use("/currencies", currencyRoutes);

app.get("*", (req, res) => {
  return res.send("LOL");
});

app.listen(PORT, () => {
  console.log("Listening...");
});
