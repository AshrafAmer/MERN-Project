$("#courseModal").on("show.bs.modal", function(event) {
    let button = $(event.relatedTarget); // Button that triggered the modal
    let eventObject = button.data("title"); // Extract info from data-* attributes
    let modal = $(this);
    modal.find(".modal-title").text("Update " + eventObject.name + " Data");
    console.log(eventObject);
    modal.find("#_id").val(eventObject._id);
    modal.find("#name").val(eventObject.name);
    modal.find("#lectureHours").val(eventObject.lectureHours);
    modal.find("#labHours").val(eventObject.labHours);
});

$("#studentModal").on("show.bs.modal", function(event) {
    let button = $(event.relatedTarget); // Button that triggered the modal
    let eventObject = button.data("title"); // Extract info from data-* attributes
    let modal = $(this);
    modal.find(".modal-title").text("Update " + eventObject.fullName + " Data");
    console.log(eventObject);
    modal.find("#_id").val(eventObject._id);
    modal.find("#fullName").val(eventObject.fullName);
    modal.find("#userName").val(eventObject.userName);
    modal.find("#city").val(eventObject.address.city);
    modal.find("#street").val(eventObject.address.street);
    modal.find("#building").val(eventObject.address.building);
});

$("#instructorModal").on("show.bs.modal", function(event) {
    let button = $(event.relatedTarget); // Button that triggered the modal
    let eventObject = button.data("title"); // Extract info from data-* attributes
    let modal = $(this);
    modal.find(".modal-title").text("Update " + eventObject.fullName + " Data");
    console.log(eventObject);
    modal.find("#_id").val(eventObject._id);
    modal.find("#fullName").val(eventObject.fullName);
    modal.find("#mobileNumber").val(eventObject.mobileNumber);
});

$("#departmentModal").on("show.bs.modal", function(event) {
    let button = $(event.relatedTarget); // Button that triggered the modal
    let eventObject = button.data("title"); // Extract info from data-* attributes
    let modal = $(this);
    modal.find(".modal-title").text("Update " + eventObject.name + " Data");
    console.log(eventObject);
    modal.find("#_id").val(eventObject._id);
    modal.find("#name").val(eventObject.name);
    modal.find("#location").val(eventObject.location);
});
