"use client";

import React from 'react';
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="z-10 bg-gray-100 px-40 py-36 gap-40">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
            Thais Davi Rosenau — Advogada Previdenciária
            </h1>
            <p className="text-lg text-gray-600 mb-6">
            Atuando de forma séria e transparente com benefícios e aposentadorias do INSS
            </p>
            <div className="flex space-x-4">
              <button className="px-8 py-3 bg-[#4A3AFF] hover:bg-[#2a3679] text-white font-bold rounded-md">Saiba mais → </button>
              <button className="px-8 py-3 bg-gray-300 hover:bg-gray-400 text-gray-900 font-bold rounded-md">Entrar em contato </button>
            </div>
          </div>
          <div className="md:w-1/2 order-1 md:order-2 mt-8 md:mt-8">
            <Image
              src="/images/hero.png"
              alt="Company Image"
              width={920}
              height={740}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
