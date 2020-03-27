const React = require("react");
const DefaultLayout = require("../layouts/root");

function addCourses(props) {
    return (
        <DefaultLayout title="Add Course">
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <form method="POST" action="/courses/add">
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
                                Add Course
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}

module.exports = addCourses;
