const React = require("react");

function updateModal(props) {
    return (
        <div
            class="modal fade"
            id="courseModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="courseModalTitle"
            aria-hidden="true"
        >
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="courseModalTitle"></h5>
                        <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        {" "}
                        <form method="POST" action="/courses/update">
                            <div class="form-group">
                                <label>Course id</label>
                                <input
                                    type="number"
                                    class="form-control"
                                    name="_id"
                                    id="_id"
                                    placeholder="+integer number"
                                />
                            </div>

                            <div class="form-group">
                                <label>Course Title</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    name="name"
                                    id="name"
                                    placeholder="Java Script, React, Node Js, ..."
                                />
                            </div>
                            <div class="form-group">
                                <label>Course Lec hours</label>
                                <input
                                    type="number"
                                    class="form-control"
                                    min="1"
                                    max="12"
                                    name="lectureHours"
                                    id="lectureHours"
                                    placeholder="from 1 to 12"
                                />
                            </div>

                            <div class="form-group">
                                <label>Course Lab hours</label>
                                <input
                                    type="number"
                                    class="form-control"
                                    min="1"
                                    max="6"
                                    name="labHours"
                                    id="labHours"
                                    placeholder="from 1 to 6"
                                />
                            </div>

                            <button
                                type="submit"
                                class="btn btn-secondary btn-lg btn-block"
                            >
                                Update Course
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

module.exports = updateModal;
