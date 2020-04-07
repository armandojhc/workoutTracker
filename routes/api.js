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

router.get("/workouts/all", (req, res) => {

    Workout.find({}, (err, docs) => {
        if (err) {
            res.send(err);
        } else {
            res.json(docs);
        }
    })

})

// post route - create new workout, then save it

router.post("/workouts", function(req, res) {

    let newWorkout = new Workout();

    newWorkout.save((err) => {

        console.log(err);
        res.json(newWorkout);

    });



})

//  put route - find existing workout by the _id property, add new exercise then save
router.put("/workouts/:id", function(req, res) {

    console.log(req.params.id, req.body);

    // Workout.find({"_id": req.params.id}, (err, docs) => {
    //     let workout = docs[0];
    //     console.log(`This workout with id: ${workout._id} has ${workout.exercises.length} exercises`);

    //     if (err) {
    //         console.log(err);
    //         res.json({});
    //     } else {
            
    //         workout.exercises.push(req.body);

    //         workout.save((err2) => {

    //             console.log(err2);
    //             res.json({});

    //         });
            
            
    //     }

    // })

    Workout.updateOne(
      { "_id": req.params.id },
      { $push: { "exercises" : req.body} },
      (err) => {
        if (err) {
            console.log(err)
        }
            res.json({});
        
      }
    )
      
  });

module.exports = router;