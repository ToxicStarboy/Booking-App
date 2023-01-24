import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import cookieParser from "cookie-parser";

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = process.env.PORT || 8800;

const app = express();
dotenv.config();

const connect = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB");
    }catch(error){
        throw error;
    }
};

mongoose.connection.on("disconnected",()=>{
    console.log("mongoDB disconnected!");
});

mongoose.connection.on("connected",()=>{
    console.log("mongoDB connected!");
});

//middlewares

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message: errorMessage,
        stack:err.stack,
    });
});

// Serve the index.html file if the env is production
if (process.env.NODE_ENV === "production") {
    app.use(express.static("./build"));
  
    app.get("*", (req, res) =>
      res.sendFile(path.resolve(__dirname, ".", "build", "index.html"))
    );
  }

app.listen(PORT,()=>{
    connect();
    console.log("Connected to Backend");
})