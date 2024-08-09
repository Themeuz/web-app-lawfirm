import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <img
          src="images/mulher-computador.png"
          alt="igreja candelaria"
          width={1920}
          height={1080}
        />
        <div>
          <h2 className="text-[#363636] text-4xl font-extrabold py-3">
            Sobre nós
          </h2>
          <p className="text-[#5a5a5a] text-base sm:text-lg mb-6 lg:text-xl mt-2 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            veniam officia quidem laudantium placeat praesentium quo facere
            cupiditate, soluta, earum maxime ipsa eveniet facilis alias minima
            corrupti assumenda vero in!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
             adipisci asperiores libero saepe doloribus
             repellendus, obcaecati at cumque quidem, suscipit quasi deserunt dolores. Quasi 
            corporis cupiditate saepe magni a autem!
          </p>
          <div className="flex flex-row justify-center items-center gap-2 py-6">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-black">
                  INSS Case 2021
                </div>
                <p className="text-gray-700 text-base">
                  Colocaremos aqui um caso para aumentar a veracidade da sua
                  experiência ou até mesmo um artigo.
                </p>
              </div>
              <div className="px-6 py-4">
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Ler mais...
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-black">
                  Previdenciária 2024
                </div>
                <p className="text-gray-700 text-base">
                  Colocaremos aqui um caso para aumentar a veracidade da sua
                  experiência ou até mesmo um artigo.
                </p>
              </div>
              <div className="px-6 py-4">
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Ler mais...
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;