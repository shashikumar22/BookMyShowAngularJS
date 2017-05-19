"use strict";
eventsApp.controller("DetailsController",
	function DetailsController($scope,myservice,eventData){
         $scope.myservice = myservice;
		$scope.count=0;
		$scope.increment=function(){
			$scope.count++;
		}
		$scope.decrement=function(){
			if($scope.count==0){
			$scope.count--;
		}
		}
			  $scope.movie = {};
		  // $scope.moviename=myservice.mn;
        $scope.saveEvent = function(movie, newDetailsForm) {
            if(newDetailsForm.$valid) {
			      $scope.movie.movieName=myservice.mn;
		        $scope.movie.ticketCount=$scope.count;
                eventData.save(movie)
                    .$promise
                    .then(function(response) { console.log('success', response)})
                    .catch(function(response) { console.log('failure', response)});
            }
              $scope.message="sucess"+"\n"+"MovieName   :"+myservice.mn
                           +"\n"+"TicketCount :"+$scope.count
                           +"\n"+"MovieTime   :"+movie.selectedTime;
              alert($scope.message);


        };



      $scope.userId= function(u) {
        myservice.userDetails(u);
    };
   
   
});