const React = require("react");
const DefaultLayout = require("../layouts/root");
const UpdateModal = require("./update_modal");

function listCourses(props) {
    let courses = props.courses.map((item, i) => {
        return (
            <tr key={i}>
                <th scope="row">{item._id}</th>
                <td>{item.name}</td>
                <td>{item.lectureHours} hours</td>
                <td>{item.labHours} hours</td>
                <td>
                    <a
                        className="btn btn-light"
                        data-toggle="modal"
                        data-target="#courseModal"
                        data-title={JSON.stringify(item)}
                    >
                        Update
                    </a>
                    <a
                        className="btn btn-danger ml-3"
                        href={"/courses/delete/" + item._id}
                    >
                        Delete
                    </a>
                </td>
            </tr>
        );
    });
    return (
        <DefaultLayout title="courses">
            <div className="container mt-5">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">name</th>
                            <th scope="col">Lecture Hours</th>
                            <th scope="col">Lab Hours</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>{courses}</tbody>
                </table>
            </div>
            <UpdateModal />
        </DefaultLayout>
    );
}

module.exports = listCourses;
