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

// Gallery

var activeFilter = 'all';

$('.pp-filter-button').on('click', function (e) {
    // remove btn-primary from all buttons first
    $('.pp-filter-button').removeClass('btn-primary');
    $('.pp-filter-button').addClass('btn-outline-primary');

    // add btn-primary to active button
    var button = $(this);
    button.removeClass('btn-outline-primary');
    button.addClass('btn-primary');
    filterItems(button.data("filter"));
    e.preventDefault();
});

function filterItems(filter) {
    if (filter === activeFilter) {
        return;
    }

    activeFilter = filter;
    $('.pp-gallery .card').each(function () {
        var card = $(this);
        var groups = card.data("groups");
        var show = false;
        if (filter === 'all') {
            show = true;
        } else {
            for (var i = 0; i < groups.length; i++) {
                if (groups[i] === filter) {
                    show = true;
                }
            }
        }
        // hide everything first
        card.fadeOut(400);

        setTimeout(function () {
            if (show && !card.is(":visible")) {
                card.fadeIn(400)
            }
        }, 500);



    });
}

mybutton = document.getElementById("topBtn");

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}


function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function testAnim(x) {
    $('#animationSandbox').removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
};

$(document).ready(function(){
    $('.js--triggerAnimation').click(function(e){
        e.preventDefault();
        var anim = $('.js--animations').val();
        testAnim(anim);
    });

    $('.js--animations').change(function(){
        var anim = $(this).val();
        testAnim(anim);
    });
});
