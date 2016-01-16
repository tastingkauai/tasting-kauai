TastingKauai = {};
TastingKauai.Collections = {};

Meteor.startup(function(){
    if( Meteor.isClient ){
        GoogleMaps.load({ v: '3', key: 'AIzaSyABC8nj-RR1eBRFNjj36lyXhWb0ArnGUOs', libraries: 'places'});
    }
});

/**
 * Check if user agent is Android
 * @returns {boolean}
 */
TastingKauai.isAndroid = function(){
    if( Meteor.isClient ){
        return navigator.userAgent.toLowerCase().indexOf("android") > -1;
    }
}

/**
 * Check if user agent is iOS
 * @returns {boolean}
 */
TastingKauai.isIOS = function(){
    if( Meteor.isClient ){
        return ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );
    }
}


TastingKauai.loadPlaceData = function(googlePlaceID, coffeeshopID) {
    if (Meteor.userId()){
        var service = new google.maps.places.PlacesService(GoogleMaps.maps.restaurantMap.instance);
        // We will request coffeeshop details using the Google Place ID
        var request = {
            placeId: googlePlaceID
        };

        // Get details about the coffeeshop and update database

        service.getDetails(request, function (place, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                var hours;
                var address;
                if (place && place.opening_hours && place.opening_hours.weekday_text) {
                    hours = place.opening_hours.weekday_text;
                } else {
                    hours = "";
                }

                if (place && place.formatted_address) {
                    address = place.formatted_address;
                }else {
                    address = "";
                }
                var updatedData = {
                    lat: place.geometry.location.lat(),
                    lng: place.geometry.location.lng()
                };
                if (hours) {
                    updatedData.hours = hours;
                }

                if (address){
                    updatedData.address = address;
                }

                var result = TastingKauai.Collections.Restaurants.update(
                    { _id: coffeeshopID },
                    { $set: updatedData }
                );

                if (!result) {
                    alert('error');
                } else {
                    alert('data loaded from google and saved in db');
                }
                //Meteor.call(
                //    'updateCoffeeshop',
                //    coffeeshopID,
                //    updatedData,
                //    function (error, result) {
                //        if (error) {
                //            alert(error.reason);
                //        } else {
                //            alert('data loaded from google and saved in db');
                //        }
                //    }
                //)
            } else {
                alert('google places details request failed');

            }
        });
    } else {
        alert('must be logged in')
    }

}