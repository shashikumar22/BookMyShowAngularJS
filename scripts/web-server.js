var express = require('express');
var path = require('path');
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


app.post("/booking",function(req, res) {
  MongoClient.connect(url, function(err, db) {
    var bookingDetails=req.body;
    db.collection("bookingdetail").insert(bookingDetails, function (err,res) {
      console.log(res);
      db.close();

    });
});
  console.log("helloo");
    res.end();
});








// var postdata=function(req, res) {
  // MongoClient.connect(url, function(err, db) {
  // // assert.equal(null, err);
  // console.log("Connected correctly to server");
  //   var cope = req.body;
  //   console.log('request received:', req.body);
  //  db.collection("bookingdetail").insert(cope, function (err,res) {
  //   if(err)throw err;
  //   console.log(res.insertedCount);
  //   });
  //   });
// };







 
// // Connection URL 
// // Use connect method to connect to the Server 
// // var db=mongodb("BookingDetailsDatabase",["bookingdetail"]);



  
 // app.post('/booking',    



//   app.get('/bookingdetail', function(req, res){
//     console.log("I received a GET request");
//     db.collection('bookingdetail').find(function(err, docs){
//         console.log("Getting data from db");
//         if (err) {
//           console.log('error from mongodb', err);
//           res.send('error retrieving data')
//           // or however else you want to handle your error
//         } else {
//           console.log('docs from mongodb', docs);
//           res.json(docs);
//           console.log("Returned data");
//         }
//     });

// });


// // db.close();


// });


// app.get('*', function(req, res) { res.sendFile(rootPath + '/app/index.html'); });
app.listen(8000);
console.log('Listening on port ' + 8000 + '...');