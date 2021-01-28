const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

mongoose.connect(
  `mongodb+srv://renzuser:${process.env.DB_MONGO}@cluster0.yifph.mongodb.net/cluster0?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => (err ? console.log(err) : console.log("Connection Success!"))
);

app.get("/", (req, res) => {
  res.send("Current page location: Homepage");
});

app.listen(5000, console.log("Server Running in PORT: 5000"));
