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

    var icons = [];
    if( restaurant.icons.slippahCode === 1 ){
        icons.push( '/img/icons/slippa-1.png' );
    }
    if( restaurant.icons.slippahCode === 2 ){
        icons.push( '/img/icons/slippa-2.png' );
    }
    if( restaurant.icons.slippahCode === 3 ){
        icons.push( '/img/icons/slippa-3.png' );
    }
    return icons;

});