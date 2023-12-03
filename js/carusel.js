document.addEventListener("DOMContentLoaded", function() {
    // Menangkap elemen-elemen yang diperlukan
    let carousels = document.querySelectorAll(".carousel-container");

    // Iterasi melalui setiap carousel
    carousels.forEach(function(carousel) {
        let carouselWrapper = carousel.querySelector(".carousel-wrapper");
        let prevBtn = carousel.querySelector(".prevBtn");
        let nextBtn = carousel.querySelector(".nextBtn");
        let carouselWidth = carousel.clientWidth;
        let currentSlide = 0;

        // Fungsi untuk menampilkan slide berikutnya
        function showNextSlide() {
            if (currentSlide < 2) {
                currentSlide++;
            } else {
                currentSlide = 0;
            }
            updateCarousel();
        }

        // Fungsi untuk menampilkan slide sebelumnya
        function showPrevSlide() {
            if (currentSlide > 0) {
                currentSlide--;
            } else {
                currentSlide = 2;
            }
            updateCarousel();
        }

        // Fungsi untuk memperbarui tampilan carousel
        function updateCarousel() {
            let newTransformValue = -currentSlide * 350 + "px";
            carouselWrapper.style.transform = "translateX(" + newTransformValue + ")";
        }

        // Menambahkan event listener untuk tombol "next" dan "previous"
        nextBtn.addEventListener("click", showNextSlide);
        prevBtn.addEventListener("click", showPrevSlide);
    });
});