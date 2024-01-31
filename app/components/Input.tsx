"use client";

import React from "react";
import { FaSearch } from "react-icons/fa";

const Input = () => {
  return (
    <form className="flex items-center md:w-2/4 w-full">
      <input
        className="p-2 w-full bg-transparent border-2 rounded-lg placeholder-white outline-none text-white"
        type="text"
        placeholder="Insira o nome da cidade"
      />
      <div className="ml-[-25px] text-white cursor-pointer">
        <FaSearch />
      </div>
    </form>
  );
};

export default Input;
