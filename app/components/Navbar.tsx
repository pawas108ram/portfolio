"use client";
import React from "react";

import Image from "next/image";
import Link  from "next/link";
import { Link as ScrollLink } from "react-scroll";


import { navbar } from "@/lib/navbar";

const Navbar = ({  }: {  }) => {
  const resume=process.env.NEXT_PUBLIC_RESUME_URL;
  
  return (
    <div className="bg-color-panel/80 p-4 w-full text-color-text lg:flex flex-row items-center justify-end sticky top-0 z-20 xs:hidden">
     
      <div className="flex flex-row items-center gap-8">
        {navbar.map((item) => (
          <ScrollLink
            activeClass="active"
            className="bg-black/20 py-2 px-4 rounded hover:bg-black/50 transition-all font-medium cursor-pointer text-lg"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            to={item.id}
            key={item.id}
          >
            <span>{item.name}</span>
          </ScrollLink>
        ))}
              <Link href={`${resume}`}    target='_blank' className="bg-black/20 py-2 px-4 rounded hover:bg-black/50 transition-all font-medium cursor-pointer text-lg">Resume</Link>
      </div>
    </div>
  );
};

export default Navbar;
