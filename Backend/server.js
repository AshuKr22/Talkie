import express from "express";
import dotenv from "dotenv";
import authRoutes from "./Routes/auth.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";
import messageRoutes from "./Routes/message.routes.js"
import cookieParser from "cookie-parser";
import userRoutes from "./Routes/user.routes.js"
const app = express();
dotenv.config();
const port = process.env.PORT||5000;

app.use(cookieParser());
app.use(express.json());// to parse the incoming requests with JSON payloads (from req.body)
//sequence matters with this one.
app.use("/api/auth", authRoutes);
app.use("/api/message",messageRoutes);
app.use("/api/users",userRoutes);
 

app.get("/",(req,res)=>
{
    res.send("Hello World")
})

app.listen(port,()=>
{
    connectToMongoDB();
    console.log(`App is listening on port ${port}`)
})