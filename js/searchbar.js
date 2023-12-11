document.addEventListener('DOMContentLoaded', function() {
    var searchInput = document.querySelector('.search-bar');
    var searchIcon = document.querySelector('.bx-search');

    function handleInput() {
        searchIcon.style.display = searchInput.value ? 'none' : 'block';
    }

    function handleClear() {
        searchInput.value = '';
        searchIcon.style.display = 'block';
    }

    searchInput.addEventListener('input', handleInput);
    searchIcon.addEventListener('click', handleClear);
});
