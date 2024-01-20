const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    authors: { type: [String] },
    content: { type: String, default: "Default Content" },
    publishedAt: { type: Date, default: null },
  },
  { timestamps: true }
);

// We will be creating a model(serve as link between collection and schema)
const blogModel = mongoose.model("Blogs", blogSchema, "website"); //blogs

module.exports = blogModel;
// Established MongoDB Connection -> Done
// Defined schema for blog collection -> Done
// To link blogSchema with blogs collection - Done
// To perform CRUD operation on our collection using model from controller - TODO
