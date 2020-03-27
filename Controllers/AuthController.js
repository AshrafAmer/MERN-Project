const express = require("express");
const authRoutings = express.Router();

authRoutings.get("/login", (request, response) => {
    response.render("auth/login");
});

authRoutings.post("/login", (request, response) => {
    console.log(request.body);
    if (request.body.userName == "admin" && request.body.password == "123") {
        request.session.role = "admin";
        response.send("ok");
        console.log(request.session.role);
    } else response.send("err");
});

authRoutings.get("/logout", (request, response) => {
    request.session.destroy(err => {
        if (err) {
            console.log(err + "");
        }
        response.redirect("/login");
    });
});
module.exports = authRoutings;
