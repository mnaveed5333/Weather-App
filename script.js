const city = document.getElementById("cinput");
const submit = document.getElementById("output");
const loc = document.getElementById("loc");
const temp = document.getElementById("temperature");

async function getWeather() {
    const cityname = city.value.trim();

    if (cityname === "") {
        alert("Please enter a city name");
        return;
    }

    const apikey = "7bf69d7cc25b4723857195640260702";
    const url = `https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${cityname}&aqi=no`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        loc.textContent = "Location : " + data.location.name;
        temp.textContent = "Temperature : " + data.current.temp_c + " °C";
    } catch (error) {
        console.error("Error fetching weather data:", error);
        loc.textContent = "Error fetching weather data";
        temp.textContent = "";
    }
}
submit.addEventListener("click", getWeather);
