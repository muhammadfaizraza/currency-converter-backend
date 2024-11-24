import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import currencyRoutes from "./Routes/currencyRoutes";

const result = dotenv.config({ path: "./src/Config/secrets.env" });
if (result.error) {
  console.error("Error loading .env file", result.error);
} else {
  console.log("Environment variables loaded successfully");
}

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Vercel with TypeScript!");
});
app.use(express.json());
app.use(cors());
app.use(
  cors({
    origin: "*",
  })
);
app.use("/api", currencyRoutes);

export default app;
