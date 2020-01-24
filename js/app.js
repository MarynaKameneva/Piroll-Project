new WOW().init();

$('.ba-item-number').each( function() {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 2000,
        easing: 'swing',
        step: function(now) {
            $(this).text(Math.ceil(now));
        }
    });
});

$('.ba-slider-wrapper').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    adaptiveHeight: true,
    arrows: false
});




    

