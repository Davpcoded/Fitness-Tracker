const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 3000;

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Requiring our routes
require("./routes/API.js")(app);
require("./routes/HTML.js")(app);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/fitnessTracker",
  {
    useNewUrlParser: true,
  }
);

// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
