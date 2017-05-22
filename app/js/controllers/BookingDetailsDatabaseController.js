'use strict';

eventsApp.controller('BookingDetailsDatabaseController',
    function BookingDetailsDatabaseController($scope,$http){
    console.log("Hello World");
    console.log("Getting data from server");
    $http.get('/bookingdetail').success(function(response){
        console.log("I got the data I requested");
        $scope.bookingList = response;
         console.log($scope.bookingList);
    });
});