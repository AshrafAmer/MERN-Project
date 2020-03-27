const React = require("react");

function navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/courses/list">
                Welcome Admin
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/courses/list">
                            Courses
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/courses/add">
                            Add Course
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/students/list">
                            Students
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/students/add">
                            Add Student
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/instructors/list">
                            Instructors
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/instructors/add">
                            Add Instructor
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/departments/list">
                            Departments
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/departments/add">
                            Add Department
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/logout">
                            Logout
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

module.exports = navbar;
