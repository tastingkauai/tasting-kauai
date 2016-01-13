/**
 * Converts textarea with line breaks to HTML
 * @param string : the content from the textarea
 * @return string : an html string
 */
UI.registerHelper('textareaToHTML', function( content ) {
    return Spacebars.SafeString( content.replace(/\n/g, '<br/>') );
});

UI.registerHelper('isOnKauai', function(center){

    if(
        center.lat >= 21 &&
        center.lat <= 23 &&
        center.lng >= -160 &&
        center.lng <= -159
    ){
        return true;
    }else{
        return false;
    }
})

/**
 * Strips phone number string to only keep numbers
 * @param string : the human-readable phone number
 * @param string : the phone number with just numbers
 */
UI.registerHelper('stripPhone', function ( rawPhone) {
    var editedPhone = rawPhone.replace('(','').replace(')','').replace(' ','').replace('-','').replace('.','');
    return editedPhone;
});

/**
 * Get region from zip code
 * @param string : the zip code
 * @return string : the region or an empty string if the zip is not accounted for
 */
UI.registerHelper( 'getRegionFromZip', function( zip ){

    var eastSideZipCodes = [ 96746, 96703, 96751 ];
    var westSideZipCodes = [ 96705, 96716, 96747, 96752, 96796, 96769 ];
    var northShoreZipCodes = [ 96722, 96754, 96714 ];
    var southShoreZipCodes = [ 96715, 96741, 96756, 96765, 96766 ];

    zip = zip.substring(0,5);
    zip = parseInt(zip);

    if( _.contains( eastSideZipCodes, zip ) ){
        return 'East Side';
    }else if( _.contains( westSideZipCodes, zip ) ){
        return 'West Side';
    }else if( _.contains( northShoreZipCodes, zip ) ){
        return 'North Shore';
    }else if( _.contains( southShoreZipCodes,zip ) ){
        return 'South Shore';
    }else {
        return zip;
    }

});

UI.registerHelper( 'foodServiceIcons', function(restaurant){

    var icons = [];
    if( restaurant.icons.foodService.breakfast ){
        icons.push( '/img/icons/breakfast.png' );
    }
    if( restaurant.icons.foodService.lunch ){
        icons.push( '/img/icons/lunch.png' );
    }
    if( restaurant.icons.foodService.dinner ){
        icons.push( '/img/icons/dinner.png' );
    }
    return icons;

});

UI.registerHelper( 'priceRangeIcon', function(restaurant) {

    var icons = [];
    if( restaurant.icons.priceRange === 1 ){
        icons.push( '/img/icons/dollar-1.png' );
    }
    if( restaurant.icons.priceRange === 2 ){
        icons.push( '/img/icons/dollar-2.png' );
    }
    if( restaurant.icons.priceRange === 3 ){
        icons.push( '/img/icons/dollar-3.png' );
    }
    return icons;

});

UI.registerHelper( 'slippahCodeIcon', function(restaurant) {

    var icon;
    if( restaurant.icons.slippahCode === 1 ){
        icon = '/img/icons/slippa-1.png';
    }
    if( restaurant.icons.slippahCode === 2 ){
        icon = '/img/icons/slippa-2.png';
    }
    if( restaurant.icons.slippahCode === 3 ){
        icon = '/img/icons/slippa-3.png';
    }
    return icon;

});

UI.registerHelper( 'reservationsIcon', function(restaurant) {

    var icon;
    if( restaurant.icons.reservations === true ){
        icon = '/img/icons/reservations.png';
    }
    return icon;

});

UI.registerHelper( 'alternativeDietsIcons', function(restaurant) {

    var icons = [];
    if( restaurant.icons.alternativeDiets.vegetarian ){
        icons.push( '/img/icons/vegetarian.png' );
    }
    if( restaurant.icons.alternativeDiets.vegan ){
        icons.push( '/img/icons/vegan.png' );
    }
    if( restaurant.icons.alternativeDiets.glutenFree ){
        icons.push( '/img/icons/gluten-free.png' );
    }
    return icons;

});

UI.registerHelper( 'wifiIcon', function(restaurant) {

    var icon;
    if( restaurant.icons.wifi === true ){
        icon = '/img/icons/wifi.png';
    }
    return icon;

});


UI.registerHelper( 'foodTruckIcon', function(restaurant) {

    var icon;
    if( restaurant.icons.foodTruck === true ){
        icon = '/img/icons/food-trucks.png';
    }
    return icon;

});

UI.registerHelper( 'farmersMarketIcon', function(restaurant) {

    var icon;
    if( restaurant.icons.foodTruck === true ){
        icon = '/img/icons/farmers-market.png';
    }
    return icon;

});


UI.registerHelper( 'haleAinaAwardsIcon', function(restaurant) {

    var icon;
    if( restaurant.icons.haleAinaAwards === true ){
        icon = '/img/icons/hale-aina.png';
    }
    return icon;

});


UI.registerHelper( 'hawaiiRegionalCuisineIcon', function(restaurant) {

    var icon;
    if( restaurant.icons.hawaiiRegionalCuisine === true ){
        icon = '/img/icons/hrc.png';
    }
    return icon;

});


UI.registerHelper( 'favoritesIcon', function(restaurant) {

    var icon;
    if( restaurant.icons.favorites === true ){
        icon = '/img/icons/favorite.png';
    }
    return icon;

});

UI.registerHelper( 'activeFilterClass', function( args ){
    var activeFilters = Session.get('activeFilters');
    if( activeFilters && activeFilters[args.hash.filter] ){
        return 'active';
    }else{
        return '';
    }
});