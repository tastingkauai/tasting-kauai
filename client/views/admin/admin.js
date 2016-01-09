Template.admin.events({

    'click [hook="reset-database"]': function(evt,tmpl){

        evt.preventDefault();

        var restaurantsInDB = TastingKauai.Collections.Restaurants.find().fetch();
        _.each( restaurantsInDB, function(restaurant){
            TastingKauai.Collections.Restaurants.remove(restaurant._id);
        });

        var restaurantsInFixtures = TastingKauai.fixtures;
        _.each( restaurantsInFixtures, function(restaurant){
            TastingKauai.Collections.Restaurants.insert(restaurant);
        });

    }

});