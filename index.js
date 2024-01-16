require("dotenv").config();
const express = require("express");
const currencyRoutes = require("./routes/currrency.routes");
const userRoutes = require("./routes/users.routes");
const mongoose = require("mongoose");
const { verifyAuth } = require("./middlewares/verifyAuth");

const app = express();
const PORT = 7000;
const DB_URI = "mongodb://localhost:27017/test";

mongoose
  .connect(DB_URI)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

app.use(verifyAuth);
app.use("/users", userRoutes);
app.use("/currencies", currencyRoutes);

app.get("*", (req, res) => {
  return res.send("LOL");
});

app.listen(PORT, () => {
  console.log("Listening...");
});

// Backend boot up -> DB connection established
// API Call -> global middleware -> specific middleware(if there is any) -> controller -> back to client
