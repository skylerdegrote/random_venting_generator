/**
 * Created by Skyler DeGrote on 8/6/15.
 */
var express = require("express");
var router = express.Router();
var path = require("path");

var topicsData = require("../public/data/topics.json");
var adjectivesData = require("../public/data/adjectives.json");
var modAdjectivesData = require("../public/data/modadjectives.json");


router.get("/topics", function(request, response){
    response.json(topicsData);
});
router.get("/adjectives", function(request, response){
    response.json(adjectivesData);
});
router.get("/modadjectives", function(request, response){
    response.json(modAdjectivesData);
});

router.get("/*", function (request, response){
    var file = request.params[0] || "views/index.html";
    response.sendFile(path.join(__dirname, "../public", file));
});
module.exports = router;