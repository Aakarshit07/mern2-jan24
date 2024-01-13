const router = require("express").Router();
const {
  getTitle,
  getCurrencies,
  getCurrencyBySymbol,
} = require("../controllers/currency.controller");

router.get("/title", getTitle);
router.get("/", getCurrencies);
router.get("/:symbol", getCurrencyBySymbol);

module.exports = router;
