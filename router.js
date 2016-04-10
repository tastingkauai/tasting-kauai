// ROUTER OPTIONS
Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function(){
        return [
            Meteor.subscribe('restaurant-map'),
            Meteor.subscribe('restaurant-list')
        ];
    }
});

// HOME
Router.route( '/', {
    name:'home',
    data: function(){
        return {
            currentLocation: Geolocation.latLng()
        }
    }
});

// HOW TO
Router.route( '/how-to', {
    name:'howTo'
});

// ABOUT
Router.route( '/about', {
    name:'about'
});

// OVERVIEW
Router.route( '/overview', {
    name:'overview'
});

// LEGEND
Router.route( '/legend', {
    name:'legend'
});

// FOOD BANK
Router.route( '/food-bank', {
    name:'foodBank'
});


// LANGUAGE
Router.route( '/language', {
    name:'language'
});





// FOOD TOURS
Router.route( '/food-tours', {
    name:'foodTours'
});

// FOOD TOUR: NORTH SHORE
Router.route( '/food-tours/north-shore', {
    name:'foodToursNorthShore'
});


// FOOD TOUR: SOUTH SHORE
Router.route( '/food-tours/south-shore', {
    name:'foodToursSouthShore'
});


// FARMERS MARKET
Router.route( '/food-tours/farmers-market', {
    name:'foodToursFarmersMarket'
});

// FOOD TOUR: EAST SIDE
Router.route( '/food-tours/east-side', {
    name:'foodToursEastSide'
});

// FOOD TOUR: SHORT ORDER
Router.route( '/food-tours/short-order', {
    name:'foodToursShortOrder'
});



// CHOOSE
Router.route( '/choose', {
    name:'choose'
});

// MORE
Router.route( '/more', {
    name:'more'
});

// ACKNOWLEDGEMENTS
Router.route( '/acknowledgements', {
    name:'acknowledgements'
});

// GLOSSARY
Router.route( '/glossary', {
    name:'glossary'
});

// DOWNLOAD
Router.route( '/download', {
    name:'download'
});


// NEARBY: MAP
Router.route( '/nearby', {
    name:'nearby',
    data: function(){
        return { hideLoadingScreen: true };
    }
});

// INTRO
Router.route( '/intro', {
    name:'intro'
});

// ADMIN
Router.route( '/admin', {
    name:'admin',
    waitOn: function(){
        return [ Meteor.subscribe('restaurant-list') ];
    },
    data: function(){
        return {
            restaurants: TastingKauai.Collections.Restaurants.find({},{sort:{name:1}})
        }
    }
});

// RESTAURANTS
Router.route( '/restaurants', {
    name:'restaurants'
});

// RESTAURANT VIEW
Router.route( '/restaurant/:_id', {
    name: 'restaurant',
    data: function(){
        return TastingKauai.Collections.Restaurants.findOne(this.params._id);
    },
    waitOn: function(){
        return Meteor.subscribe('restaurant', this.params._id);
    }
});

// RESTAURANT UPDATE
Router.route( '/restaurant/update/:_id', {
    name: 'restaurantUpdate',
    waitOn: function(){
        return [ Meteor.subscribe('restaurant', this.params._id) ];
    },
    data: function(){
        return TastingKauai.Collections.Restaurants.findOne(this.params._id);
    }
});

// RESTAURANT CREATE
Router.route( '/restaurants/create/', {
    name: 'restaurantCreate'
});


var appDownloadRedirect = function(){
    if( !Meteor.isCordova ){
        Router.go('download');
    }
    this.next();
}

Router.onBeforeAction(appDownloadRedirect, {
    except: ['download','admin', 'restaurantUpdate', 'restaurantCreate']
});