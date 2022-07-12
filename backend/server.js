const express = require('express');
const app = express();
require('dotenv').config();
const chalk = require('chalk'); 
const log = console.log;
const workoutRoutes = require('./routes/workouts');

// middleware
app.use(express.json());
app.use((req, res, next) => {
    log(chalk.bgYellow(req.path, req.method));
    next();
})

// routes
app.use('/api/workouts/', workoutRoutes);

app.listen(process.env.PORT, () => {
    log(chalk.bgCyan.black('Listening on port ' + process.env.PORT));
})