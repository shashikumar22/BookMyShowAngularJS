'use strict';

eventsApp.controller('CityListController',
    function CityListController($scope, eventData) {
        $scope.moviedetails = eventData.getAllEvents();
    }
);