const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// MongoDB connection
mongoose.connect(
  "mongodb+srv://raghudarvemula:royalmovies@cluster0.lw1jbbv.mongodb.net/e-commerce"
);

// schema for each food item

const Food = mongoose.model("Food", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  calorie: {
    type: Number,
    required: true,
  },
  protien: {
    type: Number,
    required: true,
  },
  vitandmin: {
    type: String,
  },
  fat: {
    type: Number,
  },
});

app.post("/additem", async (req, res) => {
  console.log("/additem");
  let products = await Food.find({});
  let id;
  if (products.length > 0) {
    let last_array = products.slice(-1);
    let last_product = last_array[0];
    id = last_product.id + 1;
  } else {
    id = 1;
  }

  const fooditem = new Food({
    id: id,
    name: req.body.name,
    calorie: req.body.calorie,
    protien: req.body.protien,
    vitandmin: req.body.vitandmin,
    fat: req.body.fat,
  });
  console.log(fooditem);
  await fooditem.save();
  console.log("saved");
  res.send({
    success: true,
    name: req.body.name,
  });
});

app.get("/", (req, res) => {
  res.send("hi");
});

app.listen(port, () => {
  console.log("serber started 4000");
});
