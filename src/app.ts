import express, { Application } from "express";
import dotenv from "dotenv";
import cors from "cors";

if (process.env.DBENV !== "PRODUCTION") {
  dotenv.config({ path: "./src/Config/secrets.env" });
}

const result = dotenv.config({ path: "./src/Config/secrets.env" });
if (result.error) {
  console.error("Error loading .env file", result.error);
} else {
  console.log("Environment variables loaded successfully");
}

console.log("work");
const app: Application = express();

app.use(express.json());
app.use(cors());
app.use(
  cors({
    origin: "*",
  })
);

export default app;
