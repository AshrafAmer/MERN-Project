const React = require("react");
const DefaultLayout = require("../layouts/root");
const UpdateModal = require("./update_modal");

function listDepartments(props) {
    let departmentsList = props.departments.map((item, i) => {
        return (
            <tr key={i}>
                <th scope="row">{item._id}</th>
                <td>{item.name}</td>
                <td>{item.location}</td>
                <td>{item.manager.fullName}</td>
                <td>
                    <a
                        className="btn btn-light"
                        data-toggle="modal"
                        data-target="#departmentModal"
                        data-title={JSON.stringify(item)}
                    >
                        Update
                    </a>
                    <a
                        className="btn btn-danger ml-3"
                        href={"/departments/delete/" + item._id}
                    >
                        Delete
                    </a>
                </td>
            </tr>
        );
    });
    return (
        <DefaultLayout title="Departments">
            <div className="container mt-5">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Department Name</th>
                            <th scope="col">Location</th>
                            <th scope="col">Manager</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>{departmentsList}</tbody>
                </table>
            </div>
            <UpdateModal managers={props.managers} />
        </DefaultLayout>
    );
}

module.exports = listDepartments;
