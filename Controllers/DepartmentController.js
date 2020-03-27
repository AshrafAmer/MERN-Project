const express = require("express");
const departmentRoutings = express.Router();
const mongoose = require("mongoose");
const path = require("path");
require("./../Models/DepartmentsModel");
require("../Models/InstructorsModel");
let instructors = mongoose.model("instructors");
let department = mongoose.model("departments");

// ====== # CRUD Operations # ======
departmentRoutings.get("/add", (request, response) => {
    instructors
        .find({})
        .then(res => {
            response.render("departments/departments_add", {
                instructors: res
            });
        })
        .catch(err => {
            response.send(err + "");
        });
});

departmentRoutings.get("/list", (request, response) => {
    instructors
        .find({})
        .then(data => {
            department
                .find({})
                .populate({ path: "manager" })
                .then(res => {
                    response.render("departments/departments_list", {
                        departments: res,
                        managers: data
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

departmentRoutings.post("/add", (request, response) => {
    let newdepartment = new department(request.body);
    newdepartment
        .save()
        .then(data => {
            response.redirect("/departments/list");
        })
        .catch(err => {
            response.send(err + "");
        });
}); //create department data [C]

departmentRoutings.get("/department/:_id", (request, response) => {
    department
        .findOne({ _id: request.params._id })
        .then(data => {
            response.send(data);
        })
        .catch(err => {
            response.send(err + "");
        });
}); //read department data [R]

departmentRoutings.post("/update", (request, response) => {
    let updatedepartment = new department(request.body);
    department
        .update({ _id: updatedepartment._id }, { $set: updatedepartment })
        .then(data => {
            response.redirect("/departments/list");
        })
        .catch(err => {
            response.send(err + "");
        });
}); //update department data [U]

departmentRoutings.get("/delete/:_id", (request, response) => {
    department
        .remove({ _id: request.params._id })
        .then(data => {
            response.redirect("/departments/list");
        })
        .catch(err => {
            response.send(err + "");
        });
}); //delete department data [D]

module.exports = departmentRoutings;
