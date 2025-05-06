import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./db.js";
import expenseRoutes from "./Routes/expenses.js"
import authRoutes from "./Routes/auth.js"

dotenv.config()

console.log("MONGO_URI:", process.env.MONGO_URI);

const app = express()
const PORT = process.env.PORT || 5000;

connectDB()

app.use(cors({
    origin: "http://localhost:5173", // Update this to the correct frontend URL
    credentials: true // Allow credentials (cookies, authorization headers)
}))

app.use(express.json())
app.use(morgan('dev'))

app.use("/api/expenses", expenseRoutes)
app.use("/api/auth", authRoutes)

app.get("/api/test", (req, res) => {
    res.json({message: "API is working"});
  })

app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
  })