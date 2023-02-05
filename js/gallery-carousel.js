$(document).ready(function () {
    $('.gallery__slider').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        customPaging: (slick, index) => {
            const targetImage = slick.$slides.eq(index).find('img').attr('src');
            return '<img src=" ' + targetImage + ' "/>';
        }
    });

});
