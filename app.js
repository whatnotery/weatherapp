async function fetchWeatherJSON(zip) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=0d64736c9739126633c4eb01db5c1b50`);
    const json = await response.json();
    return json
};

let search = document.getElementById('search');
let button = document.querySelector('button');
let tempDisplay = document.getElementById('temp');

button.addEventListener('click', async  () => {
   weather = await fetchWeatherJSON(`${search.value}`);
   let fahrenheit = (weather.main.temp - 273.15) * 9/5 + 32;
   tempDisplay.innerText = `Temperature is ${Math.floor(fahrenheit)}°`
})



