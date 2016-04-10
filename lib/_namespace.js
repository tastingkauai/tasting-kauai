TastingKauai = {};
TastingKauai.Collections = {};

Meteor.startup(function(){
    if( Meteor.isClient ){
        GoogleMaps.load({ v: '3', key: 'AIzaSyABC8nj-RR1eBRFNjj36lyXhWb0ArnGUOs', libraries: 'places'});
    }
});

TastingKauai.eastSideZipCodes = [ "96746", "96703", "96751" ];
TastingKauai.westSideZipCodes = [ "96705", "96716", "96747", "96752", "96796", "96769" ];
TastingKauai.northShoreZipCodes = [ "96722", "96754", "96714" ];
TastingKauai.southShoreZipCodes = [ "96715", "96741", "96756", "96765" ];
TastingKauai.centralZipCodes = [ "96766" ];

TastingKauai.getQueryArgs = function( activeFilters ){
    var args = [];

    if( activeFilters ){
        if( activeFilters.favorites ){
            args.push( {
                'favorites': true
            } );
        }
        if( activeFilters.breakfast ){
            args.push({
                'breakfast': true
            });
        }
        if( activeFilters.lunch ){
            args.push( {
                'lunch': true
            });
        }
        if( activeFilters.dinner ){
            args.push( {
                'dinner': true
            });
        }

        var priceArgs = []
        if( activeFilters.dollar1 ){
            priceArgs.push( {
                'priceRange': "1"
            });
        }
        if( activeFilters.dollar2 ){
            priceArgs.push( {
                'priceRange': "2"
            });
        }
        if( activeFilters.dollar3 ){
            priceArgs.push( {
                'priceRange': "3"
            });
        }
        if( priceArgs.length > 0 ){
            args.push({$or:priceArgs});
        }

        var slippahArgs = []
        if( activeFilters.slippah1 ){
            slippahArgs.push( {
                'slippahCode': "1"
            });
        }
        if( activeFilters.slippah2 ){
            slippahArgs.push( {
                'slippahCode': "2"
            });
        }if( activeFilters.slippah3 ){
            slippahArgs.push( {
                'slippahCode': "3"
            });
        }
        if( slippahArgs.length > 0 ){
            args.push({$or:slippahArgs});
        }

        if( activeFilters.vegetarian ){
            args.push( {
                'vegetarian': true
            } );
        }
        if( activeFilters.vegan ){
            args.push( {
                'vegan': true
            } );
        }
        if( activeFilters.glutenFree ){
            args.push( {
                'glutenFree': true
            } );
        }

        // OTHER FILTERS
        if( activeFilters.wifi ){
            args.push( {
                'wifi': true
            } );
        }
        if( activeFilters.foodTruck ){
            args.push( {
                'foodTruck': true
            } );
        }
        if( activeFilters.farmersMarket ){
            args.push( {
                'farmersMarket': true
            } );
        }
        if( activeFilters.haleAinaAwards ){
            args.push( {
                'haleAinaAwards': true
            } );
        }
        if( activeFilters.hawaiiRegionalCuisine ){
            args.push( {
                'hawaiiRegionalCuisine': true
            } );
        }
        if( activeFilters.reservations ){
            args.push( {
                'reservations': true
            } );
        }
        if( activeFilters.name && activeFilters.name != '' ){
            //alert(activeFilters.name);
            var searchString = activeFilters.name;
            //alert(searchString);
            RegExp.escape = function(s) {
                return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
            };
            args.push(
                {name: { $regex: RegExp.escape(searchString), $options: 'i' } }
            )
        }
        if( activeFilters.region ){
            if( activeFilters.region == 'north' ) {
                args.push(
                    {zip: {$in: TastingKauai.northShoreZipCodes}}
                )
            }else if( activeFilters.region == 'east' ) {
                args.push(
                    {zip: {$in: TastingKauai.eastSideZipCodes}}
                )
            }else if( activeFilters.region == 'central' ) {
                args.push(
                    {zip: {$in: TastingKauai.centralZipCodes}}
                )
            }else if( activeFilters.region == 'south' ) {
                args.push(
                    {zip: {$in: TastingKauai.southShoreZipCodes}}
                )
            }else if( activeFilters.region == 'west' ) {
                args.push(
                    {zip: {$in: TastingKauai.westSideZipCodes}}
                )
            }
        }

    }

    return args;
}

TastingKauai.loadCoverImage = function( coverDOM, coverURL ){
    if( Meteor.isClient ){
        var loadCI = function() {
            coverDOM.css("background-image", "url("+coverURL+")");
        }
        setTimeout(loadCI,750);
    }
}

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