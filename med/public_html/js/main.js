$(document).ready(function () {



    $('.marker').click(function (e) {
        e.preventDefault();
        $(this).find('.fa').toggleClass('text-danger');
    });
    
    
    $('.navbar-nav a > .fa').click(function(e){
    e.preventDefault();
    $(this).toggleClass('fa-close fa-plus');
    $(this).parent().next('.sub-menu').slideToggle();
});


//OWL-CAROUSEL
    if ($('.owl-carousel').length > 0) {
        $('.authors-slider').owlCarousel({
            loop: true,
            margin: 10,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                }
            }
        });
        $('.sponsors-slider').owlCarousel({
            loop: true,
            margin: 10,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                }
            }
        });

    }



//CALENDAR
    if ($('.calendar-container').length > 0) {
        $("#container").simpleCalendar({
            months: ['januar', 'februar', 'mart', 'april', 'maj', 'jun', 'jul', 'avgust', 'septembar', 'oktobar', 'novembar', 'decembar'], //string of months starting from january
            days: ['ne', 'po', 'ut', 'sr', 'če', 'pe', 'su'], //string of days starting from sunday
            minDate: "YYYY-MM-DD", // minimum date
            maxDate: "YYYY-MM-DD", // maximum date
            insertEvent: true, // can insert events
            displayEvent: true, // display existing event
            fixedStartDay: true, // Week begin always by monday
            event: [], //List of event
            insertCallback: function () {} // Callback when an event is added to the calendar
        });

        $("#container a").click(function (e) {
            e.preventDefault();

        });
    }



//SMILEY RATING
    $('.example-fontawesome-o').each(function () {
        var currentRating = $(this).data('current-rating');

        $(this).find('.current-rating')
                .find('span')
                .html(currentRating);

        $(this).find('.clear-rating').on('click', function (event) {
            event.preventDefault();

            $(this)
                    .barrating('clear');
        });
        $(this).barrating({
            theme: 'fontawesome-stars-o',
            showSelectedRating: false,
            initialRating: currentRating,
            onSelect: function (value, text) {
                if (!value) {
                    $(this)
                            .barrating('clear');
                } else {
                    $(this).find('.current-rating')
                            .addClass('hidden');

                    $(this).find('.your-rating')
                            .removeClass('hidden')
                            .find('span')
                            .html(value);
                }
            },
            onClear: function (value, text) {
                $(this).find('.stars-example-fontawesome-o')
                        .find('.current-rating')
                        .removeClass('hidden')
                        .end()
                        .find('.your-rating')
                        .addClass('hidden');
            }
        });
    });




});


