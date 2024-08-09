"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LinkedinIcon from '../../../public/images/linkedin.png'
import InstagramIcon from '../../../public/images/instagram.png'
import EmailIcon from '../../../public/images/email.webp'
import WhatsapIcon from '../../../public/images/whatsapp.png'

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-4xl font-bold text-slate-700 my-2">
        Receba conselhos e notícias do meio legal em seu E-mail.
        </h5>
        <p className="text-slate-400 mb-4 max-w-md">
          {" "}
          Entendemos as dificuldades e enfatizamos que suas questões legais trazem. Nossa equipe está empenhada em fornecer-lhe a atenção individual, comunicação e dedicação que você merece.
        </p>
        <div className="socials flex flex-row gap-9 w-56 mt-10">
          <Link href="Instagram.com">
            <Image src={InstagramIcon} alt="Instagram Icon" />
          </Link>
          <Link href="linkedin.com">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link href="Email.com">
            <Image src={EmailIcon} alt="Email Icon" />
          </Link>
          <Link href="wa.me/5541985180348">
            <Image src={WhatsapIcon} 
            alt="Whatsapp Icon"
            width={510}
            height={420} />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email enviado com sucesso
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-black block mb-2 text-sm font-medium"
              >
                Seu E-mail
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-white border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="jacob@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-black block text-sm mb-2 font-medium"
              >
                Título
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-white border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-black block text-sm mb-2 font-medium"
              >
                Mensagem
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-white border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="px-5 py-2.5 w-full sm:w-max rounded-lg bg-transparent hover:bg-white text-gray-600 border hover:border-blue-400 mt-2"
            >
              Envie a mensagem
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;