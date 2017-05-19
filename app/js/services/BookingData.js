eventsApp.factory("bookingData",function($resource,myservice){
	var identity=myservice.un+".json";
	return{
		getBooking:function(){
			return $resource("/data/bookings/:id",{id:"@id"}).get({id:""+identity});
		}
	}
});