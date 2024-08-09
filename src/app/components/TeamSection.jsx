"use client";
import React from 'react';
import Image from 'next/image';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa'; 
import { AiOutlineMail } from 'react-icons/ai';
import { TypeAnimation } from 'react-type-animation';

const TeamSection = () => {
  const people = [
    {
      name: 'John Doe',
      role: 'CEO',
      desc: 'Especialista em direito do consumidor',
      imageUrl: '/images/advogado-h.jpg',
    },
    {
      name: 'Jane Smith',
      role: 'CTO',
      desc: 'Especializada em direito trabalhista',
      imageUrl: '/images/advogada-m.jpg',
    },
  ];

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <span>
                <TypeAnimation
              sequence={[
                'Oferecendo solução para',
                1000,
                'Oferecendo solução para',
                1000,
                'Oferecendo solução para',
                1000,
                'Oferecendo solução para',
                1000
              ]}
              wrapper="span"
              speed={20}
              style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </span>
          <h2 className="text-3xl font-bold tracking-tight bg-[#4A3AFF] text-white sm:text-4xl">Conheça nosso time</h2>
          <p className="mt-6 text-lg leading-8 text-[#5F5C7F]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime perspiciatis quia fuga
            culpa placeat doloribus unde molestias quos dolorem, at, in nisi ratione quod! Quos alias ipsum debitis sit dolor?
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6 mt-12">
                <Image 
                  alt={person.name}
                  src={person.imageUrl}
                  className="h-44 w-44 rounded-lg"
                  width={1920}
                  height={1080}
                />
                <div>
                  <h3 className="text-lg font-extrabold text-[#2c2c2c] mb-2">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-[#4A3AFF]">{person.role}</p>
                  <p className="text-sm font-semibold leading-6 text-[#2c2c2c]">{person.desc}</p>
                  <div className="mt-4 flex gap-4">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <AiOutlineMail className="text-2xl hover:text-gray-500" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <FaLinkedinIn className="text-2xl hover:text-gray-500" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <FaInstagram className="text-2xl hover:text-gray-500" />
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TeamSection;