import cloudinary from "cloudinary";
import Blog from "../mongodb/models/blog.js";
import * as dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//Getting all blogs
const getAllBlogs = async (req, res) => {
  const query = {};

  const { page = 1, limit = 4 } = req.query;

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const data = {};

  try {
    const count = await Blog.countDocuments(query);
    data.results = await Blog.find(query).skip(startIndex).limit(limit);

    data.page = parseInt(page);

    data.totalPages = Math.ceil(count / limit);

    res.header("X-total-count", count);
    res.header("Access-Control-Expose-Headers", "X-Total-Count");

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createBlog = async (req, res) => {
  try {
    const { title, content, description, author } = req.body;

    // const photoUrl = await cloudinary.uploader.upload(photo);

    const newPost = await Blog.create({
      title,
      content,
      description,
      author,
      // photo: photoUrl.url,
    });

    res
      .status(201)
      .json({ message: " Post created successfully", post: newPost });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};
const getSingleBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const singleBlog = await Blog.findOne({ _id: id });

    res.status(200).json(singleBlog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const updateBlog = async (req, res) => {};
const deleteBlog = async (req, res) => {};

const recentBlogs = async (req, res) => {
  try {
    const recent = await Blog.find().sort({ createdAt: -1 }).limit(3);
    res.status(200).json(recent);
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
};

export {
  getAllBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
  getSingleBlog,
  recentBlogs,
};
