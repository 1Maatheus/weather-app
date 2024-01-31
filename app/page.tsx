"use client";
import React from "react";
import Input from "./components/Input";

export default function Home() {
  return (
    <>
      <div
        className="bg-cover- bg-gradient-to-b from-sky-500 to-sky-300
       h-screen"
      >
        <div className="bg-white/25 w-full flex-col h-full">
          <div className="flex flex-col md:flex-row justify-between items-center p-12">
            <Input />
            <h1 className="mt-10 md:mt-0">Weather App.</h1>
          </div>
        </div>
      </div>
    </>
  );
}
