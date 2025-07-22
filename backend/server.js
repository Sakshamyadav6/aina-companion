const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const authRoute = require("./routes/authRoutes");
const cors = require("cors");
const chatRoute = require("./routes/chatRoutes");
const tssRoute = require("./routes/tssRoutes");

dotenv.config();

const app = express();
const port = process.env.port || 3000;

connectDB();

app.use(express.json());

app.use(cors());

app.use("/api/auth", authRoute);
app.use("/api/chat", chatRoute);
app.use("/api/tts", tssRoute);

//default route
app.get("/", (req, res) => {
  res.send("API Running....");
});

app.listen(port, () => {
  console.log(`Server Running at port ${port}`);
});
