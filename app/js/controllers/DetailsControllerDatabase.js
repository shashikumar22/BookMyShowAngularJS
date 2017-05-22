"use strict";
eventsApp.controller('DetailsControllerDatabase',
//  function($scope,$http) {
//  $scope.data = {};
// $scope.submit= function(){
//     console.log('clicked submit');
//     $http({
//         url: 'http://localhost:8000/blah',
//         method: 'POST',
//         data: $scope.data
//     }).then(function (httpResponse) {
//         console.log('response:', httpResponse);
//     })
//    }
//  });


function DetailsController($scope,eventData,$http,myservice){
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
      // $scope.moviename=myservice.mn;
        $scope.saveEvent = function(movie, newDetailsForm) {
            if(newDetailsForm.$valid) {
            $scope.movie.movieName=myservice.mn;
            $scope.movie.ticketCount=$scope.count;
                eventData.save(movie)
                    .$promise
                    .then(function(response) { console.log('success', response)})
                    .catch(function(response) { console.log('failure', response)});
            }
            console.log('clicked submit');
    $http({
        url: 'http://localhost:8000/booking',
        method: 'POST',
        data: $scope.movie,
    }).then(function (httpResponse) {
        console.log('response:', httpResponse);
    });
              $scope.message="sucess"+"\n"+"MovieName   :"+myservice.mn
                           +"\n"+"TicketCount :"+$scope.count
                           +"\n"+"MovieTime   :"+movie.selectedTime;
              alert($scope.message);


        };   
});