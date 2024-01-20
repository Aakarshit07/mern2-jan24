const router = require("express").Router();
const {
  createNewBlog,
  getAllBlogs,
  deleteBlogById,
  updateById,
} = require("../controllers/blogs.controller");

router.get("/", getAllBlogs);
router.post("/new", createNewBlog);
// router.get("/:id", getBlogById);
router.delete("/:id", deleteBlogById);
router.patch("/:id", updateById);

module.exports = router;
