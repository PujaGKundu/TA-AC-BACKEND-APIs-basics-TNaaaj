var express = require("express");
var router = express.Router();
var Country = require("../models/country");

/* GET home page. */
router.post("/", (req, res, next) => {
  Country.create(req.body, (err, createdCountry) => {
    if (err) return next(err);
    //res.redirect("/countrys");
    console.log(createdCountry);
    res.send("Country details is added to the database");
  });
});

router.get("/", (req, res, next) => {
  Country.find({}, (err, countries) => {
    if (err) return next(err);
    res.json(countries);
  });
});

module.exports = router;
