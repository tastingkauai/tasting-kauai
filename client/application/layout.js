// Segue helpers and events for native-feeling UI
Template.layout.events(Segue.events);
Template.layout.helpers(Segue.helpers);

// Helper to check if user is on browser or mobile
Template.layout.helpers({
    isCordova: function(){
        return Meteor.isCordova;
    }
});