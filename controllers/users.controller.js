const { data } = require("../DB/users.json");
const { getQueryErrors } = require("../validators/users.validators");

const getAllUsers = (req, res) => {
  res.json(data);
};

const getUserById = (req, res) => {
  console.log("Hey, sorry I got triggered accidenctly");
  const { uuid } = req.params;

  const result = data.find((item) => item.login.uuid === uuid);

  if (result) {
    res.json(result);
  } else {
    res.sendStatus(404);
  }
};

const searchUsersByQuery = (req, res) => {
  const { gender, age } = req.query;

  const error = getQueryErrors({ age, gender });
  if (error) {
    return res.status(422).json(error);
  }

  // if (!age && !gender) {
  //   return res.status(422).json({ message: "Missing search params" });
  // }
  // if (age) {
  //   if (!Number(age)) {
  //     return res
  //       .status(422)
  //       .json({ message: "Age parameter should be a number" });
  //   }

  //   if (age >= 100 || age < 0) {
  //     return res.status(422).json({
  //       message: "Age out of bounds. It should be a number between 0 and 100",
  //     });
  //   }
  // }

  // if (gender) {
  //   if (!["female", "male"].includes(gender)) {
  //     return res
  //       .status(422)
  //       .json({
  //         message: "Gender to search can either be 'male' or 'female'",
  //       });
  //   }
  // }

  if (gender && age) {
    const results = data.filter(
      (item) => item.gender === gender && Number(item.dob.age) >= Number(age)
    );
    res.json(results);
  } else if (gender) {
    const results = data.filter((item) => item.gender === gender);

    res.json(results);
  } else if (age) {
    const results = data.filter((item) => Number(item.dob.age) >= Number(age));

    res.json(results);
  } else {
    res.sendStatus(404);
  }
};

module.exports = { getAllUsers, getUserById, searchUsersByQuery };
