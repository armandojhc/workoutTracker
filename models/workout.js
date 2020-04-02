const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    required: true,
    default: Date.now
  },
  exercises: [{
      type: { type: String, default: "" },
      name: { type: String, default: "" },
      duration: { type: Number, default: 0 },
      weight: { type: Number, default: 0 },
      distance: { type: Number, default: 0 },
      sets: { type: Number, default: 0 }
  }]
});

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;