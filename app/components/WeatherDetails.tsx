import React from "react";
import { BsSunrise, BsSunset } from "react-icons/bs";
import { GiWindSlap, GiCompass } from "react-icons/gi";
import { WiHumidity } from "react-icons/wi";
import { MdAir } from "react-icons/md";
import { CiTempHigh } from "react-icons/ci";
import { FaEye } from "react-icons/fa";

interface WeatherDetailsProps {
  data: {
    current: {
      wind_kph: number;
      humidity: number;
      wind_dir: string;
      pressure_mb: number;
      feelslike_c: number;
      vis_km: number;
    };
    forecast: {
      forecastday: {
        astro: {
          sunrise: string;
          sunset: string;
        };
      }[];
    };
  };
}

const WeatherDetails = ({ data }: WeatherDetailsProps | any) => {
  return (
    <>
      <div className="p-12">
        <h1 className="mb-4 text-2xl text-white">Weather Details</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="bg-white/90 flex py-4 px-8 items-center justify-between gap-6 rounded-xl">
            <div className="text-2xl">
              <h3>
                Velocidade do vento:
                <h3>{data.current.wind_kph} km/h</h3>
              </h3>
            </div>
            <div>
              <GiWindSlap fontSize={40} />
            </div>
          </div>

          <div className="bg-white/90 flex py-4 px-8 items-center justify-between gap-6 rounded-xl">
            <div className="text-2xl">
              <h3>
                Umidade do ar:
                <h3>{data.current.humidity}%</h3>
              </h3>
            </div>
            <div>
              <WiHumidity fontSize={40} />
            </div>
          </div>

          <div className="bg-white/90 flex py-4 px-8 items-center justify-between gap-6 rounded-xl">
            <div className="text-2xl">
              <h3>
                Direção do vento:
                <h3>{data.current.wind_dir}</h3>
              </h3>
            </div>
            <div>
              <GiCompass fontSize={40} />
            </div>
          </div>

          <div className="bg-white/90 flex py-4 px-8 items-center justify-between gap-6 rounded-xl">
            <div className="text-2xl">
              <h3>
                Nascer do sol:
                <h3>{data.forecast.forecastday[0].astro.sunrise}</h3>
              </h3>
            </div>
            <div>
              <BsSunrise fontSize={40} />
            </div>
          </div>

          <div className="bg-white/90 flex py-4 px-8 items-center justify-between gap-6 rounded-xl">
            <div className="text-2xl">
              <h3>
                Pôr do sol:
                <h3>{data.forecast.forecastday[0].astro.sunset}</h3>
              </h3>
            </div>
            <div>
              <BsSunset fontSize={40} />
            </div>
          </div>

          <div className="bg-white/90 flex py-4 px-8 items-center justify-between gap-6 rounded-xl">
            <div className="text-2xl">
              <h3>
                Pressão do ar:
                <h3>{data.current.pressure_mb} hPa</h3>
              </h3>
            </div>
            <div>
              <MdAir fontSize={40} />
            </div>
          </div>

          <div className="bg-white/90 flex py-4 px-8 items-center justify-between gap-6 rounded-xl">
            <div className="text-2xl">
              <h3>
                Sensção térmica:
                <h3>{data.current.feelslike_c} °C</h3>
              </h3>
            </div>
            <div>
              <CiTempHigh fontSize={40} />
            </div>
          </div>

          <div className="bg-white/90 flex py-4 px-8 items-center justify-between gap-6 rounded-xl">
            <div className="text-2xl">
              <h3>
                Visibilidade:
                <h3>{data.current.vis_km} km</h3>
              </h3>
            </div>
            <div>
              <FaEye fontSize={40} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherDetails;
