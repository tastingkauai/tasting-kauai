// ROUTER OPTIONS
Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading'
});

// HOME
Router.route( '/', {
    name:'home'
});

// HOW TO
Router.route( '/how-to', {
    name:'howTo'
});

// HOW TO
Router.route( '/about', {
    name:'about'
});

// HOW TO
Router.route( '/overview', {
    name:'overview'
});

// HOW TO
Router.route( '/legend', {
    name:'legend'
});


// HOW TO
Router.route( '/food-tours', {
    name:'foodTours'
});


// HOW TO
Router.route( '/choose', {
    name:'choose'
});

// HOW TO
Router.route( '/more', {
    name:'more'
});

// DOWNLOAD
Router.route( '/download', {
    name:'download'
});


// NEARBY
Router.route( '/nearby', {
    name:'nearby'
});

// NEARBY
Router.route( '/intro', {
    name:'intro'
});

// DOWNLOAD
Router.route( '/admin', {
    name:'admin',
    data: function(){
        return {
            restaurants: TastingKauai.Collections.Restaurants.find()
        }
    }
});

// DOWNLOAD
Router.route( '/restaurants', {
    name:'restaurants',
    data: function(){
        return {
            restaurants: TastingKauai.Collections.Restaurants.find()
        }
    }
});

// RESTAURANT VIEW
Router.route( '/restaurant/:_id', {
    name: 'restaurant',
    data: function(){
        return TastingKauai.Collections.Restaurants.findOne(this.params._id);
    }
});

// RESTAURANT UPDATE
Router.route( '/restaurant/update/:_id', {
    name: 'restaurantUpdate',
    data: function(){
        return TastingKauai.Collections.Restaurants.findOne(this.params._id);
    }
});