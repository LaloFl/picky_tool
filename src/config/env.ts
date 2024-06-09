import dotenv from "dotenv";
import path from "path";

dotenv.config();

export default {
  port: process.env.EXPRESS_PORT || 3000,
  dbUri: process.env.DB_URI || "mongodb://localhost:27017/myapp",
  staticPath: path.join(__dirname, "..", "..", "public"),
};
