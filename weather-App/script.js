const api_key = 'f8bb4d2ea0a07e8c2696cb19294850eb';
const base_url = `https://api.openweathermap.org/data/2.5/weather?q=Noida&appid=${api_key}`;

async function getWeather() {
    const response = await fetch(base_url);
    const data = await response.json();
    console.log(data);
    console.log(data.main.feels_like);
}

getWeather();