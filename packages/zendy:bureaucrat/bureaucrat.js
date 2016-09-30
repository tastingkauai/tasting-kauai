// Namespace
Bureaucrat = {};

/**
 * Get all data from a form and return an object
 * @param formObject : a jquery object
 * @returns object : the processed form data
 */
Bureaucrat.getFormData = function( formObject ){

    // Prep form data var
    var formData = {};

    // Loop through all elements with name attr
    formObject.find('[name]').each(function () {

        // get element/input key
        var key = $(this).attr('name');

        // get element/input value
        var value = $(this).val();

        // Check for radio buttons or checkbox
        var isRadio = $(this).attr('type') === 'radio' ? true : false;
        var isCheckbox = $(this).attr('type') === 'checkbox' ? true : false;
        var isChecked = $(this).is(':checked');

        if( isCheckbox || isRadio ){
            if (isChecked) {
                value = true;
            } else {
                value = false;
            }
        }

        // Any input that isn't an empty radio button gets added to the form data
        if( !isRadio || ( isRadio && isChecked ) ) {

            // If the input name has already been processed,
            // Add data into array
            if( formData[key]  ){
                if( !Array.isArray(formData[key]) ) {
                    formData[key] = [formData[key]];
                }
                formData[key].push( value )

            // Otherwise set form data
            }else {
                formData[key] = value;
            }

        }

    });

    console.log( 'IN BUREAUCRAT -- FORM DATA', formData );

    // All done!
    return formData;

}
