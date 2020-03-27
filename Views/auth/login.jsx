const React = require("react");
const DefaultLayout = require("../layouts/root");

function HelloMessage(props) {
    return (
        <DefaultLayout title="login">
            <div className="text-center">
                <div className="logo">login</div>
                <div className="login-form-1">
                    <form id="login-form" className="text-left">
                        <div className="login-form-main-message"></div>
                        <div className="main-login-form">
                            <div className="login-group">
                                <div className="form-group">
                                    <label
                                        htmlFor="userName"
                                        className="sr-only"
                                    >
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="userName"
                                        name="userName"
                                        placeholder="username"
                                    />
                                </div>
                                <div className="form-group">
                                    <label
                                        htmlFor="password"
                                        className="sr-only"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        name="password"
                                        placeholder="password"
                                    />
                                </div>
                                <div className="form-group login-group-checkbox">
                                    <input
                                        type="checkbox"
                                        id="remember"
                                        name="remember"
                                    />
                                    <label htmlFor="remember">remember</label>
                                </div>
                            </div>
                            <input
                                id="form-submit"
                                type="button"
                                className="login-button"
                                value="=>"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </DefaultLayout>
    );
}

module.exports = HelloMessage;
