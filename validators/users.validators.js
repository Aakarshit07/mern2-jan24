const Joi = require("joi");

const schema = Joi.object()
  .keys({
    age: Joi.number().integer().min(0).max(100),
    gender: Joi.string().valid("male", "female"),
  })
  .or("age", "gender");

const getQueryErrors = (incomingData) => {
  const result = schema.validate(incomingData);
  return result.error;
};

module.exports = { getQueryErrors };
