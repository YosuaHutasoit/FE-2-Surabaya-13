document.addEventListener('DOMContentLoaded', function () {
    const baseApiUrl = "https://be-2-surabaya-13-production.up.railway.app/hotel";
    const subscribeButton = document.querySelector('.btn button');

    subscribeButton.addEventListener('click', async function () {
        const emailInput = document.querySelector('.search-subs input');
        const email = emailInput.value;

        if (email.trim() !== '') {
            if (isValidEmail(email)) {
                const data = {
                    Email: email
                };

                try {
                    const response = await fetch(`${baseApiUrl}/subscribe`, {
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
                    console.log(responseData);

                    alert('Email Anda sudah terkirim');

                    emailInput.value = '';
                } catch (error) {
                    console.error('Ada masalah dengan operasi fetch:', error.message);
                }
            } else {
                alert('Format email tidak valid');
            }
        } else {
            console.error('Email tidak boleh kosong');
        }
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
