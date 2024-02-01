import React from "react";
import { getCurrentDate } from "../utils/currentDate";
type Props = {
  data: string;
};

const Current = ({ data }: Props) => {
  const currentDate = getCurrentDate();
  const weatherIcon = data.current.condition.icon;
  return (
    <div className="flex flex-col mb-8 md:mb-0 items-start gap-2 w-1/2">
      <div className="flex items-center">
        <div>
          <h1 className="text-3xl text-white">Today</h1>
          <p className="text-white">{currentDate}</p>
        </div>
        {weatherIcon && (
          <div>
            <img
              className="w-[3.2rem] object-cover"
              src={weatherIcon}
              alt={data.current.condition.text}
            />
          </div>
        )}
      </div>
      <p className="text-5xl text-white">
        {data.current.temp_c.toFixed()}
        <span className="text-xl absolute ml-2"> °C</span>
      </p>
      <span className="text-white">{data.current.condition.text}</span>
    </div>
  );
};

export default Current;
