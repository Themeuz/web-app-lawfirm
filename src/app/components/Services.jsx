import React from "react";

const AboutSection = () => {
  return (
    <section className="text-center bg-white py-44 px-96 mt-32">
      <div className="container mx-auto">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-800">
          Precisa de conselho jurídico profissional?
        </h1>
        <p className="text-xl mb-8 text-gray-600">
          Obtenha uma consulta com nossos especialistas jurídicos
        </p>
        <button className="bg-[#4A3AFF] hover:bg-[#5c4dff] text-white font-bold py-4 px-16 rounded focus:outline-none focus:shadow-outline text-2xl mt-24">
            Requisitar Consulta
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
