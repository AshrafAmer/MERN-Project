const React = require("react");

function updateModal(props) {
    let departments = props.deps.map((item, i) => {
        return (
            <option value={item._id} key={i}>
                {item.name}
            </option>
        );
    });

    return (
        <div
            class="modal fade"
            id="instructorModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="instructorModalTitle"
            aria-hidden="true"
        >
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="instructorModalTitle"></h5>
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
                        <form method="POST" action="/instructors/update">
                            <div class="form-group">
                                <label>instructor id</label>
                                <input
                                    type="number"
                                    class="form-control"
                                    name="_id"
                                    id="_id"
                                    placeholder="+integer number"
                                />
                            </div>

                            <div class="form-group">
                                <label>instructor Full Name</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    name="fullName"
                                    id="fullName"
                                    placeholder="Ashraf Amer Taha"
                                />
                            </div>
                            <div class="form-group">
                                <label>instructor phone</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    name="mobileNumber"
                                    id="mobileNumber"
                                    placeholder="+20123456789"
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

                            <button
                                type="submit"
                                class="btn btn-secondary btn-lg btn-block"
                            >
                                Update instructor
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

module.exports = updateModal;
