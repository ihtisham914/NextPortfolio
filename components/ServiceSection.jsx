import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { AiFillFormatPainter } from "react-icons/ai";
import { MdSupport } from "react-icons/md";

const ServiceSection = () => {
  return (
    <section id="services" className="my-8 pt-28">
      {/* TAG */}
      <div className="flex items-center justify-center gap-4 py-2 px-5 text-white border border-gray rounded-full w-fit text-[12px]">
        <FaLaptopCode /> <span className="uppercase">services</span>
      </div>
      <p className="text-5xl mt-16 font-light tracking-wide">
        My <span className="text-primarycolor">Specialization</span>
      </p>

      {/* service */}
      <div className="w-full mt-14 flex flex-col gap-4">
        <div className="border border-gray p-10 rounded-3xl hover:border-primarycolor">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl">Design</h2>
            <AiFillFormatPainter className="text-3xl text-primarycolor" />
          </div>
          <p className="text-gray mt-2">
            I create beautifull design for web apps using Figma
          </p>
          <p className="uppercase mt-8 text-sm underline cursor-pointer">
            4 projects
          </p>
        </div>
        <div className="border border-gray p-10 rounded-3xl hover:border-primarycolor">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl">Development</h2>
            <FaLaptopCode className="text-3xl text-primarycolor" />
          </div>
          <p className="text-gray mt-2">
            I create beautifull web apps with MERN stack
          </p>
          <p className="uppercase mt-8 text-sm underline cursor-pointer">
            4 projects
          </p>
        </div>
        <div className="border border-gray p-10 rounded-3xl hover:border-primarycolor">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl">Maintenance</h2>
            <MdSupport className="text-3xl text-primarycolor" />
          </div>
          <p className="text-gray mt-2">
            I create beautifull web apps with MERN stack
          </p>
          <p className="uppercase mt-8 text-sm underline cursor-pointer">
            2 projects
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
