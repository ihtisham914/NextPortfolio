import React from "react";
import { FaUserGraduate } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="h-[90vh] flex flex-col items-start justify-center pt-2"
    >
      {/* TAG */}
      <div className="flex items-center justify-center gap-4 py-2 px-5 text-white border border-gray rounded-full w-fit text-[12px]">
        <FaUserGraduate /> <span className="uppercase">About</span>
      </div>
      <p className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl  mt-16 tracking-wide">
        Every great design begin with an even better story
      </p>
      <p className="text-gray mt-12">
        Since beginning my journey as a freelance designer nearly 8 years ago,
        I've done remote work for agencies, consulted for startups, and
        collaborated with talented people to create digital products for both
        business and consumer use. I'm quietly confident, naturally curious, and
        perpetually working on improving my chopsone design problem at a time.
      </p>
    </section>
  );
};

export default AboutSection;
