'use strict';

eventsApp.controller('TheatresDatabaseController', 
    function TheatresDatabaseController($scope,$http,$routeParams, $route,myservice) {

    $scope.myservice = myservice; 
  
    $http.get("/movies").success(function(res){
      console.log(res);
    $scope.movies=res;
    });


     $scope.theaterId=$route.current.locals.theater;
     console.log("theatre id"+$scope.theaterId);

      $scope.movieSelection= function(m) {
      	console.log("efe"+m);
        myservice.movie(m);
    } 
     
           
    }
);
