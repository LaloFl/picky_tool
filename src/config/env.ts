import dotenv from "dotenv";
import path from "path";

dotenv.config();

export default {
  EXPRESS_PORT: process.env.EXPRESS_PORT || 3000,
  DB_URI: process.env.DB_URI || "mongodb://localhost:27017/myapp",
  STATIC_PATH: path.join(__dirname, "..", "..", "public"),

  // API keys
  PLACES_API_KEY: process.env.PLACES_API_KEY || "",
  GEMINI_API_KEY: process.env.GEMINI_API_KEY || "",
};
