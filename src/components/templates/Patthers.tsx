"use client";

import React, { useState } from 'react';
import Image from "next/image";
import meusItens from "@/components/ArrayElements/ArrayElements";

import { Lobster } from 'next/font/google';

const lobster = Lobster({
  subsets: ['latin'],
  weight: '400',  
});

export default function Patters() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const Lista = meusItens;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % Lista.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 3 + Lista.length) % Lista.length);
  };

  return (
    <div className="flex flex-col patters h-[600px]">
      <h1 className="text-2xl font-bold mb-4 ">Partners:</h1>
      <div className='mt-[100px]'>
        <div id="animation-carousel" className="relative w-full" data-carousel="static">
          <div className="relative overflow-hidden rounded-lg md:h-96">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {Lista.map((lista, index) => (
                <div
                  key={lista.id}
                  className="w-1/3 flex-shrink-0 px-2"
                >
                  <div className="h-full flex flex-col justify-center items-center text-center">
                    <h1 className={`${lobster.className} font text-2xl mb-2`}>{lista.titulo}</h1>
                    <Image src={lista.imagem} alt={lista.titulo} width={70} height={70} className="mb-2" />
                    <div className="mt-2">
                      <p className="w-full max-w-[300px] text-sm">{lista.descricao}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        
          <button
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={prevSlide}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={nextSlide}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}