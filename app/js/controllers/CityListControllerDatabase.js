'use strict';

eventsApp.controller('CityListControllerDatabase',
    function CityListControllerDatabase($scope,$http,$routeParams, $route){
    $scope.cityName = $route.current.locals.city;
   
    $http.get("/cities").success(function(res){
    	console.log("cities :"+res);
    $scope.cities=res;
   });

 // $http.get("/Theaters").success(function(res){
 //    	console.log("theater :"+res);
 //    $scope.cities=res;
 //   });

     $scope.theaterName=$route.current.locals.theater;
  

});