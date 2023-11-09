import apiKey from "./script/key.js";

const getWeather = async () => {
  const city = "São Paulo";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  const response = await fetch(apiUrl);
  const data = await response.json();

  console.log(data);
};

getWeather();
