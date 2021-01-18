var $status = $('.page-info');
var $slickElement = $('.main__items');

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.html('<span class="page-info__current">' + i + '</span>' + '<span class="page-info__all"> / ' + slick.slideCount + '</span>');
});

$slickElement.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="icon-arrow-banner-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="icon-arrow-banner-right"></i></button>',
});

$('.loan-programs__list').slick({
    mobileFirst: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    variableWidth: false,
    infinite: false,

    responsive: [
        {
            breakpoint: 991,
            settings: "unslick"
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
            }
        },
    ]
});

// $('.gallery__thumbnails').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     asNavFor: '.gallery__main',
//     arrows: false,
//     focusOnSelect: true,
//     vertical: true,
//     verticalSwiping: true,

//     responsive: [
//         {
//           breakpoint: 991,
//           settings: {
//             vertical: false,
//             verticalSwiping: false,
//           }
//         },
//       ]
// });

// $('#productGallery .tabs-triggers__item').click(function() {
//     $('.gallery__main').slick('refresh');
//     $('.gallery__thumbnails').slick('refresh');
// })