Template.header.helpers({
    back: function(){
        var history = Segue.history.get();
        if( history.length > 0 ){
            return true;
        }else{
            return false;
        }
    },
    numberOfActiveFilters: function(){
        var activeFilters = Session.get('activeFilters');
        var count = 0;
        for (k in activeFilters) if (activeFilters.hasOwnProperty(k) && activeFilters[k] ) count++;
        return count;
    }
});

Template.header.events({
    'click [hook="toggle-search-options"]': function(evt){
        evt.preventDefault();
        var searchOptionsVisible = $('[hook="search-options"]').is(':visible');
        var searchOptions = $('[hook="search-options"]');
        if( searchOptionsVisible ){
            searchOptions.hide('50');
        }else{
            $(".content").animate({ scrollTop: 0 }, 20, function(){
                searchOptions.show('300');
            });


        }
    }
});