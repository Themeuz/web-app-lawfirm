import React from 'react';
import Image from "next/image";

const AboutSection = () => {
  return <section className='text-white'>
    <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 '>
        <img
        src="images/candelaria.png"
        alt="igreja candelaria"
        width={500}
        height={500} />
        <div>
            <h2 className='text-4xl font-extrabold'>Sobre nós</h2>
            <p className='text-[#BCBBC2] text-base sm:text-lg mb-6 lg:text-xl'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae veniam officia
                 quidem laudantium placeat praesentium quo facere cupiditate, soluta, earum maxime ipsa eveniet facilis alias minima corrupti assumenda vero in!
            </p>
            <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:flex-row md:space--16">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">INSS Case 2021</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Colocaremos aqui um caso para aumentar a veracidade da sua experiência ou até mesmo um artigo.</p>
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Ler mais...
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Processo trabalhista Case 2023</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Colocaremos aqui um caso para aumentar a veracidade da sua experiência ou até mesmo um artigo.</p>
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Ler mais...
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>
    </section>
}

export default AboutSection
