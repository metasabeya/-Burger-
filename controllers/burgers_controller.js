var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");
router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
    });

});

router.post("/", function(req, res) {
    burger.create([
        "burger_name", "devpoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function() {
        res.redirect("/");
    });
});