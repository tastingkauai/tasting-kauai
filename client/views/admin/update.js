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

    // form submission handler
    //'submit [hook="form"]': function(event, template){
    //
    //    // Prevent default browser form submit
    //    event.preventDefault();
    //
    //    var id = this._id;
    //    // Get value from form element
    //
    //    var formObject = $(event.target);
    //    var formData = Bureaucrat.getFormData( formObject );
    //
    //    var coffeeShopAttributes = CoffeeApp.getCoffeeShopAttributes( formData );
    //
    //
    //    // Update a cafe
    //    Meteor.call(
    //        "updateCoffeeshop",
    //        id,
    //        coffeeShopAttributes,
    //        function(error, result) {
    //            if( error ){
    //                alert( 'Error' );
    //            }else{
    //                document.getElementById("add-image").value = "";
    //                alert( 'Coffee Shop has been saved.' );
    //            }
    //        }
    //    );
    //
    //},
    //
    //// Delete coffee shop event handler
    //'click [hook="delete-coffeeshop"]': function (event, template) {
    //
    //    // Prevent Default Click Event
    //    event.preventDefault();
    //
    //    //Ask user if they want to delete Coffeeshop
    //    if (confirm('Permanently delete Coffeeshop?')) {
    //
    //        //Delete Coffeeshop from db and redirect to home
    //        Meteor.call(
    //            'removeCoffeeshop',
    //            this._id,
    //            function( error, result){
    //                if( error ){
    //                    alert( error.reason );
    //                }else{
    //                    Router.go('admin');
    //                }
    //            }
    //        );
    //
    //    }
    //}

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