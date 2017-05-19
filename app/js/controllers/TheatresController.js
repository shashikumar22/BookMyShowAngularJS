'use strict';

eventsApp.controller('TheatresController', 
    function TheatresController($scope, eventData, $routeParams, $route,myservice) {
        $scope.event = $route.current.locals.event;
        $scope.myservice = myservice; 
        $scope.movie="";
        $scope.movieSelection= function(m) {
        myservice.movie(m);
    }  
    }
);
