const mongoose = require("mongoose");

// Instructors Schema
const InstructorModel = new mongoose.Schema({
    _id: Number,
    fullName: { type: String, required: true },
    mobileNumber: { type: String },
    department: { type: Number, ref: "departments" }
});

mongoose.model("instructors", InstructorModel);
