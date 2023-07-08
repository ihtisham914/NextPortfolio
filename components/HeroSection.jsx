import { AiFillHome } from "react-icons/ai";
import { BsArrowDownCircleFill } from "react-icons/bs";
import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section id="home" className="h-[90vh] pt-16">
      {/* TAG */}
      <div className="flex items-center justify-center gap-3 py-2 px-5 text-white border border-gray rounded-full w-fit text-[12px]">
        <AiFillHome /> <span className="uppercase">Introduce</span>
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-7xl font-extralight mt-16 leading-tight tracking-wide">
        Hello from <span className="text-primarycolor">Ihtisham</span>, Software
        Engineer and Web Developer
      </h2>
      <p className="text-gray text-lg mt-8">
        I am Committed to delivering high-quality results and motivated by my
        passion for technology and my dedication to my craft.
      </p>
      <Link
        href="#projects"
        className="mt-12 uppercase flex items-center justify-center gap-2 bg-black text-primarycolor hover:border-primarycolor py-2 px-6 rounded-full border-2 border-gray transition-all w-fit"
      >
        <BsArrowDownCircleFill className="text-xl" />
        <span className="text-md">Projects</span>
      </Link>
    </section>
  );
};

export default HeroSection;
