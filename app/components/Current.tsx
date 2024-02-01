import React from "react";
import { getCurrentDate } from "../utils/currentDate";
import { FaLocationDot } from "react-icons/fa6";

interface CurrentProps {
  data: {
    current: {
      condition: {
        icon: string;
        text: string;
      };
      temp_c: number;
    };
    location: {
      name: string;
      region: string;
    };
  };
}

const Current = ({ data }: CurrentProps) => {
  const currentDate = getCurrentDate();
  const weatherIcon = data.current.condition.icon;
  return (
    <>
      <div className="flex flex-col mb-8 md:mb-8 items-center text-center lg:items-start lg:text-left gap-2 w-full sm:w-1/2">
        <div className="flex items-center">
          <div>
            <h1 className="text-3xl text-white">Hoje</h1>
            <p className="text-white">{currentDate}</p>
          </div>
          {weatherIcon && (
            <div>
              <img
                className="w-[3.2rem] object-cover hidden lg:block"
                src={weatherIcon}
                alt={data.current.condition.text}
              />
            </div>
          )}
        </div>
        <div>
          <p className="text-5xl text-white">
            {data.current.temp_c.toFixed()}
            <span className="text-xl absolute ml-2"> °C</span>
          </p>
          <span className="text-white">{data.current.condition.text}</span>
        </div>
        <div>
          <div className="flex items-center text-black bg-white/90 px-2 py-2 rounded-xl gap-3 w-full">
            <FaLocationDot />
            <span>
              {data.location.name}, {data.location.region}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Current;
