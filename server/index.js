import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect.js";
import blogRouter from "./routes/blog.routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/blogs", blogRouter);

app.get("/", (req, res) => {
  res.send({ message: "Hello World!" });
});

const startServer = async () => {
  try {
    connectDB(process.env.DATABASE_URL);
    app.listen(8080, () => {
      console.log("Server started on port http://localhost:8080");
    });
  } catch (err) {
    console.log(err);
  }
};

startServer();
