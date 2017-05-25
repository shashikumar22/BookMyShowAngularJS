'use strict';

eventsApp.controller('TheaterListController', 
    function TheaterListController($scope,$http,$routeParams, $route,myservice) {

    $scope.myservice = myservice; 

    $scope.cityId = $route.current.locals.city;
    console.log("ehch "+$scope.cityId);
  
    $http.get("/Theaters").success(function(res){
      console.log("theaters :"+res);
    $scope.Theaters=res;
    });

     
           
    
});