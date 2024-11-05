import axios from "axios";
import { connectDB } from "../db/connectDB.js";


// fetch and save data 
export const fetchAndSaveData = async (req, res) => {
  try {
    const response = await axios.get("https://api.wazirx.com/api/v2/tickers");
    const data = Object.values(response.data).slice(0, 10);

    // Await the database instance from connectDB
    const db = await connectDB();
    const tickersCollection = db.collection("tickers");

    await tickersCollection.deleteMany({});
    await tickersCollection.insertMany(
      data.map((item) => ({
        name: item.name,
        last: item.last,
        buy: item.buy,
        sell: item.sell,
        volume: item.volume,
        base_unit: item.base_unit,
      }))
    );

    res.json({ message: "Data fetched and saved" });
  } catch (error) {
    res.status(500).json({ error: "Error fetching data" });
    console.log("error in fetchAndSaveData", error);
  }
};

// get all the saved tickers
export const getTickers = async (req, res) => {
  try {
    const db = await connectDB();
    const tickersCollection = db.collection("tickers");
    const tickers = await tickersCollection.find().toArray();
    res.json(tickers);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve data" });
    console.log("error in getTickers", error);
  }
};
