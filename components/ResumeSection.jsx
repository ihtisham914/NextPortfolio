"use client";
import React from "react";
import { FaBriefcase } from "react-icons/fa";

const ResumeSection = () => {
  return (
    <section id="resume" className="my-8 pt-16">
      {/* TAG */}
      <div className="flex items-center justify-center gap-4 py-2 px-5 text-white border border-gray rounded-full w-fit text-[12px]">
        <FaBriefcase /> <span className="uppercase">resume</span>
      </div>
      <p className="text-5xl mt-16 font-light tracking-wide">
        Education & <span className="text-primarycolor">Experience</span>
      </p>
      {/* TIMELINE */}
      <div className="flex flex-col items-start mt-14">
        <div className="flex items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-16 text-gray hover:text-primarycolor transition-all -mt-1 cursor-default">
          <div className="h-3 w-3 bg-gray rounded-full hover:bg-primarycolor transition-all"></div>
          <p className="-ml-1">2019 - 2023</p>
        </div>
        <div className="flex items-start gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-16">
          <div className="h-56 w-[1px] bg-gray -mt-[5px] ml-[5px]"></div>
          <div>
            <div className="mt-6">
              <p className="text-xl leading-5">Open Source Apprentice</p>
              <p className="mt-2 text-gray">Grey Software</p>
            </div>
            <div className="mt-6">
              <p className="text-xl leading-5">
                University of Engineering and Technology Mardan
              </p>
              <p className="mt-2 text-gray">BS Computer Software Engineering</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-16 text-gray hover:text-primarycolor transition-all -mt-1 cursor-default">
          <div className="h-3 w-3 bg-gray rounded-full hover:bg-primarycolor transition-all"></div>
          <p className="-ml-1">2017 - 2019</p>
        </div>
        <div className="flex items-start gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-16">
          <div className="h-40 w-[1px] bg-gray -mt-[5px] ml-[5px]"></div>
          <div>
            <div className="mt-6">
              <p className="text-xl leading-5">
                Quaid e Azam Group of Schools and Colleges
              </p>
              <p className="mt-2 text-gray">Fsc Pre-Engineering</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-16 text-gray hover:text-primarycolor transition-all -mt-1 cursor-default">
          <div className="h-3 w-3 bg-gray rounded-full hover:bg-primarycolor transition-all"></div>
          <p className="-ml-1">2015 - 2017</p>
        </div>
        <div className="flex items-start gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-16">
          <div className="h-24 w-[1px] bg-gray -mt-[5px] ml-[5px]"></div>
          <div>
            <div className="mt-8">
              <p className="text-xl leading-5">Iqra Education System</p>
              <p className="mt-2 text-gray">Matric</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
