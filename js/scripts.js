(function($) {
    "use strict"; 

    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 80)
        }, 1220, 'easeInOutExpo');
        event.preventDefault();
    });

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 1
    });

    $('#mainNav').affix({
        offset: {
            top: 1
        }
    })

})(jQuery); 
