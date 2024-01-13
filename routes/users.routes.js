const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  searchUsersByQuery,
} = require("../controllers/users.controller");

router.get("/", getAllUsers);
router.get("/search", searchUsersByQuery);
router.get("/:uuid", getUserById);

module.exports = router;
