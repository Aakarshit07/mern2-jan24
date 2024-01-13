const { data } = require("../DB/currency.json");

const getTitle = (req, res) => {
  return res.send("<h1>Currency Database</h1>");
};

const getCurrencies = (req, res) => {
  const { min_value } = req.query;

  if (min_value) {
    const result = data.filter(
      (item) => Number(item.min_size) === Number(min_value)
    );
    res.json(result);
  } else {
    res.json(data);
  }
};

const getCurrencyBySymbol = (req, res) => {
  const { symbol } = req.params;
  const result = data.find(
    (elem) => elem.id.toLowerCase() === symbol.toLowerCase()
  );
  if (result) {
    res.json(result);
  } else {
    res.status(404).json("Invalid Symbol");
  }
};

module.exports = { getTitle, getCurrencies, getCurrencyBySymbol };
