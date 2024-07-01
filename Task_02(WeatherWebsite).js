document.getElementById('getWeatherBtn').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '6d1879925e9b04ab88abf2d06f65884c'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('cityName').textContent = `Weather in ${data.name}`;
                document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
                document.getElementById('description').textContent = `Description: ${data.weather[0].description}`;
                document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
                document.getElementById('weatherDisplay').classList.remove('hidden');
            } else {
                alert('City not found!');
            }
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
        });
});
