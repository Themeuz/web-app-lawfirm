"use client";;
import React from 'react';
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
            <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>Advogada Thais e Roberto</h1>
            <p className='text-[#BCBBC2] text-base sm:text-lg mb-6 lg:text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, mollitia blanditiis! Consectetur blanditiis
                eveniet cumque commodi, ducimus dolor veritatis harum non quis! Repudiandae nostrum odio neque. Tempora corrupti ab quasi!
            </p>
            <div>
              <button className='px-10 py-6 w-full sm:w-fit rounded-none mr-2 bg-[#FFBF00] hover:bg-slate-300 text-black'>ENTRE EM CONTATO →</button>
            </div>
        </div>
          <div className='col-span-5 place-self-center mt-4 lg:mt-1'>
          <div className="rounded bg-[#FFBF00] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
          <img src="images/justica.png"
          className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
           alt="justice"
           width={390}
           height={390} />
          </div>
          </div>
        </div>
    </section>
  )
}

export default HeroSection