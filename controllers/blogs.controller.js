const BlogsModel = require("../models/blog.model");

const createNewBlog = async (req, res) => {
  try {
    const newBlogDoc = new BlogsModel(req.body);
    const data = await newBlogDoc.save();

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getAllBlogs = async (req, res) => {
  try {
    // const { id } = req.query;
    // if (id) {
    //   const blogs = await BlogsModel.find({ _id: id });
    //   return res.json(blogs);
    // }
    const blogs = await BlogsModel.find({});
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Couldn't fetch blogs" });
  }
};

const deleteBlogById = async (req, res) => {
  try {
    const documentId = req.params.id;
    const result = await BlogsModel.findOneAndDelete({ _id: documentId });

    res.json(result);
  } catch (error) {
    res.json(error);
  }
};

const updateById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await BlogsModel.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });

    res.json(result);
  } catch (error) {
    res.json(error);
  }
};

module.exports = { createNewBlog, getAllBlogs, deleteBlogById, updateById };
