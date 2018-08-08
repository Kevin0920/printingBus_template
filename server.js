const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');

const path = require('path')

const app = express();

app.use(express.static(path.join(__dirname, './client/dist/project')));

app.use(bodyParser.urlencoded({ extends: true }));

app.use(bodyParser.json());

require('./server/config/mongoose.js');

require('./server/config/routes.js')(app);



app.listen(8000, function () {
    console.log("App is running on port 8000!");
})
