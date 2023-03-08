import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, required: true },
  // photo: { type: String, required: true },
});

const Blog = mongoose.model("Blog", BlogSchema);

export default Blog;
