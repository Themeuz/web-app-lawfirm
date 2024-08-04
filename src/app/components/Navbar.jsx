"use client";
import Link from "next/link";
import NavLink from './NavLink';
import { useState } from "react";

const navLinks = [
    {
        title: "Sobre",
        path: "#sobre",
    },
    {
        title: "Cases",
        path: "#cases",
    },
    {
        title: "Serviços",
        path: "#servicos",
    },
    {
        title: "Contato",
        path: "#contato",
    },
    
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className='fixed left-0 right-0 z-10 bg-[#121212] bg-opacity-60'>
        <div className='flex flex-wrap items-center justify-between mx-auto px-4'>
            <Link href={"./"} className="text-2xl md:text-2xl text-[#ffff] font-extralight">
            [LOGO DA FIRMA]
            </Link>
            <div className="mobile-menu block md:hidden">
                {navbarOpen ? (
                <button>
                    <Bars3Icon className="h-5 w-5" />
                </button> 
                ) : ( 
                <button></button>
            )}
            </div>
            <div className='menu hidden p-2 px-96 md:block md:w-auto' id="navbar">
                <ul className='flex p-4 md:p-3 md:flex-row md:space-x-16'>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <NavLink href={link.path} title={link.title} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </nav>
  );
};

export default Navbar