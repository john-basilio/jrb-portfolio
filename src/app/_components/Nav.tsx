"use client"
// Navigation Component, made for mobile first layout with 1000px separation mark for desktop and mobile.
// Main method: Create 2 navs for mobile and desktop viewport. Use media querry for hiding at different screen widths.
import Link from "next/link";
import { useState } from "react";

//Icon imports
import { FaBars, FaTimes } from "react-icons/fa";
import { TbInfoSquareRoundedFilled } from "react-icons/tb";
import { RiMessage3Fill } from "react-icons/ri";
import { CgMenuGridR } from "react-icons/cg";


export default function Nav() {
    // State to control the menu's visibility
    const [nav, setNav] = useState(false);
        // Function to toggle the menu's visibility and position
    const toggleMenu = () => {
        setNav(!nav);
    };

    // Declaring the nav links
    const links = [
        {id: 1,link: "about me", icon: <TbInfoSquareRoundedFilled />},
        {id: 2,link: "projects", icon: <CgMenuGridR />},
        {id: 3,link: "message me!", icon: <RiMessage3Fill />},
    ];


    return (
        <nav className="ubuntu-regular flex justify-between items-center w-full h-[3rem] px-4 desktop:px-[6rem] text-white bg-[#0E0E0E] sticky top-0">
            {/* This is the Logo name on the left most side of the navbar */}
            <div>
                <h1 className="text-[2rem] ml-2 ubuntu-bold">
                    <a 
                        href=""
                        rel="noreferrer" 
                        className="ubuntu-bold"
                    >
                        John
                    </a>
                </h1>
            </div>

            {/* The navbar for desktop view */}
            <ul className="hidden desktop:flex z-49 ">
                {links.map(({ id, link, icon }) => (
                    <li
                        key={id}
                        className="nav-links px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 hover:text-[#e0bd0d] duration-200 link-underline"
                    >
                      <Link href={`#${link}`} className="flex items-center justify-between space-x-1">
                        
                        {link}{icon}
                      </Link>
                    </li>
                ))}
            </ul>

            <div
                onClick={toggleMenu}
                className="cursor-pointer pr-4 z-50 text-white desktop:hidden"
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
            
            {/* The Navbar for mobile view */}
            <ul className={` desktop:hidden z-49 flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-[#0e0e0eb7] text-white transition-opacity duration-300 ease-in-out ${nav ? "opacity-100" : "opacity-0"}`}>
                {links.map(({ id, link, icon }) => (
                    <li
                        key={id}
                        className="px-4 cursor-pointer capitalize py-6 text-4xl"
                    >
                      <Link onClick={toggleMenu} href={`#${link}`} className="flex items-center justify-between space-x-1">
                          <span>{link}</span>
                          <span>{icon}</span>
                       </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
