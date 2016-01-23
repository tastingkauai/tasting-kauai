Template.restaurants.rendered = function(){


        $('[hook="restaurants-list"]').find('[hook="load-image"]').each(function () {
            TastingKauai.loadCoverImage( $(this), $(this).attr('hook-load-image-data') );
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
        $('[hook="restaurants-list"]').find('[hook="load-image"]').each(function () {
            TastingKauai.loadCoverImage( $(this), $(this).attr('hook-load-image-data') );
        });

    },
    'click [hook="reset-filters"]': function(evt,tmpl){
        evt.preventDefault();
        Session.set('activeFilters',false);
        $('[hook="restaurants-list"]').find('[hook="load-image"]').each(function () {
            TastingKauai.loadCoverImage( $(this), $(this).attr('hook-load-image-data') );
        });
    }
});

Template.restaurants.helpers({
    'activeFilters': function(){
        return Session.get('activeFilters');
    },
    'restaurantsToDisplay': function(){
        var activeFilters = Session.get('activeFilters');
        var args = [];
        if( activeFilters ){
            if( activeFilters.favorites ){
                args.push( {
                    'favorites': true
                } );
            }
            if( activeFilters.breakfast ){
                args.push({
                    'breakfast': true
                });
            }
            if( activeFilters.lunch ){
                args.push( {
                    'lunch': true
                });
            }
            if( activeFilters.dinner ){
                args.push( {
                    'dinner': true
                });
            }

            var priceArgs = []
            if( activeFilters.dollar1 ){
                priceArgs.push( {
                    'priceRange': 1
                });
            }
            if( activeFilters.dollar2 ){
                priceArgs.push( {
                    'priceRange': 2
                });
            }
            if( activeFilters.dollar3 ){
                priceArgs.push( {
                    'priceRange': 3
                });
            }
            if( priceArgs.length > 0 ){
                args.push({$or:priceArgs});
            }

            var slippahArgs = []
            if( activeFilters.slippah1 ){
                slippahArgs.push( {
                    'slippahCode': 1
                });
            }
            if( activeFilters.slippah2 ){
                slippahArgs.push( {
                    'slippahCode': 2
                });
            }if( activeFilters.slippah3 ){
                slippahArgs.push( {
                    'slippahCode': 3
                });
            }
            if( slippahArgs.length > 0 ){
                args.push({$or:slippahArgs});
            }

            if( activeFilters.vegetarian ){
                args.push( {
                    'vegetarian': true
                } );
            }
            if( activeFilters.vegan ){
                args.push( {
                    'vegan': true
                } );
            }
            if( activeFilters.glutenFree ){
                args.push( {
                    'glutenFree': true
                } );
            }

            // OTHER FILTERS
            if( activeFilters.wifi ){
                args.push( {
                    'wifi': true
                } );
            }
            if( activeFilters.foodTruck ){
                args.push( {
                    'foodTruck': true
                } );
            }
            if( activeFilters.farmersMarket ){
                args.push( {
                    'farmersMarket': true
                } );
            }
            if( activeFilters.haleAinaAwards ){
                args.push( {
                    'haleAinaAwards': true
                } );
            }
            if( activeFilters.hawaiiRegionalCuisine ){
                args.push( {
                    'hawaiiRegionalCuisine': true
                } );
            }


        }
        if( args.length >= 1 ){
            return TastingKauai.Collections.Restaurants.find({ '$and': args });
        }else{
            return TastingKauai.Collections.Restaurants.find();
        }
    },

    'foundRestaurants': function(){
        var activeFilters = Session.get('activeFilters');
        var args = [];
        if( activeFilters ){
            if( activeFilters.favorites ){
                args.push( {
                    'icons.favorites': true
                } );
            }
            if( activeFilters.breakfast ){
                args.push({
                    'icons.foodService.breakfast': true
                });
            }
            if( activeFilters.lunch ){
                args.push( {
                    'icons.foodService.lunch': true
                });
            }
            if( activeFilters.dinner ){
                args.push( {
                    'icons.foodService.dinner': true
                });
            }

            var priceArgs = []
            if( activeFilters.dollar1 ){
                priceArgs.push( {
                    'icons.priceRange': 1
                });
            }
            if( activeFilters.dollar2 ){
                priceArgs.push( {
                    'icons.priceRange': 2
                });
            }
            if( activeFilters.dollar3 ){
                priceArgs.push( {
                    'icons.priceRange': 3
                });
            }
            if( priceArgs.length > 0 ){
                args.push({$or:priceArgs});
            }

            var slippahArgs = []
            if( activeFilters.slippah1 ){
                slippahArgs.push( {
                    'icons.slippahCode': 1
                });
            }
            if( activeFilters.slippah2 ){
                slippahArgs.push( {
                    'icons.slippahCode': 2
                });
            }if( activeFilters.slippah3 ){
                slippahArgs.push( {
                    'icons.slippahCode': 3
                });
            }
            if( slippahArgs.length > 0 ){
                args.push({$or:slippahArgs});
            }

            if( activeFilters.vegetarian ){
                args.push( {
                    'icons.alternativeDiets.vegetarian': true
                } );
            }
            if( activeFilters.vegan ){
                args.push( {
                    'icons.alternativeDiets.vegan': true
                } );
            }
            if( activeFilters.glutenFree ){
                args.push( {
                    'icons.alternativeDiets.glutenFree': true
                } );
            }

            // OTHER FILTERS
            if( activeFilters.wifi ){
                args.push( {
                    'icons.wifi': true
                } );
            }
            if( activeFilters.foodTruck ){
                args.push( {
                    'icons.foodTruck': true
                } );
            }
            if( activeFilters.farmersMarket ){
                args.push( {
                    'icons.farmersMarket': true
                } );
            }
            if( activeFilters.haleAinaAwards ){
                args.push( {
                    'icons.haleAinaAwards': true
                } );
            }
            if( activeFilters.hawaiiRegionalCuisine ){
                args.push( {
                    'icons.hawaiiRegionalCuisine': true
                } );
            }


        }
        if( args.length >= 1 ){
            return TastingKauai.Collections.Restaurants.find({ '$and': args }).count() > 0 ? true : false;
        }else{
            return TastingKauai.Collections.Restaurants.find().count() > 0 ? true : false;
        }
    }

});