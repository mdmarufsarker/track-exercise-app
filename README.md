# track-exercise-app

Track Exercise App

## Steps

- Create a project directory
- Create a backend directory
- Create a file called server.js
- Initialize npm with `npm init`
- Install some dependencies `dotenv`, `express`, `mongoose`.
- Install some devDependencies `chalk`, `nodemon`.
- Create some directories - controllers, models, routes
- Create some files - .env, .gitignore
- In the .env file write the port and mongo_uri
- In the .gitignore file write
  - .env
  - node_modules
  - package-lock.json
- In the server.js file write those codes

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
- In the routes directory create a file for your project and write the snippet

        const express = require("express");
        const router = express.Router();
        const { } = require("../controllers/");

        // get all workouts
        router.get("/", getWorkouts);

        // get a single workout
        router.get("/:id", getWorkout);

        // post a new workout
        router.post("/", createWorkout);

        // delete a workout
        router.delete("/:id", deleteWorkout);

        // update a workout
        router.patch("/:id", updateWorkout);

        module.exports = router;
- In the models directory create a file for your project and write the snippet

        const mongoose = require("mongoose");
        const Schema = mongoose.Schema;

        const workoutSchema = new Schema({
            title: {
                type: String,
                required: true,
                minlength: 5,
                maxlength: 255,
            },
            description: {
                type: String,
                required: true,
                minlength: 5,
                maxlength: 255,
            }
        }, {timestamps: true});

        module.exports = mongoose.model('Workout', workoutSchema);

- In the controllers directory create a file for your project and write the snippet

        const Workout = require('../models/workoutModel');

        // get all the workouts
        const getWorkouts = async (req, res) => {}

        // get a single workout
        const getWorkout = async (req, res) => {}

        // create a new workout
        const createWorkout = async (req, res) => {}

        // delete a single workout
        const deleteWorkout = async (req, res) => {}

        // update a single workout
        const updateWorkout = async (req, res) => {}

        module.exports = {
            getWorkouts,
            getWorkout,
            createWorkout,
            deleteWorkout,
            updateWorkout
        }
