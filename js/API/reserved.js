document.addEventListener('DOMContentLoaded', function () {
    const baseApiUrl = "https://be-2-surabaya-13-production.up.railway.app/hotel";
    const bookingButton = document.querySelector('.container-form .btn');

    if (bookingButton) { 
        bookingButton.addEventListener('click', async function () {
            try {
                const nameInput = document.querySelector('.container-form input[type="text"]');
                const emailInput = document.querySelector('.container-form input[type="email"]');
                const dateInput = document.querySelector('.container-form input[type="date"]');

                if (!nameInput || !emailInput || !dateInput) {
                    throw new Error('One or more input elements not found.');
                }

                const reservationData = {
                    Name: nameInput.value,
                    Email: emailInput.value,
                    Date: dateInput.value,
                };

                const response = await fetch(`${baseApiUrl}/reserved`, {
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
                
                alert('Booking berhasil!');

                nameInput.value = '';
                emailInput.value = '';
                dateInput.value = '';

            } catch (error) {
                console.error('Ada masalah dengan operasi fetch:', error);
            }
        });
    } else {
        console.error('Button not found.');
    }
});
