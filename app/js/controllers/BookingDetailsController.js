'use strict';

eventsApp.controller('BookingDetailsController',
    function BookingDetailsController($scope, bookingData) {
        $scope.bookingDetails = bookingData.getBooking();  
});