const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const authRoute = require("./routes/authRoutes");

const app = express();
const port = 3000;

dotenv.config();

connectDB();

app.use(express.json());

app.use("/api/auth", authRoute);

//default route
app.get("/", (req, res) => {
  res.send("API Running....");
});

app.listen(port, () => {
  console.log(`Server Running at port ${port}`);
});
