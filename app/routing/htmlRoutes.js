const path = require("path");

module.exports = function(app) {

// GET Requests
  app.get("/survey", (req, res) => {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

// Home if no results
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });

};