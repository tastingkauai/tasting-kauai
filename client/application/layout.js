// Segue helpers and events for native-feeling UI
Template.layout.events(Segue.events);
Template.layout.helpers(Segue.helpers);
//Template.layoutNoLoading.events(Segue.events);
//Template.layoutNoLoading.helpers(Segue.helpers);

// Dispatcher events to open links in external native apps
Template.layout.events(Dispatcher.events);
//Template.layoutNoLoading.events(Dispatcher.events);

// Helper to check if user is on browser or mobile
Template.layout.helpers({
    isCordova: function(){
        return Meteor.isCordova;
    }
});
//Template.layoutNoLoading.helpers({
//    isCordova: function(){
//        return Meteor.isCordova;
//    }
//});

Template.layout.events({
    'click [hook="directions"]': function(evt){
        evt.preventDefault();
        var destination = $(evt.target).attr('hook-data-destination');
        plugin.google.maps.external.launchNavigation({
            from: 'Current Location',
            to: destination
        });
    }
//    'click [hook="dispatch"]': function(evt){
//        evt.preventDefault();
//        var destination = $(evt.currentTarget).attr('href');
//        window.open(destination,'_system');
//    }
});



// Template created
Template.layout.created = function(){
    // track whether the user is currently dragging the screen
    this.isDragging = false;
}
// Template created
//Template.layoutNoLoading.created = function(){
//    // track whether the user is currently dragging the screen
//    this.isDragging = false;
//}

// Template events
//Template.layoutNoLoading.events({
//
//    // tragging screen scroll with touchmove
//    'touchmove': function(evt,tmpl) {
//        if( TastingKauai.isAndroid() ) {
//            tmpl.isDragging = true;
//        }
//    },
//
//    // Convert touchend into click
//    'touchend': function(evt,tmpl){
//        if( TastingKauai.isAndroid() ) {
//            if (!tmpl.isDragging) {
//                $(evt.currentTarget).click();
//            }
//            tmpl.isDragging = false;
//        }
//    }
//
//});

// Template events
Template.layout.events({

    // tragging screen scroll with touchmove
    'touchmove': function(evt,tmpl) {
        if( TastingKauai.isAndroid() ) {
            tmpl.isDragging = true;
        }
    },

    // Convert touchend into click
    'touchend': function(evt,tmpl){
        if( TastingKauai.isAndroid() ) {
            if (!tmpl.isDragging) {
                $(evt.currentTarget).click();
            }
            tmpl.isDragging = false;
        }
    }

});