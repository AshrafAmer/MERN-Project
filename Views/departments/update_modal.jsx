const React = require("react");

function updateModal(props) {
    let managers = props.managers.map((item, i) => {
        return (
            <option value={item._id} key={i}>
                {item.fullName}
            </option>
        );
    });

    return (
        <div
            class="modal fade"
            id="departmentModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="departmentModalTitle"
            aria-hidden="true"
        >
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="departmentModalTitle"></h5>
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
                        <form method="POST" action="/departments/update">
                            <div class="form-group">
                                <label>Department id</label>
                                <input
                                    type="number"
                                    class="form-control"
                                    name="_id"
                                    id="_id"
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
                                Update Department
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

module.exports = updateModal;
