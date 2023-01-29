(function () {

    const slides = [
        '<img src="img/junanji-first.jpg alt="room photo">',
        '<img src="img/junanji-second.jpg alt="room photo">',
        '<img src="img/junanji-third.jpg alt="room photo">',
        '<img src="img/junanji-fourth.jpg alt="room photo">',
        '<img src="img/junanji-fifth.jpg alt="room photo">'
    ];

    let currentSlideIdx = 0;


    function renderSlides() {
        const slideContainer = document.querySelector('.carousel__slide-container');
        slideContainer.innerHTML = slides[currentSlideIdx];
    }

    function nextSlide() {
        currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
    renderSlides();
    }

    setInterval(nextSlide, 3000);
    renderSlides();

})();