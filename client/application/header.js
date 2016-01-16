Template.header.helpers({
    back: function(){
        if( Segue.history.length > 0 ){
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
            searchOptions.hide('slow');
        }else{
            searchOptions.show('slow');
        }
    }
});