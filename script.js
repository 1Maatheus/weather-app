import apiKey from "./script/key.js";

const input = document.querySelector(".input-search");
const btn = document.querySelector(".btn-search");
const cityName = document.querySelector(".cityName");
const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");
const wind = document.querySelector(".wind-velocity");
const humidity = document.querySelector(".humidity");
const content = document.querySelector(".main-content");

const getWeather = async () => {
  const city = input.value;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  const response = await fetch(apiUrl);
  const data = await response.json();

  cityName.innerHTML = data.name;
  wind.innerHTML = data.wind.speed + "Km/h";
  humidity.innerHTML = data.main.humidity + "%";
  input.value = "";

  content.classList.add("show");

  console.log(data);
};

btn.addEventListener("click", () => {
  getWeather();
});
