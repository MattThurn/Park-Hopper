$( document ).ready(function() {

     $(".accordion h4").click(function() {

        // If location block is already open, close it and remove the box-open class from the title element
        if ( $(this).hasClass("box-open") ) {

            $(this).parent().find(".location-info").slideUp();
            $(this).parent().find("h4").removeClass("box-open");
        } else {

            $(this).parent().find(".location-info").slideDown();
           $(this).parent().find("h4").addClass("box-open");
        }
    });
});