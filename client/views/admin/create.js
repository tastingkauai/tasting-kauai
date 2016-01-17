//CREATE NEW COFFEESHOP ENTRY IN MONGO DB
Template.restaurantCreate.events({

    'submit [hook="form"]': function(evt, tmpl){

        // Prevent default browser form submit
        evt.preventDefault();

        var formObject = $(event.target);
        var formData = Bureaucrat.getFormData( formObject );

        if( formData.images ) {
            formData.images = formData.images.filter(Boolean);
        }else{
            formData.images = [];
        }

        var insertResult = TastingKauai.Collections.Restaurants.insert(formData);
        if( insertResult ){
            Router.go('restaurantUpdate',{_id:insertResult});
        }else{
            alert('insert failed');
        }

    }


});