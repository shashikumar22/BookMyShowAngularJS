var express = require('express');
var path = require('path');
var app = express();
var rootPath = path.normalize(__dirname + '/../');
app.use(express.static( rootPath + '/app'));

//connecting to mongodb
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
 
// Connection URL 
var url = 'mongodb://localhost:27017/BookingDetailsDatabase';
// Use connect method to connect to the Server 
// var db=mongodb("BookingDetailsDatabase",["bookingdetail"]);
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");


  // var myObj=[{"name":"ddd"},{"name":"123"}];

app.post('/blah', function(req, res, next) {
    var cope = req.body;
    console.log('request received:', req.body);
    db.collection("bookingdetail").insert(cope, function (err,     result) {
    if (err) {
        console.error(err);
        return res.send(err);
    } else {
        return res.send('Ok');
    }
    });
    //res.send('received the data.');
    });

  
 //    db.collection("bookingdetail").insert(myObj, function(err, res) {
 //    if (err) throw err;
 //    console.log("Number of records inserted: " + res.insertedCount);
	// });


	// db.collection("bookingdetail").findOne({}, function(err, result) {
 //    if (err) throw err;
 //    console.log(result);
    
 //  });




db.close();


});





app.listen(8000);
console.log('2.Listening on port ' + 8000 + '...');












