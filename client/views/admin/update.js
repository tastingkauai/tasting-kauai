//CREATE NEW COFFEESHOP ENTRY IN MONGO DB
Template.restaurantUpdate.events({

    // Event handler; load data from google place id search
    'click [hook="load-data"]': function(event, template){
        event.preventDefault();
        var googlePlaceID = template.data.googlePlaceID;
        var restaurantID = template.data._id;
        if( confirm('this will overwrite some data for this listing') ) {
            TastingKauai.loadPlaceData(googlePlaceID, restaurantID);
        }
    },

    'submit [hook="form"]': function(evt, tmpl){

        // Prevent default browser form submit
        evt.preventDefault();

        var id = this._id;
        // Get value from form element

        var formObject = $(event.target);
        var formData = Bureaucrat.getFormData( formObject );

        if( formData.images ) {
            formData.images = formData.images.filter(Boolean);
        }else{
            formData.images = [];
        }

        var updateResult = TastingKauai.Collections.Restaurants.update(
            {
                _id: tmpl.data._id,
            },
            {
                $set: formData
            }

        );

        alert( updateResult );

    },

    // Delete coffee shop event handler
    'click [hook="delete-restaurant"]': function (evt, tmpl) {

        // Prevent Default Click Event
        evt.preventDefault();

        //Ask user if they want to delete Coffeeshop
        if (confirm('Permanently delete Coffeeshop?')) {

            var delResult = TastingKauai.Collections.Restaurants.remove({_id:this._id});
            if( delResult ){
                Router.go('admin');
            }else{
                alert('delete fail');
            }

        }
    }

});

// Helper for map
// The map is needed for the place ID search
// Map is hidden and not used on the UI
Template.restaurantUpdate.helpers({
    restaurantMapOptions: function () {
        // Make sure the maps API has loadeds
        if (GoogleMaps.loaded()) {
            // Map initialization options
            return {
                center: new google.maps.LatLng(22.0526364,-159.5258102),
                zoom: 10
            };
        }
    }
});