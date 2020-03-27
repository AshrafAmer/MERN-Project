const React = require("react");
const DefaultLayout = require("../layouts/root");

function addInstructor(props) {
    let departments = props.departments.map((item, i) => {
        return (
            <option value={item._id} key={i}>
                {item.name}
            </option>
        );
    });

    return (
        <DefaultLayout title="Add Instructor">
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <form method="POST" action="/instructors/add">
                            <div class="form-group">
                                <label>Instructor id</label>
                                <input
                                    type="number"
                                    class="form-control"
                                    name="_id"
                                    placeholder="+integer number"
                                />
                            </div>

                            <div class="form-group">
                                <label>Instructor Full Name</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    name="fullName"
                                    id="fullName"
                                    placeholder="Ashraf Amer Taha"
                                />
                            </div>
                            <div class="form-group">
                                <label>Instructor Phone</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    name="mobileNumber"
                                    id="mobileNumber"
                                    placeholder="+201234567891"
                                />
                            </div>
                            <div class="form-group">
                                <label>Department</label>
                                <select class="form-control" name="department">
                                    {departments}
                                </select>
                            </div>

                            <button
                                type="submit"
                                class="btn btn-secondary btn-lg btn-block"
                            >
                                Add Instructor
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}

module.exports = addInstructor;
