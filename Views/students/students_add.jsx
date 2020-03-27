const React = require("react");
const DefaultLayout = require("../layouts/root");

function addStudents(props) {
    let departments = props.departments.map((item, i) => {
        return (
            <option value={item._id} key={i}>
                {item.name}
            </option>
        );
    });

    let courses = props.courses.map((item, i) => {
        return (
            <option value={item._id} key={i}>
                {item.name}
            </option>
        );
    });

    return (
        <DefaultLayout title="Add Student">
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <form method="POST" action="/students/add">
                            <div class="form-group">
                                <label>Student id</label>
                                <input
                                    type="number"
                                    class="form-control"
                                    name="_id"
                                    placeholder="+integer number"
                                />
                            </div>

                            <div class="form-group">
                                <label>Student Full Name</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    name="fullName"
                                    id="fullName"
                                    placeholder="Ashraf Amer Taha"
                                />
                            </div>
                            <div class="form-group">
                                <label>Student username</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    name="userName"
                                    id="userName"
                                    placeholder="ashraf_amer"
                                />
                            </div>

                            <div class="form-group">
                                <label>Account password</label>
                                <input
                                    type="password"
                                    class="form-control"
                                    name="password"
                                    id="password"
                                    placeholder="*********"
                                />
                            </div>
                            <div class="form-group">
                                <label>City</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    name="address.city"
                                    id="city"
                                    placeholder="Tanta"
                                />
                            </div>
                            <div class="form-group">
                                <label>Street</label>
                                <input
                                    type="number"
                                    class="form-control"
                                    name="address.street"
                                    id="city"
                                    placeholder="35"
                                />
                            </div>
                            <div class="form-group">
                                <label>Building</label>
                                <input
                                    type="number"
                                    class="form-control"
                                    name="address.building"
                                    id="city"
                                    placeholder="402"
                                />
                            </div>
                            <div class="form-group">
                                <label>Department</label>
                                <select class="form-control" name="department">
                                    {departments}
                                </select>
                            </div>

                            <div class="form-group">
                                <label>Courses</label>
                                <select
                                    class="form-control"
                                    name="courses"
                                    multiple
                                >
                                    {courses}
                                </select>
                            </div>

                            <button
                                type="submit"
                                class="btn btn-secondary btn-lg btn-block"
                            >
                                Add Student
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}

module.exports = addStudents;
