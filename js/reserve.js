document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        alert('Terimakasih sudah booking!');

        form.reset();
    });

    var nameInput = document.querySelector('input[type="text"]');
    nameInput.addEventListener('focus', function () {
        nameInput.style.borderColor = '#ffc107';
    });
    nameInput.addEventListener('blur', function () {
        nameInput.style.borderColor = '';
    });
});