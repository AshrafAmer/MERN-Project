const mongoose = require("mongoose");

// Students Schema
const StudentsModel = new mongoose.Schema({
    _id: Number,
    fullName: { type: String, required: true },
    userName: { type: String, unique: true, required: true },
    password: { type: String, required: true, default: "std40" },
    address: { city: String, street: Number, building: Number },
    department: { type: Number, ref: "departments" },
    courses: [{ type: Number, ref: "courses" }]
});

mongoose.model("students", StudentsModel);
