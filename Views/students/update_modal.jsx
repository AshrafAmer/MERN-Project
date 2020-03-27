const React = require("react");

function updateModal(props) {
    let departments = props.deps.map((item, i) => {
        return (
            <option value={item._id} key={i}>
                {item.name}
            </option>
        );
    });

    let courses = props.cours.map((item, i) => {
        return (
            <option value={item._id} key={i}>
                {item.name}
            </option>
        );
    });
    return (
        <div
            class="modal fade"
            id="studentModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="studentModalTitle"
            aria-hidden="true"
        >
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="studentModalTitle"></h5>
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
                        <form method="POST" action="/students/update">
                            <div class="form-group">
                                <label>Student id</label>
                                <input
                                    type="number"
                                    class="form-control"
                                    name="_id"
                                    id="_id"
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
                                    id="street"
                                    placeholder="35"
                                />
                            </div>
                            <div class="form-group">
                                <label>Building</label>
                                <input
                                    type="number"
                                    class="form-control"
                                    name="address.building"
                                    id="building"
                                    placeholder="402"
                                />
                            </div>
                            <div class="form-group">
                                <label>Department</label>
                                <select
                                    class="form-control"
                                    id="department"
                                    name="department"
                                >
                                    {departments}
                                </select>
                            </div>

                            <div class="form-group">
                                <label>Courses</label>
                                <select
                                    class="form-control"
                                    id="courses"
                                    name="courses"
                                >
                                    {courses}
                                </select>
                            </div>

                            <button
                                type="submit"
                                class="btn btn-secondary btn-lg btn-block"
                            >
                                Update Student
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

module.exports = updateModal;
