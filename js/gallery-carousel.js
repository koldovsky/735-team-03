$(document).ready(function () {
    $('.gallery__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider__nav'
    });
    $('.slider__nav').slick({
        slidesToShow: 5,
        slidesToScroll: 0,
        asNavFor: '.gallery__slider',
        centerMode: true,
        focusOnSelect: true
    })
});
