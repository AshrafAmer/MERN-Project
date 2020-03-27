const mongoose = require("mongoose");

// Courses Schema
const CoursesModel = new mongoose.Schema({
    _id: Number,
    name: { type: String, required: true },
    labHours: Number,
    lectureHours: Number
});

mongoose.model("courses", CoursesModel);
