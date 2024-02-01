"use client";

import React from "react";
import { FaSearch } from "react-icons/fa";

type Props = {
  handleSearch?(): (
    event:
      | React.KeyboardEvent<HTMLInputElement>
      | React.MouseEventHandler<SVGElement>
  ) => void;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
};

const Input = ({ handleSearch, setLocation }: Props) => {
  return (
    <form className="flex items-center md:w-2/4 w-full order-2 md:order-1">
      <input
        onChange={(e) => setLocation(e.target.value)}
        onKeyDown={handleSearch}
        className="p-2 w-full bg-transparent border-2 rounded-lg placeholder-white outline-none text-white"
        type="text"
        placeholder="Insira o nome da cidade"
      />
      <div className="ml-[-25px] text-white cursor-pointer">
        <FaSearch onClick={handleSearch} />
      </div>
    </form>
  );
};

export default Input;
