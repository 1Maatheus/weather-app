import React from "react";

type WeekForecastProps = {
  data: {
    forecast: {
      date: string;
      weekday: string;
    }[];
  };
};

const WeekForecast = ({ data }: WeekForecastProps | any) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 w-full">
      {data.results.forecast.map((day: any, index: any) => (
        <div
          key={index}
          className="bg-white/90 p-2 text-center rounded-lg flex flex-col items-center"
        >
          <p>{data.results.forecast[index].weekday}</p>
          <img
            src={`https://assets.hgbrasil.com/weather/icons/conditions/${data.results.forecast[index].condition}.svg`}
          />
          <div>
            <p>Max: {data.results.forecast[index].max.toFixed()} °C</p>
            <p>Min: {data.results.forecast[index].min.toFixed()} °C</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeekForecast;
