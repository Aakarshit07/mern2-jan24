const { data } = require("../DB/users.json");

const getAllUsers = (req, res) => {
  res.json(data);
};

const getUserById = (req, res) => {
    console.log('Hey, sorry I got triggered accidenctly')
  const { uuid } = req.params;

  const result = data.find((item) => item.login.uuid === uuid);

  if (result) {
    res.json(result);
  } else {
    res.sendStatus(404);
  }
};

const searchUsersByQuery = (req, res) => {
    console.log('Fn called')
  const { gender, age } = req.query;

  if (gender && age) {
    const results = data.filter(
      (item) => item.gender === gender && Number(item.dob.age) >= Number(age)
    );
    res.json(results);
  } else if (gender) {
    console.log('Executed')
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
