document.addEventListener('DOMContentLoaded', function () {
    const baseApiUrl = "http://localhost:3000";
    const subscribeButton = document.querySelector('.btn button');

    subscribeButton.addEventListener('click', async function () {
        const emailInput = document.querySelector('.search-subs input');
        const email = emailInput.value;

        // Pastikan email tidak kosong
        if (email.trim() !== '') {
            // Validasi format email
            if (isValidEmail(email)) {
                // Persiapkan data untuk request POST
                const data = {
                    email: email
                };

                try {
                    // Kirim request POST menggunakan fetch
                    const response = await fetch(`${baseApiUrl}/subscribes`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    });

                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }

                    const responseData = await response.json();
                    // Tangani data respon sesuai kebutuhan
                    console.log(responseData);
                } catch (error) {
                    // Tangani kesalahan fetch
                    console.error('Ada masalah dengan operasi fetch:', error.message);
                }
            } else {
                // Tampilkan alert jika format email tidak valid
                alert('Format email tidak valid');
            }
        } else {
            // Tangani input email kosong
            console.error('Email tidak boleh kosong');
        }
    });

    // Fungsi untuk memeriksa validitas format email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
