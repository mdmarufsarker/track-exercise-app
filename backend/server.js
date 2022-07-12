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
    log(chalk.success("Database Connected Successfully"))
  })
  .catch((err) => {
    log(chalk.bgGreen(" Database Connection Failed "));
  });

// middleware
app.use(express.json());
app.use((req, res, next) => {
  log(chalk.bgMagenta(` ${req.path} => ${req.method} `));
  next();
});

// routes
app.use("/api/workouts/", workoutRoutes);

app.listen(process.env.PORT, () => {
  log(chalk.bgCyan.black(" Listening on port " + process.env.PORT + " "));
});
