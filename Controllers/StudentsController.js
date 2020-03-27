const express = require("express");
const studentRoutings = express.Router();
const mongoose = require("mongoose");
const path = require("path");
const crypto = require("crypto");
require("./../Models/StudentsModel");
require("./../Models/DepartmentsModel");
require("./../Models/CoursesModel");
let student = mongoose.model("students");
let departments = mongoose.model("departments");
let courses = mongoose.model("courses");

// ====== # crypto Encrypt and Decrypt passwords # ======

function encrypt(pass) {
    let mykey = crypto.createCipher("aes-128-cbc", "mypassword");
    let encryptedPass = mykey.update(pass, "utf8", "hex");
    encryptedPass += mykey.final("hex");
    return encryptedPass;
}

function decrypt(pass) {
    let mykey = crypto.createDecipher("aes-128-cbc", "mypassword");
    let originalPass = mykey.update(pass, "hex", "utf8");
    originalPass += mykey.final("utf8");
    return originalPass;
}

// ====== # CRUD Operations # ======
studentRoutings.get("/add", (request, response) => {
    courses
        .find({})
        .then(data => {
            departments
                .find({})
                .then(res => {
                    response.render("students/students_add", {
                        courses: data,
                        departments: res
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
studentRoutings.post("/add", (request, response) => {
    let newStudent = new student(request.body);
    newStudent.password = encrypt(newStudent.password);
    newStudent
        .save()
        .then(data => {
            response.redirect("/students/list");
        })
        .catch(err => {
            response.send(err + "");
        });
}); //create student data [C]

studentRoutings.get("/list", (request, response) => {
    courses
        .find({})
        .then(data => {
            departments
                .find({})
                .then(res => {
                    student
                        .find({})
                        .populate({ path: "department courses" })
                        .then(stdata => {
                            response.render("students/students_list", {
                                students: stdata,
                                departments: res,
                                courses: data
                            });
                        })
                        .catch(err => {
                            response.send("" + err);
                        });
                })
                .catch(err => {
                    response.send(err + "");
                });
        })
        .catch(err => {
            response.send(err + "");
        });
}); //create student data [C]

studentRoutings.get("/student/:_id", (request, response) => {
    student
        .findOne({ _id: request.params._id })
        .then(data => {
            response.render("students/student_info", { student: data });
        })
        .catch(err => {
            response.send(err + "");
        });
}); //read student data [R]

studentRoutings.post("/update", (request, response) => {
    let updateStudent = new student(request.body);
    student
        .update({ _id: updateStudent._id }, { $set: updateStudent })
        .then(data => {
            response.redirect("/students/list");
        })
        .catch(err => {
            response.send(err + "");
        });
}); //update student data [U]

studentRoutings.get("/delete/:_id", (request, response) => {
    student
        .remove({ _id: request.params._id })
        .then(data => {
            response.redirect("/students/list");
        })
        .catch(err => {
            response.send(err + "");
        });
}); //delete student data [D]

module.exports = studentRoutings;
