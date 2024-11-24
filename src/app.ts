import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import currencyRoutes from "./Routes/currencyRoutes";
if (process.env.DBENV !== "PRODUCTION") {
  dotenv.config({ path: "./src/Config/secrets.env" });
}

const result = dotenv.config({ path: "./src/Config/secrets.env" });
if (result.error) {
  console.error("Error loading .env file", result.error);
} else {
  console.log("Environment variables loaded successfully");
}

const app: Application = express();

app.use(express.json());
app.use(cors());
app.use(
  cors({
    origin: "*",
  })
);
app.use("/api", currencyRoutes);
app.use("/", (req: Request, res: Response) => {
  res.send("working on vercel");
});
export default app;
