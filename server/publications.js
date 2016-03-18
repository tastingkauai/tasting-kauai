// Publish Single Restaurant
Meteor.publish('restaurant' , function(_id){
    return TastingKauai.Collections.Restaurants.find({_id:_id});
});


// Publish Restaurants Collection for List
Meteor.publish('restaurant-list' , function() {
    return TastingKauai.Collections.Restaurants.find({}, {
        fields: {
            'description': 0,
            'googlePlaceID': 0,
            'lat': 0,
            'lng': 0,
            'address': 0,
            'phone': 0,
            'website': 0,
            'images': 0
        }
    });
});

// Publish Restaurant Locations for Map
Meteor.publish('restaurant-map' , function() {
    return TastingKauai.Collections.Restaurants.find({}, {
        fields: {
            'name': 1,
            'byline': 1,
            'coverPhoto': 1,
            'googlePlaceID': 1,
            'lat': 1,
            'lng': 1,
            'address': 1
        }
    });
});