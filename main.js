// Written by Benjamin Watkins (watkins.ben@gmail.com)

// Imports
const fs = require('fs');
const app = require('express')();
const https = require('https');
const http = require('http');

// Config
const certFile = 'certificate.pfx';
const certPass = 'password'
const Port_HTTP = 80;
const Port_HTTPS = 443;

// End points
app.get('/', function (req, res){
    res.send('hell0. i iz hungry api. plz send foodz in header to /eat kfnxbai');
    console.log("ah herro!");
});

app.get('/eat', function (req, res){
    var food = req.headers['food']
    console.log(food)
    res.send(food == null ? "Feed me plz" : `I am eating ${food}. nom nom nom n0m nm omn`);
});

// Start
console.log("Starting Hungry API v3")

if (fs.existsSync(certFile)) {
    https.createServer({
        pfx: fs.readFileSync(certFile),
        passphrase: certPass
    }, app).listen(Port_HTTPS);
    console.log(`Started secure server. Listening on port ${Port_HTTPS}!`);
}
else {
    http.createServer(app).listen(Port_HTTP);
    console.log(`Started insecure server. Listening on port ${Port_HTTP}!`);
}