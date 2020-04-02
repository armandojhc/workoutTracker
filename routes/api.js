const express = require("express");
const router = express.Router();
let Workout = require("../models/workout");

router.get("/", (req, res) => {

    res.send("Welcome to the API Routes");
    
});

router.get("/workouts", (req, res) => {

    Workout.find((err, docs) => {

        if (err) {
            res.send("There was an error");
        } else {
            res.json(docs);
        }

    })

})

// post route - create new workout, then save it

//  put route - find existing workout by the _id property, add new exercise then save


module.exports = router;