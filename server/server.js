const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// create db connection
mongoose
  .connect(
    "mongodb+srv://guptanishant08042004:fjPKQK6Cuak7YkYu@cluster0.6gliq.mongodb.net/"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization", "Cache-Control", "Expires", "Pragma"],
        credentials: true,
    })
);

app.use(cookieParser());
app.use(express.json());

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));