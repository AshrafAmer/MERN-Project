const mongoose = require("mongoose");

// Departments Schema
const DepartmentsModel = new mongoose.Schema({
    _id: Number,
    name: { type: String, required: true },
    location: { type: String },
    manager: { type: Number, ref: "instructors" }
});

mongoose.model("departments", DepartmentsModel);
