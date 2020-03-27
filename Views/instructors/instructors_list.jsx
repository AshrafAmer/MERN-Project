const React = require("react");
const DefaultLayout = require("../layouts/root");
const UpdateModal = require("./update_modal");

function listInstructors(props) {
    let instructorsList = props.instructors.map((item, i) => {
        return (
            <tr key={i}>
                <th scope="row">{item._id}</th>
                <td>{item.fullName}</td>
                <td>{item.mobileNumber}</td>
                <td>{item.department.name}</td>
                <td>
                    <a
                        className="btn btn-light"
                        data-toggle="modal"
                        data-target="#instructorModal"
                        data-title={JSON.stringify(item)}
                    >
                        Update
                    </a>
                    <a
                        className="btn btn-danger ml-3"
                        href={"/instructors/delete/" + item._id}
                    >
                        Delete
                    </a>
                </td>
            </tr>
        );
    });
    return (
        <DefaultLayout title="Instructors">
            <div className="container mt-5">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Full Name</th>
                            <th scope="col">Mobile Phone</th>
                            <th scope="col">Department</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>{instructorsList}</tbody>
                </table>
            </div>
            <UpdateModal deps={props.departments} />
        </DefaultLayout>
    );
}

module.exports = listInstructors;
