Template.restaurant.events({
    'click [hook="map-view"]': function(evt,tmpl){
        Session.set('currentSelection',tmpl.data);
    },
    'click [hook="toggle-hours"]': function(evt,tmpl){
        evt.preventDefault();
        // Toggle show/hide of hours, hidden by default w/ CSS
        $( "#hours-box" ).slideToggle( 'slow' );
        // Toggle arrow to show switch between up or down
        $( "#toggle-arrow").toggleClass('icon-down icon-up');

    }
});

Template.restaurant.helpers({
    restaurantMapOptions: function () {
        // Make sure the maps API has loadeds
        if (GoogleMaps.loaded()) {
            // Map initialization options
            return {
                center: new google.maps.LatLng(22.0526364,-159.5258102),
                zoom: 10
            };
        }
    },
    openNow: function(){
        return Session.get('openNow');
    },
    showHours: function() {
        if ( Session.get('openNow') ) {
            return true;
        } else {
            return false;
        }
    }
});

Template.restaurant.rendered = function(){
    var tmpl = this;
    if( GoogleMaps.loaded() ) {
        var service = new google.maps.places.PlacesService(GoogleMaps.maps.restaurantMap.instance);
        // We will request coffeeshop details using the Google Place ID
        var request = {
            placeId: tmpl.data.googlePlaceID
        };
        service.getDetails(request, function (place, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {

                var openNow;
                if (place && place.opening_hours) {
                    openNow = place.opening_hours.open_now ? 'OPEN NOW' : 'CLOSED';
                } else {
                    // No hours available so set openNow to null
                    openNow = null;
                }
                Session.set('openNow', openNow);
            }
        });
    }
}