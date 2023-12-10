document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('.container-form form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        const apiEndpoint = 'https://be-2-surabaya-13-production.up.railway.app/reserved';

        fetch(apiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Object.fromEntries(formData)),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Reservation successful:', data);
        })
        .catch(error => {
            console.error('Error during reservation:', error);
        });
    });
});