// ====== import all required packages ======
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const session = require("express-session");
const cors = require("cors");

// ====== import server controllers ======
const authRouters = require("./Controllers/AuthController");
const courseRouters = require("./Controllers/CourseController");
const instructorRouters = require("./Controllers/InstructorController");
const studentRouters = require("./Controllers/StudentsController");
const departmentRouters = require("./Controllers/DepartmentController");

// ====== Up Our App Server ======
const server = express();

server.listen(8085, () => {
    console.log("Congrats, your server started Sucessfully...");
});

mongoose
    .connect("mongodb://localhost:27017/simple_project", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("DataBase connected successfully...");
    })
    .catch(function(error) {
        console.log(error + "");
    });

// ====== Set Middlewares ======
server.use((request, response, next) => {
    console.log(
        "Just for test, 1st middleware ==>" +
            request.method +
            " : " +
            request.url
    );
    next(); // do nothing
});

// ====== Requests Handle ======
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

// ====== Configure static paths and view engines ======
server.set("Views", path.join(__dirname, "Views"));
server.set("view engine", "jsx");
server.engine(
    "jsx",
    require("express-react-views").createEngine({ beautify: true })
);

server.use(express.static(path.join(__dirname, "public")));
server.use(
    express.static(path.join(__dirname, "node_modules", "bootstrap", "dist"))
);
server.use(
    express.static(path.join(__dirname, "node_modules", "jquery", "dist"))
);
server.use(
    express.static(path.join(__dirname, "node_modules", "font-awesome"))
);

// ====== Session Secret settings ======
server.use(session({ secret: "abc123" }));
server.use(authRouters);

server.use((request, response, next) => {
    if (request.session.role == "admin") {
        next();
    } else {
        response.redirect("/login");
    }
});
// ====== Controllers Routers ======
server.use("/students", studentRouters);
server.use("/instructors", instructorRouters);
server.use("/departments", departmentRouters);
server.use("/courses", courseRouters);

server.use((request, response) => {
    response.redirect("/login");
});
