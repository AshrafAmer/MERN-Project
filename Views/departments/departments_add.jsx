const React = require("react");
const DefaultLayout = require("../layouts/root");

function addDepartment(props) {
    let managers = props.instructors.map((item, i) => {
        return (
            <option value={item._id} key={i}>
                {item.fullName}
            </option>
        );
    });

    return (
        <DefaultLayout title="Add Department">
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <form method="POST" action="/departments/add">
                            <div class="form-group">
                                <label>Department id</label>
                                <input
                                    type="number"
                                    class="form-control"
                                    name="_id"
                                    placeholder="+integer number"
                                />
                            </div>

                            <div class="form-group">
                                <label>Department Name</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    name="name"
                                    id="name"
                                    placeholder="Open Source"
                                />
                            </div>

                            <div class="form-group">
                                <label>Department Location</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    name="location"
                                    id="location"
                                    placeholder="Lab3"
                                />
                            </div>

                            <div class="form-group">
                                <label>Manager</label>
                                <select class="form-control" name="manager">
                                    {managers}
                                </select>
                            </div>

                            <button
                                type="submit"
                                class="btn btn-secondary btn-lg btn-block"
                            >
                                Add Department
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}

module.exports = addDepartment;
