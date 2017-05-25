"use strict";
eventsApp.controller('DetailsControllerDatabase',

function DetailsController($scope,eventData,$http,myservice,$location){
      $scope.myservice = myservice;
    $scope.count=0;

    $scope.increment=function(){
      $scope.count++;
    }
    $scope.decrement=function(){
      if($scope.count==0){
      $scope.count--;
    }
    }
    

       $scope.movie = {};
     $scope.saveEvent = function(movie, newDetailsForm) {

      console.log(myservice.mn);
       
            if(newDetailsForm.$valid) {
            $scope.movie.movieName=myservice.mn;
            $scope.movie.ticketCount=$scope.count;
    $http({
        url: '/booking',
        method: 'POST',
        data: $scope.movie,
    }).then(function (httpResponse) {   
    console.log('response:', httpResponse);
     console.log("http  response emailid :"+movie.email);
        $location.path( "/bookingDetails" );
        myservice.userDetails(movie.email);
    });
   
  }
}
});