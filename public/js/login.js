$("#form-submit").on("click", event => {
    event.preventDefault();
    let _username = $("#userName").val();
    let _password = $("#password").val();
    $.ajax({
        url: "http://localhost:8085/login",
        method: "POST",
        contentType: "Application/json",
        data: JSON.stringify({ userName: _username, password: _password }),
        dataType: "text",
        success(data) {
            if (data == "ok")
                location.href = "http://localhost:8085/courses/list";
            else console.log("" + data);
        },
        error(error) {
            console.log("" + error);
        }
    });
});
