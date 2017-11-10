var express = require ('express');
var path = require ('path');
//var mysql = require('mysql'); 

var app = express();

app.set('views', path.join(__dirname, '../client/src', 'index'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get ('/', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify("HELLO FROM SERVER"));
});
/*
var lat = 33.5500, lng = 73.5231;

app.get ('/getCoordinates', function (req, res) {

    conn.query('SELECT lattitude FROM coordinates ORDER BY ID DESC LIMIT 1', function(err, result) {
    console.log("latest latitude from database: ", result[0].lattitude);
    lat = result[0].lattitude;
    });

    conn.query('SELECT longitude FROM coordinates ORDER BY ID DESC LIMIT 1', function (err, result) {
    console.log('latest longitude from database: ', result[0].longitude);
    lng = result[0].longitude;
    });

    res.setHeader('Content-Type', 'application/json');
    //lat = lat-0.0005;
    //lng = lng-0.0005;
    res.send(JSON.stringify(lat + " " + lng));
});

var conn = mysql.createConnection({
    host: "localhost",
    user: "bilal",
    password: "taurus",
    database: "node-db"
});

conn.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});
*/

var port_number = server.listen(process.env.PORT || 3001);
app.listen(port_number);
app.listen (port_number, function () {
    console.log("Server Started at port ", port_number);
});
