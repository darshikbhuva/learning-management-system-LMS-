import express from "express";
import dotenv from "dotenv";
dotenv.config({});
import connectDB from "./database/connectDB.js";
import authRouter from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

connectDB();
const app = express();

//default middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

const PORT = process.env.PORT || 3000;

app.use("/api/v1/user", authRouter);

app.listen(PORT, () => {
  console.log(`Server listen at port ${PORT}`);
});
