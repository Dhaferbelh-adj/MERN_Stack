import express from "express";

import route from "./routers/userRouter.js";
import connectDB from "./config/db.js";
import cors from "cors"
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

connectDB()

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
app.use("/api",route)