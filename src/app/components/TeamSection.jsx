"use client";
import React from 'react';
import Image from 'next/image';

const TeamSection = () => {
  const people = [
    {
      name: 'John Doe',
      role: 'CEO',
      imageUrl: '/images/homem.jpg',
    },
    {
      name: 'Jane Smith',
      role: 'CTO',
      imageUrl: '/images/mulher.avif',
    },
  ];

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight bg-[#FFBF00] sm:text-4xl">Conheça nosso time</h2>
          <p className="mt-6 text-lg leading-8 text-[#BCBBC2]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime perspiciatis quia fuga
            culpa placeat doloribus unde molestias quos dolorem, at, in nisi ratione quod! Quos alias ipsum debitis sit dolor?
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <Image 
                  alt={person.name}
                  src={person.imageUrl}
                  className="h-32 w-32 rounded-full"
                  width={1080}
                  height={1900}
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-[#ffff]">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-[#40aeee]">{person.role}</p>
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
