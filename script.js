import apiKey from "./script/key.js";

const input = document.querySelector(".input-search");
const btn = document.querySelector(".btn-search");
const cityName = document.querySelector(".cityName");
const weatherIcon = document.querySelector(".weather-img");
const temperature = document.querySelector(".temperature");
const wind = document.querySelector(".wind-velocity");
const humidity = document.querySelector(".humidity");
const content = document.querySelector(".main-content");

const getWeather = async () => {
  const city = input.value;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  const response = await fetch(apiUrl);
  const data = await response.json();

  cityName.innerHTML = data.name;
  wind.innerHTML = data.wind.speed + "Km/h";
  humidity.innerHTML = data.main.humidity + "%";
  weatherIcon.innerHTML = `<img class="weather-img" src="./assets/weather-icons/${data.weather[0].main}.svg"/>`;
  temperature.innerHTML = data.main.temp.toFixed(0) + "°";
  input.value = "";

  content.classList.add("show");

  console.log(data);
};

btn.addEventListener("click", () => {
  getWeather();
});
