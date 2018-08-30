const path = require('path')
const bodyParser = require('body-parser')
const express = require('express')

const app = express();
const PORT = process.env.PORT || 3000;

module.exports = {
    li: () => { //passing express() function call
        return app;
    },
    pi: () => { //passing path function
        return path;
    }
}

const htmlRoutes = require('./app/routing/htmlRoutes.js');
const apiRoutes = require('./app/routing/apiRoutes.js')

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

const routes = htmlRoutes.routes;

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
    routes()

});

module.exports = {
    li: () => { //passing express() function call
        return app;
    },
    pi: () => { //passing path function
        return path;
    }
}