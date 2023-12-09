document.addEventListener('DOMContentLoaded', function() {
    const searchElements = document.querySelectorAll('.search');

    if (searchElements.length > 0) {
        searchElements.forEach(function(searchElement) {
            searchElement.addEventListener('input', handleSearch);
        });
    } else {
        console.error("Elemen dengan kelas 'search' tidak ditemukan.");
    }
});

function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    console.log('Pencarian:', searchTerm);
}

const swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
});

var popup = document.querySelector(".popup");
var dismiss = document.querySelector(".popup__dismiss");
var shop = document.querySelector(".popup__shop");

setTimeout(function() {
    popup.classList.add("popup--show");
}, 3000);

dismiss.addEventListener("click", function() {
    console.log("kil dismiss");
    popup.classList.remove("popup--show");
    popup.classList.add("popup--close");
});


const searchElement = document.querySelector('#search');
if (searchElement) {
    searchElement.id = '';
    searchElement.classList.add('search');
}
