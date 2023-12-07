document.addEventListener('DOMContentLoaded', function() {
    const searchBar = document.getElementById('search');
    searchBar.addEventListener('input', handleSearch);
});

function handleSearch() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    // Lakukan sesuatu dengan nilai pencarian, seperti menampilkan hasil atau memfilter data.
    console.log('Pencarian:', searchTerm);
}
const swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
});