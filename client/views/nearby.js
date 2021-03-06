Template.nearby.events({
    'click [hook="center-on-kauai"]': function(evt){
        evt.preventDefault();
        Cartographer.centerMap( 21.971167, -159.356483 );
        var newCenter = new plugin.google.maps.LatLng( 21.971167, -159.356483 );
        Session.set('center', newCenter );
    },
    'click [hook="clear-selection"]': function(evt){
        evt.preventDefault();
        Session.set( 'currentSelection', false );
    }
});

Template.nearby.rendered = function(){


    if( this.data.hideLoadingScreen ){
        $('.placeholder').hide();
    }

    Cartographer.onMarkerClick(function(marker){
        var restaurant = TastingKauai.Collections.Restaurants.findOne({_id:marker.get('_id')});
        Session.set('currentSelection',restaurant);
    });

    // GIVE THE GEOLOCATION 2 SECONDS TO LOAD
    // THEN LOAD DEFAULT LOCATION IF WE HAVE NOTHING
    var defaultCenter = function(){

        if( !Session.get('center') ){
            Session.set('center', new plugin.google.maps.LatLng( 21.971167, -159.356483 ) );
        }
    }
    setTimeout( defaultCenter, 2500 );

}

Template.nearby.helpers({
    markers: function(){
        var restaurants = TastingKauai.Collections.Restaurants.find().fetch();
        var curSel = Session.get('currentSelection');
        var markers = [];
        _.each( restaurants, function( restaurant ) {
            var iconURL = ( curSel && curSel._id == restaurant._id ) ? 'http://app.tastingkauai.com/img/marker-active.png' : 'http://app.tastingkauai.com/img/marker-regular.png';
            var selected = ( curSel && curSel._id == restaurant._id ) ? true : false;
            if( restaurant.lat && restaurant.lng ) {
                markers.push({
                    _id: restaurant._id,
                    latitude: restaurant.lat,
                    longitude: restaurant.lng,
                    icon: iconURL,
                    selected: selected
                });
            }
        });
        return markers;
    },
    center: function(){
        if (Session.get('currentSelection')) {
            var currentSelection = Session.get('currentSelection');
            Session.set('center', new plugin.google.maps.LatLng(currentSelection.lat, currentSelection.lng));
        }else{
            Session.set('center', Geolocation.latLng());
        }
        return Session.get('center');
    },
    mapOptions: function(){
        var mapOptions = {
            'backgroundColor': 'white',
            'mapType': plugin.google.maps.MapTypeId.ROADMAP,
            'controls': {
                'compass': false,
                'myLocationButton': true,
                'indoorPicker': false,
                'zoom': true
            },
            'gestures': {
                'scroll': true,
                'tilt': false,
                'rotate': false,
                'zoom': true
            },
            'camera': {
                //'latLng': latLngObject,
                'tilt': 0,
                'zoom': 13,
                'bearing': 0
            }
        };
        return mapOptions;
    },
    currentSelection: function(){
        return Session.get( 'currentSelection' );
    },
    currentRestaurant: function(){
        if( Session.get( 'currentSelection' ) ){
            var curSel = Session.get( 'currentSelection' );
            return TastingKauai.Collections.Restaurants.findOne(curSel._id);
        }
    }
});

