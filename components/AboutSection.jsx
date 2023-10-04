import React from "react";
import { FaUserGraduate } from "react-icons/fa";
import Tag from "./Tag";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="h-[90vh] flex flex-col items-start justify-center pt-2"
    >
      {/* TAG */}
      <Tag icon={<FaUserGraduate />} text="About" />
      <p className="text-3xl font-light sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl  mt-16 tracking-wide">
        Every Captivating{" "}
        <span className="text-primarycolor">Tech Endeavor</span> Commences with
        a Remarkable Journey
      </p>
      <p className="text-gray mt-12">
        I am a software engineer and MERN developer, and my journey began with
        HTML, CSS, and JavaScript, leading me to immerse myself in the
        captivating world of React for two transformative years. During this
        time, I had the honor of collaborating with the esteemed "Grey Software"
        on a groundbreaking Final Year Project, leaving an indelible mark on my
        path. This experience taught me a great deal, highlighting the magical
        possibilities of technology and serving as a testament to my passion and
        dedication as I continue to evolve and create, driven by the belief that
        technology can shape the world in unimaginable ways.
      </p>
    </section>
  );
};

export default AboutSection;
