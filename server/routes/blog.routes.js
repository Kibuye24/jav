import express from "express";
import {
  getAllBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
  getSingleBlog,
} from "../controllers/blog.controller.js";

const router = express.Router();

router.route("/").get(getAllBlogs);
router.route("/").post(createBlog);
router.route("/:id").get(getSingleBlog);
router.route("/:id").patch(updateBlog);
router.route("/:id").delete(deleteBlog);

export default router;
