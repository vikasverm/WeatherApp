// app.js

$(document).ready(function() {
    const apiKey = 'f00c38e0279b7bc85480c3fe775d518c'; // Replace with your OpenWeatherMap API key

    $('#search-btn').click(function() {
        const city = $('#city-input').val();
        if (city) {
            getWeather(city);
        } else {
            alert('Please enter a city name.');
        }
    });

    function getWeather(city) {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        $.ajax({
            url: url,
            method: 'GET',
            success: function(data) {
                displayWeather(data);
            },
            error: function() {
                alert('Failed to fetch weather data. Please check the city name and try again.');
            }
        });
    }

    function displayWeather(data) {
        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
        const weatherCondition = data.weather[0].description;

        const weatherInfoHtml = `
            <div class="weather-item">Temperature: ${temperature}°C</div>
            <div class="weather-item">Humidity: ${humidity}%</div>
            <div class="weather-item">Wind Speed: ${windSpeed} m/s</div>
            <div class="weather-item">Condition: ${weatherCondition}</div>
        `;

        $('#weather-info').html(weatherInfoHtml).addClass('active');
    }
});
