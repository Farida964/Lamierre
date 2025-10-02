// index.js
import express from "express";
import cors from "cors";
import db from "./config/Database.js";
import ReviewRoute from "./routes/ReviewRoute.js";

const app = express();

app.use(cors({
  origin: ["http://localhost:5173", "https://your-frontend-domain.com"],
  methods: ["GET", "POST", "DELETE"]
}));
app.use(express.json());
app.use("/api", ReviewRoute);

try {
  await db.authenticate();
  console.log("Database connected...");
  await db.sync(); // jangan alter:true di production
} catch (error) {
  console.error("Database connection error:", error);
}

app.listen(5000, "0.0.0.0", () =>
  console.log("Server running on http://localhost:5000")
);
