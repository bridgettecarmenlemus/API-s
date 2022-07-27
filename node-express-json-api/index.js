const express = require("express");
const cors = require("cors");
const data = require("./restaurants.json");
const fs = require("fs");
const { json } = require("express");

const app = express();
app.use(cors());
app.use(express.json());
app.listen(4000, () => {
  console.log("our API running on 4000");
});

console.log(data);

//a method that takes a couple
app.get("/", (req, res) => {
  res.send("data");
});

// add new restaurant
app.post("/add-restaurant", (req, res) => {
  console.log(req.body);
});

//
app.post("/all-restaurants", (req, res) => {
  //const jsonrestaurants = JSON.parse(data); // convert JSON to JS object

  //   console.log("here my resaturant is in javascript", jsonrestaurants);
  data.push(req.body);

  const dataJson = JSON.stringify(data);

  fs.writeFile("restaurants.json", dataJson, (err) => console.log(err));
  // fs has many fuctions, we use writeFile SO THAT IT CAN hold up to 3 params
  res.send(data);
});

//get all items from JSON, a ist of restaurants
app.patch("/update-restaurant", (req, res) => {
  // find items to update req.query
  // then modify the info
  console.log(req.query);
  const { name } = req.query;
  console.log(name);
  //
  const itemFound = data.find((eachRestaurant) => {
    eachRestaurant.name === name;
  });
  console.log(itemFound);
});
