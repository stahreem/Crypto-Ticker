import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config({});

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// routes 
import apiRoutes from "./routes/apiRoutes.js";
app.use("/api/", apiRoutes);

// data base
import { connectDB } from "./db/connectDB.js";

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  try {
    console.log("====================================");
    connectDB();
    console.log(`Server is running on port ${PORT}`);
    console.log("====================================");
  } catch (error) {
    console.log(error);
  }
});
