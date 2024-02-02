import React from "react";
import { BsSunrise, BsSunset } from "react-icons/bs";
import { GiWindSlap, GiCompass } from "react-icons/gi";
import { WiHumidity } from "react-icons/wi";

interface WeatherDetailsProps {
  data: {
    results: {
      wind_speedy: string;
      humidity: string;
      wind_cardinal: string;
      sunrise: string;
      sunset: string;
    };
  };
}

const WeatherDetails = ({ data }: WeatherDetailsProps | any) => {
  return (
    <>
      <div className="p-12">
        <h1 className="mb-4 pb-[0.7rem] text-2xl text-white">
          Weather Details
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="bg-white/90 flex py-4 px-8 items-center justify-between gap-6 rounded-xl">
            <div className="text-2xl">
              <h3>
                Velocidade do vento:
                <h3>{data.results.wind_speedy} km/h</h3>
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
                <h3>{data.results.humidity}%</h3>
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
                <h3>{data.results.wind_cardinal}</h3>
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
                <h3>{data.results.sunrise}</h3>
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
                <h3>{data.results.sunset}</h3>
              </h3>
            </div>
            <div>
              <BsSunset fontSize={40} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherDetails;
