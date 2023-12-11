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
