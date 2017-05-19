'use strict';

eventsApp.controller('BookingDetailsController',
    function BookingDetailsController($scope, bookingData) {
        $scope.bookingDetails = bookingData.getBooking();
        // bookingData.getBooking().promise.then(
        	// function(event){$scope.event=event; console.log(event);},
        	// function(response){$console.log(response);});   
});