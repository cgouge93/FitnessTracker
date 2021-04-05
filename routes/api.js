const db = require("../models")
module.exports = (app) => {

    //Get all workouts
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}, (err, workouts) => {
            if(err){
                console.log(err);
            } else {
                res.json(workouts)
            }
        });
    });


}