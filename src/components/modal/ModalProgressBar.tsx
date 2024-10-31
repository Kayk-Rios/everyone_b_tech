"use client";
import React, { useState } from "react";
import { Droplet } from "lucide-react";
import Image from "next/image";
import ImgeMulher from "@/components/assets/Vector.svg";
import ImagemMaoEquilibrio from "@/components/assets/MaoEqulibrio.svg";
import Empresario from "@/components/assets/empresario.svg";
import  Elipse from "@/components/assets/Ellipse 2.svg";
export const ClickProgressBar = () => {
  const [clicks, setClicks] = useState(1);
  const maxClicks = 10; // Total de cliques necessários para completar

  // Calcula a porcentagem de progresso baseada nos cliques
  const progress = Math.min((clicks / maxClicks) * 100, 100);

  const handleClick = () => {
    if (clicks < maxClicks) {
      setClicks((prev) => prev + 1);
    }
  };

  return (
    <div className=" max-w-md mx-auto space-y-8 w-[260px]">
      {/* Container da barra de progresso */}
      <div className="relative w-full h-4 bg-white rounded-full">
        {/* Barra de progresso verde */}
        <div
          className="h-full bg-green-400 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />

        {/* Círculo indicador */}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-gray-800 rounded-full border-2 -ml-3 flex items-center justify-center transition-all duration-300"
          style={{ left: `${progress}%` }}
        >
          <span>
            <Image
              src={ImgeMulher}
              width={40}
              height={40}
              alt="Mulher status"
            />
          </span>
        </div>
      </div>

      {/* Marcadores em forma de gota */}
      <div className="relative w-full">
        <div
          className={`absolute left-1/4 -translate-x-1/2 transition-transform duration-300 ${
            progress >= 25 ? "scale-110" : "scale-100 "
          }`}
        >
    

          <Image
            src={Elipse}
            width={80}
            height={40}
            alt="Mao status"
            className="relative ml-[-15px] mb-[10px] mt-[-20px]"
          />
            <Image
            src={ImagemMaoEquilibrio}
            width={20}
            height={20}
            alt="Mao status"
            className={`w-8 h-8 absolute mt-[-44px] mr-[-90px] `}
          />  
          
        </div>

        <div
          className={`absolute left-3/4 -translate-x-1/2 transition-transform duration-300  ${
            progress >= 75 ? "scale-110" : "scale-100"
          }`}
        >
            <Image
            src={Elipse}
            width={80}
            height={40}
            alt="Mao status"
            className="relative ml-[-20px] mb-[10px] mt-[-20px]"
          />
            <Image
            src={Empresario}
            width={20}
            height={20}
            alt="Mao status"
            className={`w-8 h-8 absolute mt-[-40px] mr-[-80px] `}
          />
        </div>
      </div>

      {/* Botão de clique */}
      <div className="flex justify-center pt-8">
        {/* <button
          onClick={handleClick}
          disabled={clicks >= maxClicks}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg transform transition-all duration-150 
            hover:bg-blue-600 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {clicks >= maxClicks ? "Completo!" : "Clique para Progredir"}
        </button> */}
      </div>
    </div>
  );
};

const DemoClickProgressBar = () => {
  return (
    <div className="  p-4 rounded-lg">
      <ClickProgressBar />
    </div>
  );
};

export default DemoClickProgressBar;
