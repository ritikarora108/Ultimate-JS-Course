import config from "./config.js"; 

const weatherApiKey = config.WEATHER_API_KEY;

const button = document.getElementById('location-button');


const city = document.getElementById('city');
const city_time = document.getElementById('city-time');
const city_temp = document.getElementById('city-temp');

// console.log(city);
// console.log(city_time);
// console.log(city_temp);


async function getWeatherApiData(lat, long){
    const url = `https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${lat},${long}&aqi=yes`;

    const weatherApiData = await fetch(url);
    return await weatherApiData.json();
    
}


async function showLocation(position) {
    // console.log(`position : ${position}`)
    console.log(position)

    const weatherApiData = await getWeatherApiData(position.coords.latitude, position.coords.longitude);

    localStorage.setItem('cityName', weatherApiData.location.name);

    localStorage.setItem('region', weatherApiData.location.region);

    localStorage.setItem('country', weatherApiData.location.country);

    localStorage.setItem('currentTime', weatherApiData.location.localtime)
    
    localStorage.setItem('currentTemperature', weatherApiData.current.temp_c)
    
    location.reload();

}

function failedToGetLocation() {
    console.log("Some issue occured while fetching user's location");
}

button.addEventListener('click', async () => {
    navigator.geolocation.getCurrentPosition(showLocation, failedToGetLocation);
})

window.addEventListener('load', () => {
    const cityName = localStorage.getItem('cityName');
    const region = localStorage.getItem('region');
    const country = localStorage.getItem('country');
    const currentTime = localStorage.getItem('currentTime');
    const currentTemperature = localStorage.getItem('currentTemperature');

    city.innerText = `${cityName}, ${region}, ${country}`;
    city_time.innerText = `Time: ${currentTime}`;
    city_temp.innerText = `Temperature: ${currentTemperature} deg Celsius`;
})