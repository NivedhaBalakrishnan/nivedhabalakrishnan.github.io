
let id = null;

const closePopup = () => {
    $('.overlay-container').removeClass('show');
    $('body').css("overflow","auto");
    $('#'+id).removeClass('show');
}

(function($) {
    "use strict";

    $('a.page-scroll').bind('click', function(event) {
		//debugger;
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
        $('.navbar-toggle:visible').click();
    });

    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    $('.gallery li').click(function(e) {
        id = $(e.target).closest('li').attr('data-id');

        // Remove below lines when project details are added
        if(id== 'project_7' || id == 'project_8' || id == 'project_9' || id == 'project_10') {
            return;
        }

        $('.overlay-container').addClass('show');
        $('body').css("overflow","hidden");
        $('#'+id).addClass('show');
    });

    $('.overlay-close-icon').click(function(){
        closePopup();
    });

    $(document).bind('keydown', function(e) { 
        if (e.which == 27) {
            closePopup();
        }
    }); 

})(jQuery);
