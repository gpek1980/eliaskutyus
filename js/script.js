;(function () {


    var testimonialCarousel = function () {

        var owl = $('.owl-carousel-fullwidth');
        owl.owlCarousel({
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 2
                }
            },
            loop: true,
            margin: 30,
            nav: false,
            dots: true,
            smartSpeed: 800,
            autoHeight: true
        });

    };


    $(function () {
        testimonialCarousel();
    });

}());


