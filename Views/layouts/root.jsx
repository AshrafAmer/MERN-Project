const React = require("react");
const NavBar = require("./navbar");

function DefaultLayout(props) {
    return (
        <html>
            <head>
                <title>{props.title}</title>
                <link href="/css/bootstrap.min.css" rel="stylesheet" />
                <link rel="stylesheet" href="/css/font-awesome.css" />
                <link
                    href="https://fonts.googleapis.com/css?family=Varela+Round"
                    rel="stylesheet"
                    type="text/css"
                />
                {props.title == "login" ? (
                    <>
                        <link rel="stylesheet" href="/css/login.css" />
                    </>
                ) : (
                    <></>
                )}
            </head>
            <body>
                {props.title == "login" ? <></> : <NavBar />}

                {props.children}
                <script src="/jquery.min.js"></script>
                <script src="/js/bootstrap.min.js"></script>
                <script src="/js/bootstrap.bundle.min.js"></script>
                {props.title == "login" ? (
                    <>
                        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.13.1/jquery.validate.min.js"></script>
                        <script src="/js/login.js"></script>
                    </>
                ) : (
                    <>
                        <script src="/js/modals.js"></script>
                    </>
                )}
            </body>
        </html>
    );
}

module.exports = DefaultLayout;
