'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute'])
    .config(function($routeProvider, $locationProvider) {
        
        $routeProvider.when('/cities',
            {
                templateUrl: 'templates/CityList.html',
                controller: 'CityListController'
            });
        $routeProvider.when('/event/:eventId',
            {
                templateUrl: 'templates/TheatreDetails.html',
                controller: 'TheatresController',
                resolve: {
                    event: function($route, eventData) {
                        return eventData.getEvent($route.current.pathParams.eventId).$promise;
                    }
                }
            });
        $routeProvider.when('/event/:eventId/:theatreName',
             {
                // templateUrl: 'templates/pvrt.html',
                templateUrl: function(params) {
                return '/templates/' + params.theatreName +".html";
},
                controller: 'TheatresController',
                resolve: {
                    event: function($route, eventData) {
                        return eventData.getEvent($route.current.pathParams.eventId).$promise;
                    }
                }
            });
        $routeProvider.when('/details',
            {
                templateUrl: 'templates/Details.html',
                controller: 'DetailsController',
            });

        $routeProvider.when("/bookingDetails",
        {
            templateUrl:"templates/BookingDetails.html",
            controller:"BookingDetailsController",
        });
        
        $routeProvider.otherwise({redirectTo: '/cities'});

        $locationProvider.html5Mode(true);

    });
