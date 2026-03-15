import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import adminRoutes from "./routes/adminRoutes.js";
import noticeRoutes from "./routes/noticeRoutes.js";
import galleryRoutes from "./routes/galleryRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import upcomingEventRoutes from "./routes/upcomingEventRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// DB CONNECT
connectDB();

// ADMIN ROUTE
app.use("/api/admin", adminRoutes);
app.use("/api/notices", noticeRoutes);
app.use("/uploads",express.static("uploads"));
app.use("/api/gallery",galleryRoutes);
app.use("/uploads",express.static("uploads"));
app.use("/uploads",express.static("uploads"));
app.use("/api/events",eventRoutes);
app.use("/uploads",express.static("uploads"));
app.use("/api/upcoming-events",upcomingEventRoutes);

app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});