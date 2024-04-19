/*function getWeather() {
    const city = document.getElementById('search').value;
    const apiKey = 'a49c412c7682ffb0160c5633b42c1de2';  // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherDisplay = document.getElementById('weather-display');
            const weatherCondition = data.weather[0].main.toLowerCase(); // e.g., 'cloudy'
            
            document.body.style.backgroundImage = `url('images/${weatherCondition}.jpg')`; // Adjust path as needed
            weatherDisplay.innerHTML = `
                <img src="Icons/${weatherCondition}.png" class="weather-icon" alt="${weatherCondition}"> <!-- Adjust path as needed -->
                <h2>${data.name}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            alert('Failed to retrieve weather data.');
        });
}

window.onload = () => {
    getWeather('Kurnool'); // Default city for initial load
};

function updateBackgroundImage(weatherData) {
    const backgroundElement = document.getElementById('background');
    let backgroundImage = '';

    switch (weatherData.weather[0].main.toLowerCase()) {
        case 'clear':
            backgroundImage = 'images/backgrounds/sunny.jpg';
            break;
        case 'clouds':
            backgroundImage = 'images/backgrounds/cloudy.jpg';
            break;
        case 'rain':
        case 'drizzle':
            backgroundImage = 'images/backgrounds/rainy.jpg';
            break;
        case 'snow':
            backgroundImage = 'images/backgrounds/snowy.jpg';
            break;
        case 'thunderstorm':
            backgroundImage = 'images/backgrounds/thunderstorm.jpg';
            break;
        default:
            backgroundImage = 'images/backgrounds/default.jpg'; // A default background
            break;
    }

    // Setting the background image
    backgroundElement.style.backgroundImage = `url('${backgroundImage}')`;
    backgroundElement.style.backgroundSize = 'cover';  // Ensure the background covers the whole element
    backgroundElement.style.backgroundPosition = 'center'; // Center the background image
}

// Example usage after fetching weather data
fetchWeatherData().then(data => {
    updateBackgroundImage(data);
});
*/


function displayWeatherIcon(weatherCondition) {
    const iconPath = `images/icons/${weatherCondition}.png`;
    const weatherIconImg = document.getElementById('weather-icon');
    weatherIconImg.src = iconPath;
    weatherIconImg.alt = weatherCondition;
}

// Assuming your HTML has an img element with id "weather-icon"



function getWeather() {
    const city = document.getElementById('search').value;
    const apiKey = 'api key here';  // Replace with your API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherCondition = data.weather[0].main.toLowerCase();
            updateBackground(weatherCondition);
            displayWeatherInfo(data);
        })
        .catch(error => console.error('Error fetching weather:', error));
}

function updateBackground(condition) {
    const background = document.getElementById('background');
    const imageUrl = `images/backgrounds/${condition}.jpg`;  // Assumes you have images named after weather conditions
    background.style.backgroundImage = `url('${imageUrl}')`;
}

function displayWeatherInfo(data) {
    const weatherDisplay = document.getElementById('weather-display');
    weatherDisplay.innerHTML = `
        <h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Condition: ${data.weather[0].main}</p>
    `;
}
