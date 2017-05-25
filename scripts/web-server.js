var express = require('express');
var path = require('path');
var async=require("async");
var events = require('./eventsController');
var app = express();
var rootPath = path.normalize(__dirname + '/../');
var bodyParser = require('body-parser');
// var db=require("./db");
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/MyDB';

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static( rootPath + '/app'));

app.get('/data/event/:id', events.get);
app.get('/data/bookings/:id', events.getBookings);
app.get('/data/event', events.getAll);
app.post('/data/bookings/:id', events.save);

var details="";

app.post("/booking",function(req, res) {
  MongoClient.connect(url, function(err, db) {
    var bookingDetails=req.body;
    db.collection("bookingdetail").insert(bookingDetails, function (err,res) {
      console.log(res);
      details=bookingDetails._id;
      console.log("inserted id"+details);
      db.close();
    });
});
    res.end();
});

  
app.get("/bookingdetail",function(req,res){
  var emailid=req.query.email;
  MongoClient.connect(url,function(err,db){
    db.collection("bookingdetail").findOne({email:emailid},function(err,docs){
      console.log("Getting data from database"); 
      res.send(docs);
      res.end(); 
    });
  });  
});


app.get("/cities",function(req,res){
MongoClient.connect(url, function(err, db) {
  db.collection("cities").find({}).toArray(function(err, result) {
    res.send(result);
      res.end(); 
    db.close();
  });
}); 
});

app.get("/Theaters",function(req,res){
MongoClient.connect(url, function(err, db) {
  db.collection("Theaters").find({}).toArray(function(err, result) {
    res.send(result);
      res.end(); 
    db.close();
  });
}); 
});

app.get("/movies",function(req,res){
MongoClient.connect(url, function(err, db) {
  db.collection("movies").find({}).toArray(function(err, result) {
    console.log(result);
    res.send(result);
      res.end(); 
    db.close();
  });
}); 
});


app.get('*', function(req, res) { res.sendFile(rootPath + '/app/index.html'); });
app.listen(8000);
console.log('Listening on port ' + 8000 + '...');