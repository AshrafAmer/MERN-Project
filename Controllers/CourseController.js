const express = require("express");
const courseRoutings = express.Router();
const mongoose = require("mongoose");
const path = require("path");
require("./../Models/CoursesModel");
let course = mongoose.model("courses");

// ====== # CRUD Operations # ======
courseRoutings.get("/add", (request, response) => {
    response.render("courses/courses_add");
});

courseRoutings.post("/add", (request, response) => {
    let newcourse = new course(request.body);
    newcourse
        .save()
        .then(data => {
            response.redirect("/courses/list");
        })
        .catch(err => {
            response.send(err + "");
        });
}); //create course data [C]

courseRoutings.get("/course/:_id", (request, response) => {
    course
        .findOne({ _id: request.params._id })
        .then(data => {
            response.send(data);
        })
        .catch(err => {
            response.send(err + "");
        });
}); //read course data [R]

courseRoutings.get("/list", (request, response) => {
    course
        .find({})
        .then(data => {
            console.log(data);
            response.render("courses/courses_list", { courses: data });
        })
        .catch(err => {
            response.send(err + "");
        });
}); //read courses data [R=>List]

courseRoutings.post("/update", (request, response) => {
    let updatecourse = new course(request.body);
    course
        .update({ _id: updatecourse._id }, { $set: updatecourse })
        .then(data => {
            response.redirect("/courses/list");
        })
        .catch(err => {
            response.send(err + "");
        });
}); //update course data [U]

courseRoutings.get("/delete/:_id", (request, response) => {
    course
        .remove({ _id: request.params._id })
        .then(data => {
            response.redirect("/courses/list");
        })
        .catch(err => {
            response.send(err + "");
        });
}); //delete course data [D]

module.exports = courseRoutings;
