Template.restaurants.rendered = function(){


        //$('[hook="restaurants-list"]').find('[hook="load-image"]').each(function () {
        //    TastingKauai.loadCoverImage( $(this), $(this).attr('hook-load-image-data') );
        //});

}

Template.restaurants.events({
    'click [hook="toggle-filter"]': function(evt,tmpl){
        evt.preventDefault();

        var filter = $(evt.currentTarget).attr('hook-filter');
        var activeFilters = Session.get('activeFilters');
        if( !activeFilters ){
            activeFilters = {};
        }
        if( activeFilters[filter] ){
            activeFilters[filter] = false;
        }else{
            activeFilters[filter] = true;
        }
        Session.set('activeFilters',activeFilters);
        //$('[hook="restaurants-list"]').find('[hook="load-image"]').each(function () {
        //    TastingKauai.loadCoverImage( $(this), $(this).attr('hook-load-image-data') );
        //});

    },
    'click [hook="reset-filters"]': function(evt,tmpl){
        evt.preventDefault();
        $(['[hook="search-by-name"]']).val('');
        Session.set('activeFilters',false);
        //$('[hook="restaurants-list"]').find('[hook="load-image"]').each(function () {
        //    TastingKauai.loadCoverImage( $(this), $(this).attr('hook-load-image-data') );
        //});
    },
    'change [hook="search-by-name"]': function(evt, tmpl){
        var activeFilters = Session.get('activeFilters');
        if( !activeFilters ){
            activeFilters = {};
        }
        activeFilters['name'] = evt.target.value;
        Session.set('activeFilters',activeFilters);
        //console.log( '@@@ name set to ' + evt.target.value );
    },
    'change [hook="search-by-region"]': function(evt, tmpl){
        var activeFilters = Session.get('activeFilters');
        if( !activeFilters ){
            activeFilters = {};
        }
        //alert( evt.target.value );
        if( evt.target.value == 'all' ){
            Session.set('activeFilters',activeFilters);
        }else{
            activeFilters['region'] = evt.target.value;
            Session.set('activeFilters',activeFilters);
        }
        //activeFilters['region'] = evt.target.value;
        //Session.set('activeFilters',activeFilters);
        //console.log( '@@@ ???region set to ' + evt.target.value );
        //console.log( '@@@ !!!!region set to ' + $(evt.target).val() );
    }
});

Template.restaurants.helpers({
    'activeFilters': function(){
        return Session.get('activeFilters');
    },
    'restaurantsToDisplay': function(){
        var activeFilters = Session.get('activeFilters');
        var args = [];
        args = TastingKauai.getQueryArgs( activeFilters );
        if( args.length >= 1 ){
            return TastingKauai.Collections.Restaurants.find({ '$and': args },{sort:{name:1}});
        }else{
            return TastingKauai.Collections.Restaurants.find({},{sort:{name:1}});
        }
    },

    'foundRestaurants': function(){
        var activeFilters = Session.get('activeFilters');
        var args = [];
        args = TastingKauai.getQueryArgs( activeFilters );
        if( args.length >= 1 ){
            return TastingKauai.Collections.Restaurants.find({ '$and': args }).count() > 0 ? true : false;
        }else{
            return TastingKauai.Collections.Restaurants.find().count() > 0 ? true : false;
        }
    }

});