import { request } from "express";
import Blog from "../mongodb/models/blog.js";

//Getting all blogs
const getAllBlogs = async (req, res) => {
  const query = {};

  try {
    const count = await Blog.countDocuments(query);
    const blogs = await Blog.find(query);

    res.header("X-total-count", count);
    res.header("Access-Control-Expose-Headers", "X-Total-Count");

    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const createBlog = async (req, res) => {};
const getSingleBlog = async (req, res) => {
  try {
    const { _id } = req.params;

    const singleBlog = await Blog.findOne(_id);

    res.status(200).json(singleBlog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const updateBlog = async (req, res) => {};
const deleteBlog = async (req, res) => {};

export { getAllBlogs, createBlog, updateBlog, deleteBlog, getSingleBlog };
