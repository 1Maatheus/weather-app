"use client";

import React from "react";
import Input from "./components/Input";

export default function Home() {
  const [data, setData] = React.useState({});
  const [location, setLocation] = React.useState("");
  const [error, setError] = React.useState("");

  const url = `http://api.weatherapi.com/v1/forecast.json?key=b169adcee3ed43d5ad7220536243101&q=${location}&days=7&aqi=yes&alerts=yes`;

  const handleSearch = async (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error();
        }
        const data = await response.json();
        setData(data);
        setLocation("");
        setError("");
      } catch (error) {
        setError("Cidade inválida.");
        setData({});
        setLocation("");
      }
    }
  };

  return (
    <>
      <div
        className="bg-cover- bg-gradient-to-b from-sky-500 to-sky-300
       h-screen"
      >
        <div className="bg-white/25 w-full flex-col h-fit ">
          <div className="flex flex-col md:flex-row justify-between items-center p-12">
            <Input handleSearch={handleSearch} setLocation={setLocation} />
            <h1 className="mb-8 md:mb-0 order-1 text-white py-2 px-4 rounded-xl italic font-bold">
              Weather App.
            </h1>
          </div>

          {data.current && <div>{data.current.temp_c}</div>}
        </div>
      </div>
    </>
  );
}
