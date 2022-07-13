const Workout = require("../models/workoutModel");

// get all the workouts
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });

  res.status(200).json(workouts);
};

// get a single workout
const getWorkout = async (req, res) => {
  const { id } = req.params;

  try {
    const workout = await Workout.findById(id);
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// create a new workout
const createWorkout = async (req, res) => {
  const { title, description, reps, load } = req.body;

  // add doc to db
  try {
    const workout = await Workout.create({ title, description, reps, load });
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// delete a single workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  try {
    const workout = await Workout.findByIdAndDelete(id);
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// update a single workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;
  const { title, description, reps, load } = req.body;

  try {
    const workout = await Workout.findByIdAndUpdate(id, {
      title,
      description,
      reps,
      load,
    });
    // findByIdAndUpdate(id, {...req.body});
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
};
