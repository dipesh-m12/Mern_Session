const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const { timeStamp } = require("console");
const port = 3000;
mongoose
  .connect(
    "mongodb+srv://Dipesh:TA0ZFje2ZaxspQVq@cluster0.yizbn0f.mongodb.net/Raja?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Db Connected");
  })
  .catch((e) => {
    console.error(e);
  });
const schema = mongoose.Schema(
  {
    user: { type: String },
    status: { type: Boolean },
    age: { type: Number },
  },
  {
    timestamps: true, // Corrected option spelling
  }
);
const userModel = mongoose.model("Rani", schema);
app.use(cors());
app.use(express.json());
app.get("/users", (req, res) => {
  res.send("Users!");
});
app.post("/users", async (req, res) => {
  let { user, status, age } = req.body;
  let snapShot = await userModel
    .find({ user: "Lala" })
    .sort({ createdAt: 1 })
    .limit(2)
    .skip(2);

  snapShot.map((ele) => {
    console.log(ele.createdAt);
  });
});
app.listen(port, () => {
  console.log("Connected!");
});
