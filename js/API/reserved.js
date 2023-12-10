document.addEventListener('DOMContentLoaded', function () {
    const baseApiUrl = "https://be-2-surabaya-13-production.up.railway.app/hotel";
    const bookingButton = document.querySelector('.container-form .btn');

    bookingButton.addEventListener('click', async function () {
        try {
            const nameInput = document.querySelector('.container-form input[type="text"]');
            const emailInput = document.querySelector('.container-form input[type="email"]');
            const dateInput = document.querySelector('.container-form input[type="date"]');

            const reservationData = {
                name: nameInput.value,
                email: emailInput.value,
                date: dateInput.value,
            };

            const response = await fetch(`${baseApiUrl}/reserveds`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(reservationData)
            });

            if (!response.ok) {
                throw new Error('Respon jaringan tidak berhasil');
            }

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Ada masalah dengan operasi fetch:', error);
        }
    });
});
