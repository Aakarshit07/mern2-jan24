const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  searchUsersByQuery,
} = require("../controllers/users.controller");
const {
  validateSearchQuery,
} = require("../middlewares/validators/users.validator");

const printMyName = (req, res, next) => {
  console.log('Hi Alok');
  req.crioBatchName = 'Mern-2';

  next();
}


router.get("/", getAllUsers);
router.get("/search", validateSearchQuery, printMyName, searchUsersByQuery);
router.get("/:uuid", getUserById);

module.exports = router;
