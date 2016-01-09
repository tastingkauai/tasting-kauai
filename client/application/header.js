Template.header.helpers({
    back: function(){
        if( Segue.history.length > 0 ){
            return true;
        }else{
            return false;
        }
    }
});