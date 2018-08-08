const mainroutes = require('../controllers/mainControl.js');
const path = require('path');


module.exports = function (app) {
    
    app.post('/send', function (req, res, next) {
        mainroutes.sendInfo(req, res);
    })

    app.all("*", function (req, res) {
        res.sendFile('index.html', { root: './client/dist/project' });
    })
}