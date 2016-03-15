// ROUTER OPTIONS
Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function(){
        return [ Meteor.subscribe('restaurants') ];
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
Router.route( '/food-bank', {
    name:'foodBank'
});


// HOW TO
Router.route( '/language', {
    name:'language'
});





// HOW TO
Router.route( '/food-tours', {
    name:'foodTours'
});

// HOW TO
Router.route( '/food-tours/north-shore', {
    name:'foodToursNorthShore'
});


// HOW TO
Router.route( '/food-tours/south-shore', {
    name:'foodToursSouthShore'
});


// HOW TO
Router.route( '/food-tours/farmers-market', {
    name:'foodToursFarmersMarket'
});

// HOW TO
Router.route( '/food-tours/east-side', {
    name:'foodToursEastSide'
});

// HOW TO
Router.route( '/food-tours/short-order', {
    name:'foodToursShortOrder'
});



// HOW TO
Router.route( '/choose', {
    name:'choose'
});

// HOW TO
Router.route( '/more', {
    name:'more'
});

// HOW TO
Router.route( '/acknowledgements', {
    name:'acknowledgements'
});

// HOW TO
Router.route( '/glossary', {
    name:'glossary'
});

// DOWNLOAD
Router.route( '/download', {
    name:'download'
});


// NEARBY
Router.route( '/nearby', {
    name:'nearby',
    //layoutTemplate: 'layoutNoLoading'
    data: function(){
        return { hideLoadingScreen: true };
    }
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
            restaurants: TastingKauai.Collections.Restaurants.find({},{sort:{name:1}})
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