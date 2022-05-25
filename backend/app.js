import express from "express";
import mongoose from "mongoose"
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";

const app = express();
app.use(express.json());
app.use("/api/user" , router);
app.use("/api/blog" , blogRouter);


mongoose.
connect(
    'mongodb+srv://gurprem:!8TrFW4K-Qhfdf5@cluster0.ikfqj.mongodb.net/BlogsApp?retryWrites=true&w=majority'
)
.then(() => app.listen(4000))
.then(() => 
console.log("Connected to database and listening on port 4000")
)
.catch((err)=>console.log(err));


