const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const chalk = require("chalk");
const log = console.log;
const workoutRoutes = require("./routes/workouts");

// Database Setup
// opne terminal and run this command: systemctl start mongodb
mongoose
  .connect(process.env.MONGO_COMPASS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connected Successfully");
  })
  .catch((err) => {
    console.log("Database Connection Failed");
    console.log(err.message);
  });

// middleware
app.use(express.json());
app.use((req, res, next) => {
  log(chalk.bgYellow(req.path, req.method));
  next();
});

// routes
app.use("/api/workouts/", workoutRoutes);

app.listen(process.env.PORT, () => {
  log(chalk.bgCyan.black("Listening on port " + process.env.PORT));
});
