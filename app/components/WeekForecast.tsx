import React from "react";

type WeekForecastProps = {
  data: {
    forecast: {
      forecastday: {
        date: string;
        day: {
          condition: {
            icon: string;
            text: string;
          };
          maxtemp_c: number;
          mintemp_c: number;
        };
      }[];
    };
  };
};

const WeekForecast = ({ data }: WeekForecastProps | any) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 w-full">
      {data.forecast.forecastday.map(
        (
          day: {
            date: string | number | Date;
            day: {
              condition: { icon: string | undefined; text: string | undefined };
              maxtemp_c: number;
              mintemp_c: number;
            };
          },
          index: React.Key | null | undefined
        ) => (
          <div
            key={index}
            className="bg-white/90 p-2 text-center rounded-lg flex flex-col items-center"
          >
            <p>
              {new Date(day.date).toLocaleDateString("pt-BR", {
                weekday: "short",
              })}
            </p>
            <img src={day.day.condition.icon} alt={day.day.condition.text} />
            <div>
              <p>Max: {day.day.maxtemp_c.toFixed()} °C</p>
              <p>Min: {day.day.mintemp_c.toFixed()} °C</p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default WeekForecast;
