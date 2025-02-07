import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import connectMongoDB from "./db/connectMongoDB.js";

const app = express();
dotenv.config();
app.use (express.json());
app.use (express.urlencoded({ extended: true }));
app.use (cookieParser());

const PORT = process.env.PORT || 5000;

app.use ("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log (`Server is running on port ${PORT}`);
    connectMongoDB();
});