const express = require("express");

// Create Express server
const app = express();

// Port
const PORT = process.env.PORT || 8080;

// Interprets data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Initiates eserver
app.listen(PORT, () => {
  console.log("App listening on PORT: " + PORT);
});
