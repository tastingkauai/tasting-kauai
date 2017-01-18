Template.restaurants.rendered = function(){

        //console.log( '@@@ Opening keyboard' );
        //Keyboard.show();
        //$('[hook="restaurants-list"]').find('[hook="load-image"]').each(function () {
        //    TastingKauai.loadCoverImage( $(this), $(this).attr('hook-load-image-data') );
        //});

    window.addEventListener('keyboardDidShow', function () {
        // Describe your logic which will be run each time keyboard is shown.
        //console.log( '@@@ keyboardDidShow' );
    });

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
        // Keyboard.show();

        $(['[hook="search-by-name"]']).val('');
        Session.set('activeFilters',false);
        //
    },
    'click': function(evt, tmpl){
        //console.log('@@@ Click Event');
    },
    /*

     touchcancel
     touchend
     touchenter
     touchleave
     touchmove
     touchstart

     */
    // 'touchcancel': function(evt,tmpl){
    //     //console.log('@@@ touchcancel');
    // },
    // 'touchcancel': function(evt,tmpl){
    //     //console.log('@@@ touchend');
    // },
    // 'touchcancel': function(evt,tmpl){
    //     //console.log('@@@ touchenter');
    // },
    // 'touchcancel': function(evt,tmpl){
    //     //console.log('@@@ touchleave');
    // },
    // 'touchcancel': function(evt,tmpl){
    //     //console.log('@@@ touchmove');
    // },
    // 'touchcancel': function(evt,tmpl){
    //     //console.log('@@@ touchstart');
    // },
    // 'focus': function(evt,tmpl){
    //     //console.log('@@@ focus');
    // },
    // 'blur': function(evt,tmpl){
    //     //console.log('@@@ blur');
    // },
    // 'pointerover': function(evt,tmpl){
    //     //console.log('@@@ pointerover');
    // },
    // 'pointerenter': function(evt,tmpl){
    //     //console.log('@@@ pointerenter');
    // },


    'click [hook="search-by-name"]': function(evt, tmpl){
        // alert('Click Search By Name Event');
        // Keyboard.show();
        var activeFilters = Session.get('activeFilters');
    },
    'change [hook="search-by-name"]': function(evt, tmpl){
        var activeFilters = Session.get('activeFilters');
        if( !activeFilters ){
            activeFilters = {};
        }
        activeFilters['name'] = evt.target.value;
        Session.set('activeFilters',activeFilters);
    },
    'change [hook="search-by-region"]': function(evt, tmpl){
        // alert('Search By Region Event');
        // Keyboard.show();
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
    }
});

Template.restaurants.helpers({
    'activeFilters': function(){
        return Session.get('activeFilters')
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