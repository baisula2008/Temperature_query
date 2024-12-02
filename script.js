async function fetchWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'f28866a37b34edd7f1a6da9f73c0eb35'; // Replace with your valid API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (response.ok) {
        document.getElementById('location').innerText = `City: ${data.name}`;
        document.getElementById('temp').innerText = `Temperature: ${data.main.temp} °C`;
        document.getElementById('description').innerText = `Condition: ${data.weather[0].description}`;
        document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  
        // Update background based on weather type
        updateBackground(data.weather[0].main);
      } else {
        alert('Error: ' + data.message);
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }
  
  function updateBackground(weatherType) {
    const body = document.body;
    body.classList.remove('rain', 'snow'); // Clear previous background classes
  
    switch (weatherType.toLowerCase()) {
      case 'rain':
        body.classList.add('rain');
        break;
      case 'snow':
        body.classList.add('snow');
        break;
      default:
        body.style.backgroundColor = '#87CEEB'; // Default sunny background
    }
  }
  