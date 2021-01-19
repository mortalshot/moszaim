$('.accordion__title').click(function (event) {

    let accordionid = $(this).closest('.accordion').attr("id");

    if ($('#' + accordionid).hasClass('accordion-one')) {
        $('#' + accordionid + ' ' + '.accordion__title').not($(this)).removeClass('active');
        $('#' + accordionid + ' ' + '.accordion__text').not($(this).next()).slideUp(300);
    }

    $(this).toggleClass('active').next('.accordion__text').slideToggle(300);
});

let mediaQueryMdMax = window.matchMedia('(max-width: 767px)');
if (mediaQueryMdMax.matches) {
    $('.vacancies__card-content').addClass('accordion__text');
}
mediaQueryMdMax.addListener(handleTabletChange);
function handleTabletChange(e) {
    if (e.matches) {
        $('.vacancies__card-content').addClass('accordion__text');
    }

    else {
        $('.vacancies__card-content').removeClass('accordion__text');
    }
}