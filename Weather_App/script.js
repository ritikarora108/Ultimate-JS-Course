import config from './config.js';

const weatherApiKey = config.WEATHER_API_KEY;

const button = document.getElementById('search-button');
const city = document.getElementById('city-input') 

const cityName = document.getElementById('city-name');
const cityTime = document.getElementById('city-time');
const cityTemperature = document.getElementById('city-temperature');
// console.log(cityName)
// console.log(cityTime)
// console.log(cityTemperature)



async function getData(cityName) {

    // String Interpolation

    const url = `https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${cityName}&aqi=yes`;
    console.log(url)
    const promise = await fetch(url);
    
    return await promise.json();
    
    
}

button.addEventListener('click', async () => {
    const data = await getData(city.value);
    console.log(data)
    const location = data.location;
    const current = data.current;
    cityName.innerText = location.country + ", " + location.region +  "-" + location.name;
    cityTime.innerText = `Time: ${location.localtime}`
    cityTemperature.innerText = `Temperature : ${current.temp_c}°C`;

})