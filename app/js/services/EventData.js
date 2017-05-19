eventsApp.factory('eventData', function($resource) {
    var resource = $resource('/data/event/:id', {id:'@id'});
	 var resource2 = $resource('/data/bookings/:id', {id:'@id'});
    return {
        getEvent: function(eventId) {
            return resource.get({id:eventId});
        },
        save: function(event) {
            event.id=event.email;
            return resource2.save(event);
        },
        getAllEvents: function() {
            return resource.query();
        },
    };
});



