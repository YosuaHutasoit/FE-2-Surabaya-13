document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Mencegah perilaku formulir default

        // Menampilkan pesan alert
        alert('Terimakasih sudah booking!');

        // Mereset formulir setelah pengiriman
        form.reset();
    });

    // Menambahkan event listener fokus pada input nama
    var nameInput = document.querySelector('input[type="text"]');
    nameInput.addEventListener('focus', function () {
        // Mengubah warna batas input ketika fokus
        nameInput.style.borderColor = '#ffc107';
    });

    // Menambahkan event listener blur untuk mereset warna batas ketika fokus hilang
    nameInput.addEventListener('blur', function () {
        // Mereset warna batas ketika fokus hilang
        nameInput.style.borderColor = '';
    });
});
