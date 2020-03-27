const React = require("react");
const DefaultLayout = require("../layouts/root");
const UpdateModal = require("./update_modal");

function listStudents(props) {
    let studentsList = props.students.map((item, i) => {
        return (
            <tr key={i}>
                <th scope="row">{item._id}</th>
                <td>{item.fullName}</td>
                <td>
                    {item.address.city} , {item.address.street},
                    {item.address.building}
                </td>
                <td>{item.department.name}</td>
                <td>
                    <a
                        className="btn btn-light"
                        data-toggle="modal"
                        data-target="#studentModal"
                        data-title={JSON.stringify(item)}
                    >
                        Update
                    </a>
                    <a
                        className="btn btn-danger ml-3"
                        href={"/students/delete/" + item._id}
                    >
                        Delete
                    </a>
                </td>
            </tr>
        );
    });
    return (
        <DefaultLayout title="Students">
            <div className="container mt-5">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Full Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">Department</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>{studentsList}</tbody>
                </table>
            </div>
            <UpdateModal cours={props.courses} deps={props.departments} />
        </DefaultLayout>
    );
}

module.exports = listStudents;
