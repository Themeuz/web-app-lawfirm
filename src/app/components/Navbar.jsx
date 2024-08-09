"use client";
import Link from "next/link";
import NavLink from './NavLink';
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const navLinks = [
    {
        title: "Home",
        path: "#home",
    },
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
        dropdown: [
            {
                title: "Direito previdenciário",
                path: "#servico1",
            },
            {
                title: "Direito trabalhista",
                path: "#servico2",
            },
            {
                title: "Seguridade social",
                path: "#servico3",
            },
        ],
    },
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className='fixed left-0 right-0 z-10 bg-white bg-opacity-100'>
        <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2'>
            <Link href={"./"} className="text-2xl md:text-2xl text-black font-extralight">
            <img 
            src="/images/logo.png" 
            alt="logo"
            width={98}
            height={98}
            />
            </Link>
            <div className="mobile-menu block md:hidden">
                {navbarOpen ? (
                  <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-state-200 hover:text-black hover:border-black'>
                  <XMarkIcon className='h-5 w-5'/>
                </button>
              ) : (
                <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-state-200 hover:text-black hover:border-black'>
                  <Bars3Icon className='h-5 w-5'/>
                </button>
              )}
            </div>
            <div className='menu hidden p-2 px-96 md:block md:w-auto' id="navbar">
                <ul className='flex p-4 md:p-3 md:flex-row md:space-x-16'>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            {link.dropdown ? (
                                <div className="relative">
                                    <button onClick={() => setDropdownOpen(!dropdownOpen)} className="block py-2 pl-3 pr-4 text-black sm:text-xl rounded md:p-0 hover:text-gray-600 mt-3">
                                        {link.title}
                                    </button>
                                    {dropdownOpen && (
                                        <ul className="absolute bg-white shadow-md p-4">
                                            {link.dropdown.map((dropdownLink, index) => (
                                                <li key={index}>
                                                    <NavLink href={dropdownLink.path} title={dropdownLink.title} className="hover-underline" />
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ) : (
                                <NavLink href={link.path} title={link.title} className="hover-underline" />
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks} />:null}
    </nav>
  );
};

export default Navbar;