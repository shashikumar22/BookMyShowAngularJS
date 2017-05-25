'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute'])
    .config(function($routeProvider, $locationProvider) {
        
        // $routeProvider.when('/cities',
        //     {
        //         templateUrl: 'templates/CityList.html',
        //         controller: 'CityListController'
        //     });

        $routeProvider.when('/cities',
            {
                templateUrl: 'templates/CityListDatabase.html',
                controller: 'CityListControllerDatabase'
            });
        // $routeProvider.when('/event/:eventId',
        //     {
        //         templateUrl: 'templates/TheatreDetails.html',
        //         controller: 'TheatresController',
        //         resolve: {
        //             event: function($route, eventData) {
        //                 return eventData.getEvent($route.current.pathParams.eventId).$promise;
        //             }
        //         }
        //     });
       $routeProvider.when('/city/:cityId',
            {
                templateUrl: 'templates/TheatreDetailsDatabase.html',
                controller: 'TheaterListController',
                resolve: {
                    city: function($route) {

                        return $route.current.pathParams.cityId;
                    }
                }
            });
//         $routeProvider.when('/event/:eventId/:theatreName',
//              {
//                 // templateUrl: 'templates/pvrt.html',
//                 templateUrl: function(params) {
//                 return '/templates/' + params.theatreName +".html";
// },
//                 controller: 'TheatresController',
//                 resolve: {
//                     event: function($route, eventData) {
//                         return eventData.getEvent($route.current.pathParams.eventId).$promise;
//                     }
//                 }
//             });
        $routeProvider.when('/event/:eventId/:theaterName',
             {
                // templateUrl: 'templates/pvrt.html',
                templateUrl:'templates/MoviesDetailsDatabase.html',
                controller: 'TheatresDatabaseController',
                resolve: {
                    theater: function($route) {
                        console.log($route.current.pathParams);
                       return $route.current.pathParams.theaterName;
                    },
                     cityName: function($route) {
                        console.log($route.current.pathParams);
                       return $route.current.pathParams.eventId;
                    }
                }
                
            });
        // $routeProvider.when('/details',
        //     {
        //         templateUrl: 'templates/Details.html',
        //         controller: 'DetailsController',
        //     });
         $routeProvider.when('/details',
            {
                templateUrl: 'templates/DetailsDatabase.html',
                controller: 'DetailsControllerDatabase',
            });

        // $routeProvider.when("/bookingDetails",
        // {
        //     templateUrl:"templates/BookingDetails.html",
        //     controller:"BookingDetailsController",
        // });
      $routeProvider.when("/bookingDetails",
        {
            templateUrl:"templates/BookingDetailsDatabase.html",
            controller:'BookingDetailsDatabaseController',

        });
        
        $routeProvider.otherwise({redirectTo: '/cities'});

        $locationProvider.html5Mode(true);

    });
