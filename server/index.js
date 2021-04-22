/*********** ALL LEVELS *************/
const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;
const ORIGIN = "http://localhost:3000";
app.listen(PORT, () => console.log(`Your app is running on port ${PORT}.`));

/************* LEVEL 100 ***************/
// route "/"
app.get("/", (req, res) => {
  res.header({ "Access-Control-Allow-Origin": ORIGIN });
  res.json({
    "/colleges": "retruns an array of colleges in a specific area",
    "/hospitals": "retruns an array of hospitals in a specific area",
    "/doctors": "retruns an array of doctores in a specific area",
    "/pharmcies": "retruns an array of pharmacies in a specific area",
  });
});

/************* LEVELS 200 THROUGH 500 ***************/
// IMPORT EVERY CITY/BURROUGH'S DATA 
const HARROW = require("../data/Harrow.json");
const HEATHROW = require("../data/Heathrow.json");
const STRATFORD = require("../data/Stratford.json");

app.get("/:city/:department", (req, res) => {
  const city = req.params.city.toLowerCase(); // city = case-insensitive name of a burrough in London
  const department = req.params.department.toLowerCase(); // department = case-insensitive name of a department
  let cityData = [];
  res.header({"Access-Control-Allow-Origin":ORIGIN});
  switch (city) {
    case "harrow":
      cityData = HARROW;
      break;
    case "heathrow":
      cityData = HEATHROW;
      break;
    case "stratford":
      cityData = STRATFORD;
      break;
    default:
      cityData = [];
  }
  // now filter city JSON data by department name and send it to the client
  res.json(cityData[department]);
});

