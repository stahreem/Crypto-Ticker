import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config({});

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
