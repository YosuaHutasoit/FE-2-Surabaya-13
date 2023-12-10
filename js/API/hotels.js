document.addEventListener('DOMContentLoaded', function () {
    const carouselContainer = document.getElementById('carousel1');
    const cardContainer = carouselContainer.querySelector('.card-container-carosel');
  
    fetch('https://be-2-surabaya-13-production.up.railway.app/hotels')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (!Array.isArray(data)) {
          throw new Error('Invalid data format: Expected an array');
        }
  
        data.forEach(hotel => {
          const card = document.createElement('div');
          card.className = 'card-carosel';
  
          const image = document.createElement('img');
          image.src = hotel.image_url || '';
          image.alt = 'Hotel Image';
  
          const caroselInfo = document.createElement('div');
          caroselInfo.className = 'carosel-info';
  
          const caroselInfo1 = document.createElement('div');
          caroselInfo1.className = 'carosel-info1';
  
          const hotelName = document.createElement('h3');
          hotelName.textContent = hotel.name || '';
  
          const description = document.createElement('p');
          description.textContent = hotel.description || ''; 
  
          caroselInfo1.appendChild(hotelName);
          caroselInfo.appendChild(caroselInfo1);
          caroselInfo.appendChild(description);
  
          card.appendChild(image);
          card.appendChild(caroselInfo);
  
          cardContainer.appendChild(card);
        });
      })
      .catch(error => console.error('Error fetching or processing hotel data:', error));
  });
  