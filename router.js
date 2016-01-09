// ROUTER OPTIONS
Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading'
});

// HOME
Router.route( '/', {
    name:'home'
});

// DOWNLOAD
Router.route( '/download', {
    name:'download'
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