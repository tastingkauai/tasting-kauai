// Segue helpers and events for native-feeling UI
Template.layout.events(Segue.events);
Template.layout.helpers(Segue.helpers);

// Helper to check if user is on browser or mobile
Template.layout.helpers({
    isCordova: function(){
        return Meteor.isCordova;
    }
});

Template.layout.events({
    'click [hook="directions"]': function(evt){
        evt.preventDefault();
        var destination = $(evt.target).attr('hook-data-destination');
        plugin.google.maps.external.launchNavigation({
            from: 'Current Location',
            to: destination
        });
    }
});