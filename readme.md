# How to Build MERN project?!

The MERN stack is one of the most popular JavaScript stacks for building modern single-page web applications. It consists of `MongoDB`, `Express`, `React / Redux`, and `Node.js`. Follow along with this tutorial, we will built a MERN project step by step with explanation.

## First: Creating a Nodejs Backend [Express]:

we are gonna to build a backend server to take requests from frontend app and send responses back to it.

> Prerequisites { Install `nodejs` on your local machine }:
>
> 1. For macOS and Windows systems follow this [link.](https://pip.pypa.io/en/stable/) > <br>
> 2. For others, or for more information, follow this [installation instructions](https://nodejs.org/en/download/package-manager/).

### Initialize nodejs Sever `init`:

-   Create a new Directory for the project, and navigate to it using your Terminal.

-   Run this command line `npm init`<br>
    after this command, `package.json` file will be generated inside your project directory carries all data required to work with Node. <br> This file is used to give information to npm that allows it to identify the project as well as handle the project's dependencies. <br>
    [What is the file `package.json`?
    ](https://nodejs.org/en/knowledge/getting-started/npm/what-is-the-file-package-json/)

-   Install [Express](https://www.npmjs.com/package/express) framework to make REST APIs<br>
    Run This command `npm i express` to download, and install it.

-   Install [Cors](https://www.npmjs.com/package/cors) package for providing a middleware that enable server-to-server requests.<br>
    `npm i cors`

-   Install [body-parser](https://www.npmjs.com/package/body-parser) package for providing a middleware that Parse incoming request bodies in a middleware before your handlers.<br>
    `npm i body-parser`

-   Install [morgan](https://www.npmjs.com/package/morgan), HTTP request logger middleware for node.js<br>
    `npm i morgan`

-   Install [mongoose](https://www.npmjs.com/package/mongoose). It's a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.<br>
    `npm i mongoose`

    > after previous steps, if everythings run okay, your package.json file must be look like: [ Just for now ] <br> ![Image of Package.json](public/images/docs/1st_packagejson.JPG)

### Build a nodejs Sever MVC pattern:

![Image of Express MVC](public/images/docs/MVC_Express.png)

1.  Controllers:<br>
    Controller functions recieve requists from client, get the requested data from the models DB, prepare data and send/ it direct to the client side.
    <br>
    inside this controller we will create:

        - CourseController.js
        - DepartmentController.js
        - InstructorController.js
        - StudentsController.js

    inside each Controller we gonna to require the `Express` application object, uses it to get a `Router` object and then adds a couple of routes to it using HTTP verbs: `get()` , `post()`, `delete()` and so on.. <br>
    To connect with MongoDB (`Models`), we require a specific model which we need to create an instance from its schema.<br>

    ![Image of CourseController.js](public/images/docs/controller.JPG)

2.  Models:<br>
    inside this Models we will create:

        - CoursesModel.js
        - DepartmentsModel.js
        - InstructorsModel.js
        - StudentsModel.js

    Before you jump in and start coding the models, It's important to know that `Mongoose` is a MongoDB object modeling tool designed to work in an asynchronous environment. acts as a front end to MongoDB, an open source NoSQL database that uses a document-oriented data model. A "`collection`" of "`documents`" in a MongoDB database is analogous to a "`table`" of "`rows`" in a relational database.
    <br><br>
    `Model`s are defined using the Schema interface. The Schema allows you to define the fields stored in each document along with their validation requirements and default values.
    <br><br>

    > Each `model` maps to a `collection` of documents in the MongoDB database. The documents will contain the fields/schema types defined in the model Schema.

    ![Image of CoursesModel.js](public/images/docs/model.JPG)

3.  Views :<br>
    In this dir we create our html templates which used by the controllers to render the data. We will cover this topic in details next few lines.
    <br>
    Just Continue...

### Configure server.js [Root File]:

When running `npm init` command, we selected server.js as our entry point(root file). It's index.js by default, just names.!
<br>
So the app directs to `server.js` first and so we need to create and configure it.
<br>

-   1st require all packages installed
    ![Image of require installed packages](public/images/docs/packages.JPG)
-   2nd require all required Controllers
    ![Image of require controllers](public/images/docs/controllers.JPG)
-   3rd listen to port 8085 (able to change)
    ![Image of Listen to 8085](public/images/docs/portlisten.JPG)
-   4th connect to MongoDB [ First Run `mongod` command ]
    ![Image of Connect to DataBase](public/images/docs/dbconnect.JPG)
-   5th Config routers' middlewares
    ![Image of Config routers](public/images/docs/routersMiddleware.JPG)

## Second: Creating a Client Frontend [React]:

here, we will use [Express view engine](https://www.npmjs.com/package/express-react-views) which renders React components on server. It renders static markup and does not support mounting those views on the client.

This is intended to be used as a replacement for existing server-side view solutions, like jade, ejs, or handlebars.

`npm i express-react-views react react-dom`

Then go to server.js to configure static paths and engine views

![Image of Config routers](public/images/docs/viewsengine.JPG)

all after that work as ejs, but all data you will send from backend to react-views is located in `props`.

#### Example: send data from server/controller to react-views .jsx

1.  This get function select all courses from mongo database and render data to react-views for representing it to user
    <br>
    ![Image of Sending data to react-view](public/images/docs/coursesList.JPG)
    <br>
2.  receive data which sent into `courses` vaiable [ it is a List of Objects ], `courses` variable added by default to props in react-view.
    <br>
    first we will require react inside views `const React = require("react");`, Then create our function component and exports it. like that:
    <br>
    ![Image of Sending data to react-view](public/images/docs/coursesViews.JPG)
    <br>
    Note that, `layouts/root` I created it to share header and footer between all pages.!

## More Topics: Encrypt and Decrypt passwords

let's do that using `crypto` package.
<br>
`npm i crypto`
<br>
Then go to StudentsController and require it
<br>
`const crypto = require("crypto");`
<br>
after that you need to create two functions: one for encrypt password and another to decrypt it.

![Image of Config routers](public/images/docs/encrypt_decrypt.JPG)

### Now, How to use this functions?!

before insert a new student/user you need to update password feild
<br>
`let newStudent = new student(request.body);`
<br>
`newStudent.password = encrypt(newStudent.password);`
<br>
Then insert it to your DataBase. it will be saved as string like that: `7359fa105ab38db08e3a70ac1953571b` .!

## More Topics: Set Session roles to Login and Logout

first we need to install [`express-session`](https://www.npmjs.com/package/express-session) package, using this command line:
<br>
`npm i express-session`
<br>
downloaded?! Then require it inside your server.js code `const session = require("express-session");`
<br>
before any routing, we need first to configure session settings inside server script:
<br>
`server.use(session({ secret: "abc123" }));`
<br>
[express-session](https://www.npmjs.com/package/express-session) documentation explain in details how to use it and more options are listed.

### Now, You are ready to set login and logout rules

Authentication will be done in 3 steps:
<br>

1.  Create an AuthController to set roles on session object as new property and modify it as you want. do that inside login function
    ![Image of Config routers](public/images/docs/login.JPG)

2.  use role property to build an auth middleware, if user has a role property in his session that's mean he logined to our system, so he can complite and access to our system functionality. but if he don't has any roles, our middleware will redirect him to login page.
    ![Image of Config routers](public/images/docs/loginMiddleware.JPG)

3.  finally, you can control user accessibility depending on session role property. but how user can logout? just destroy session.
    <br>
    `request.session.destroy`
    ![Image of Config routers](public/images/docs/logout.JPG)
    
    
    
    

## Author

 Ashraf Amer

## License

Copyright(c) 2020 ITI OpenSource Track

