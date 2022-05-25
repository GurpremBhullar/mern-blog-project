import express from "express";
import { addBlogs, deleteBlog, getAllBlogs, getById, updateBlogs } from "../controllers/blog-controller";
const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);
blogRouter.post("/add" , addBlogs);
blogRouter.put("/update/:id", updateBlogs );
blogRouter.get("/:id", getById);
blogRouter.delete("/:id", deleteBlog);

export default blogRouter;