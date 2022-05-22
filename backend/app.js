import express from "express";
import mongoose from "mongoose"

const app = express();

mongoose.connect(
    'mongodb+srv://gurprem:!8TrFW4K-Qhfdf5@cluster0.ikfqj.mongodb.net/BlogsApp?retryWrites=true&w=majority'
).then(()=>app.listen(4000))
.then(() => 
console.log("Connected to database and listening on port 4000")
)
.catch((err)=>console.log(err));


