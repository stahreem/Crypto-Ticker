import express from "express";
const router = express.Router();
import {
  fetchAndSaveData,
  getTickers,
} from "../controllers/tickersController.js";

router.get("/tickers", getTickers); // Get data for frontend
router.get("/fetch", fetchAndSaveData); // Manually fetch and save data

export default router;
