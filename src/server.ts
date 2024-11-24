import app from "./app";
import { Server } from "http";

export default (req, res) => {
  app(req, res);
};
const PORT = process.env.PORT;
const server: Server = app.listen(PORT, () => {
  console.log(`Server is working on port http://localhost:${PORT}`);
});
process.on("unhandledRejection", (err: any) => {
  console.error(`Error: ${err.message}`);
  console.error(
    "Shutting down the server due to Unhandled Promise Rejection again"
  );

  server.close(() => {
    process.exit(1);
  });
});
