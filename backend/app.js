require("dotenv").config({ path: "./.env" });
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Routes
const userRoutes = require("./routes/user.routes");
app.use("/api/v1/user", userRoutes);

const candidateRoutes = require("./routes/candidate.routes");
app.use("/api/v1/candidate", candidateRoutes);

module.exports = app;
