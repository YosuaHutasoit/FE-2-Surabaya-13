document.addEventListener("DOMContentLoaded", function() {
    let carousels = document.querySelectorAll(".carousel-container");

    carousels.forEach(function(carousel) {
        let carouselWrapper = carousel.querySelector(".carousel-wrapper");
        let prevBtn = carousel.querySelector(".prevBtn");
        let nextBtn = carousel.querySelector(".nextBtn");
        let carouselWidth = carousel.clientWidth;
        let currentSlide = 0;

        function showNextSlide() {
            if (currentSlide < 2) {
                currentSlide++;
            } else {
                currentSlide = 0;
            }
            updateCarousel();
        }

        function showPrevSlide() {
            if (currentSlide > 0) {
                currentSlide--;
            } else {
                currentSlide = 2;
            }
            updateCarousel();
        }

        function updateCarousel() {
            let newTransformValue = -currentSlide * 350 + "px";
            carouselWrapper.style.transform = "translateX(" + newTransformValue + ")";
        }

        nextBtn.addEventListener("click", showNextSlide);
        prevBtn.addEventListener("click", showPrevSlide);
    });
});