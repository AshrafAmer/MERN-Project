const express = require("express");
const instructorRoutings = express.Router();
const mongoose = require("mongoose");
const path = require("path");
require("./../Models/InstructorsModel");
require("./../Models/DepartmentsModel");
let instructor = mongoose.model("instructors");
let departments = mongoose.model("departments");
// ====== # CRUD Operations # ======
instructorRoutings.get("/add", (request, response) => {
    departments
        .find({})
        .then(res => {
            response.render("instructors/instructors_add", {
                departments: res
            });
        })
        .catch(err => {
            response.send(err + "");
        });
});

instructorRoutings.get("/list", (request, response) => {
    departments
        .find({})
        .then(data => {
            instructor
                .find({})
                .populate({ path: "department" })
                .then(res => {
                    response.render("instructors/instructors_list", {
                        instructors: res,
                        departments: data
                    });
                })
                .catch(err => {
                    response.send(err + "");
                });
        })
        .catch(err => {
            response.send(err + "");
        });
});
instructorRoutings.post("/add", (request, response) => {
    let newinstructor = new instructor(request.body);
    newinstructor
        .save()
        .then(data => {
            response.redirect("/instructors/list");
        })
        .catch(err => {
            response.send(err + "");
        });
}); //create instructor data [C]

instructorRoutings.get("/instructor/:_id", (request, response) => {
    instructor
        .findOne({ _id: request.params._id })
        .then(data => {
            response.send(data);
        })
        .catch(err => {
            response.send(err + "");
        });
}); //read instructor data [R]

instructorRoutings.post("/update", (request, response) => {
    let updateinstructor = new instructor(request.body);
    instructor
        .update({ _id: updateinstructor._id }, { $set: updateinstructor })
        .then(data => {
            response.redirect("/instructors/list");
        })
        .catch(err => {
            response.send(err + "");
        });
}); //update instructor data [U]

instructorRoutings.get("/delete/:_id", (request, response) => {
    instructor
        .remove({ _id: request.params._id })
        .then(data => {
            response.redirect("/instructors/list");
        })
        .catch(err => {
            response.send(err + "");
        });
}); //delete instructor data [D]

module.exports = instructorRoutings;
