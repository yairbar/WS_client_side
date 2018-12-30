$(document).ready(function(){

    var temp = false;

    $.urlParam = function(name){
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (results==null) {
            return null;
        }
        return decodeURI(results[1]) || 0;
    }

    function backGroundIl(){

        var color1 = $.urlParam('color1');
        var color2 = $.urlParam('color2');

        temp = !temp;

        if ( color1 && color2 ){

            var color = ( temp ? "#"+color1 : "#"+color2 );

        } 
        else{

            var color = ( temp ? "green" : "blue" );

        }

        $("li").css("background-color" , color);

    }

    setInterval(backGroundIl, 1000);

});

