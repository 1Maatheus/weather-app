"use client";

import React, { MouseEventHandler } from "react";
import Head from "next/head";
import Input from "./components/Input";
import Current from "./components/Current";
import WeekForecast from "./components/WeekForecast";
import WeatherDetails from "./components/WeatherDetails";
import "./globals.css";

export default function Home() {
  const [data, setData] = React.useState({});
  const [location, setLocation] = React.useState("");
  const [error, setError] = React.useState("");

  const url = `http://api.weatherapi.com/v1/forecast.json?key=b169adcee3ed43d5ad7220536243101&q=${location}&days=7&aqi=yes&alerts=yes`;

  const handleClick = async (event: React.MouseEvent<SVGElement>) => {
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
  };

  const handleSearch = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
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

  let content;
  if (Object.keys(data).length === 0 && error === "") {
    content = (
      <div className="text-white text-center h-screen sm:h-[calc(100vh-13.75rem)] mt-[5rem]">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Bem-vindo ao Weather App.{" "}
        </h2>
      </div>
    );
  } else if (error !== "") {
    content = (
      <div className="text-white text-center h-screen sm:h-[calc(100vh-13.75rem)] mt-[5rem]">
        <p className="text-2xl sm:text-3xl font-bold mb-4">
          Cidade não encontrada.
        </p>
        <p className="text-xl">Por favor, tente novamente.</p>
      </div>
    );
  } else {
    content = (
      <>
        <div className=" animate flex flex-col lg:flex-row py-1 px-12 sm:px-12 sm:py-1 items-center justify-between">
          <Current data={data} />
          <WeekForecast data={data} />
        </div>
        <div className="animate">
          <WeatherDetails data={data} />
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
      </Head>
      <div
        className="bg-cover sm:bg-gradient-to-r bg-gradient-to-b from-[#0875DC] to-[#8FADF1]
       h-fit"
      >
        <div className="bg-white/15 w-full flex-col h-fit sm:h-screen">
          <div className="flex flex-col md:flex-row justify-between items-center p-12">
            <Input
              handleClick={handleClick}
              handleSearch={handleSearch}
              setLocation={setLocation}
            />
            <h1 className="mb-9 md:mb-0 order-1 text-white py-2 px-4 rounded-xl italic font-bold">
              Weather App.
            </h1>
          </div>
          {content}
        </div>
      </div>
    </>
  );
}
