    
eventsApp.service('myservice', function() {

     this.movie=function(movieName){
     	this.mn=movieName;
     }
     this.userDetails=function(user){
     	this.un=user;
     }
    });