import express from "express";
import { ConnectDB } from "./config/db.js";
import cors from "cors";
import userRouter from "./routes/userRouter.js";
const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());

ConnectDB();

app.get("/", (req, res) => {
  res.send("Hello world");
});
app.use("/api/user",userRouter);

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});
