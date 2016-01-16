// Publish Restaurants collection
Meteor.publish('restaurants' , function(){
    return TastingKauai.Collections.Restaurants.find();
});



// Publish Signle Restaurant
//Meteor.publish('restaurant' , function(_id){
//    return TastingKauai.Collections.Restaurants.find({_id:_id});
//});