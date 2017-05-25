'use strict';

eventsApp.controller('BookingDetailsDatabaseController',
    function BookingDetailsDatabaseController($scope,$http,myservice){
     var emailfs=myservice.un;
     console.log("myservice.mn  "+emailfs);
    $http.get("/bookingdetail",{params: {email:emailfs}}).success(function(res){
     $scope.movieName=res.movieName;
     $scope.ticketCount=res.ticketCount;
      $scope.movieTime=res.selectedTime;
      $scope.emailId=res.email;
     console.log("Hello World");
     console.log(res.ticketCount+" "+$scope.ticketCount+" ");
   });
    

});