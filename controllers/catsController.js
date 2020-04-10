const express = require("express");
const cat = require("../models/cat");

// const connection = require("../config/connection");
const orm = require("../config/orm");

const router = express.Router();

router.get("/", function (req, res) {
  cat.getAllCats(function (err, data) {
    if (err) {
      console.log(err);
      return res.status(500).send("An error occurred");
    }
    res.render("index", { cats: data });
  });
});

router.delete("/api/cats/:id", function (req, res) {
  console.log(req.params.id);
  cat.deleteCatById(req.params.id, function (err, data) {
    if (err) {
      res.status(500);
      return res.json({
        success: false,
      });
    }
    res.json({
      success: true,
    });
  });
});

module.exports = router;
