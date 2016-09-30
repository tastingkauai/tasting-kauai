# Bureaucrat Meteor Package

The bureacrat processes your forms and returns tidy objects.

### Installation

```
meteor add zendy:bureaucrat
```
 
### Usage

Bureaucrat processes forms by using the `name` attribute of the form inputs. Make sure that all the fields in your form have a `name` attribute otherwise they will not be processed.

A sample use of Bureaucrat would be when a form is submitted:

##### HTML

```
<template name="myFormTemplate">
	<form>
		<input name="firstName" value="Joe" />
		<input name="lastName" value="Smith" />
		<input type="submit" />
	</form>
</template>
```

##### JS

```
Template.myFormTemplate.events({
	'submit form': function(evt){
		var formObject = $(evt.target);
		var formData = Bureaucrat.getFormData( formObject );
		////////console.log( formData );
	}
});
```

The value of `formData` should look like:

```
{
	"firstName": "Joe",
	"lastName": "Smith"
}
```

##### Radio buttons and checkboxes

Radio buttons and checkboxes will return a boolean value.

##### Array of values

If multiple inputs have the same `name` attribute, an array will be returned with all the values for those inputs.

##### ENJOY!