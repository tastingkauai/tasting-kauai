Template.coverPhoto.onRendered(function(){
    this.autorun( function(){
        var tmplData = Template.currentData();
        var selector = '[hook-load-image-id="'+tmplData.restaurant._id+'"]';
        var coverPhotoDOM = $(selector);
        TastingKauai.loadCoverImage( coverPhotoDOM, coverPhotoDOM.attr('hook-load-image-data') );
    });
});