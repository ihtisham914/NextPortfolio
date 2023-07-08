import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import ProfileCard from "@/components/ProfileCard";
import ResumeSection from "@/components/ResumeSection";
import ServiceSection from "@/components/ServiceSection";
import SkillSection from "@/components/SkillSection";
import { links } from "@/public/data/navbar";
import Link from "next/link";
import ProjectSection from "@/components/ProjectSection";
import TestimonialSection from "@/components/TestimonialSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="w-full m-6 flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row items-start justify-between gap-16">
      {/* card */}
      <ProfileCard />
      {/* main */}
      <div className="w-full lg:w-[70%] xl:w-[70%] max-w-4xl md:m-[auto] lg:ml-[370px] xl:ml-[450px] lg:mr-[100px] xl:mr-[100px]">
        {/* INTRODUCTION SECTION */}
        <HeroSection />

        {/* ABOUT SECTION */}
        <AboutSection />

        {/* RESUME SECTION */}
        <ResumeSection />

        {/* SERVICES SECTION */}
        <ServiceSection />

        {/* SKILLS SECTION */}
        <SkillSection />

        {/* PROJECTS SECTION */}
        <ProjectSection />

        {/* TESTiMONIAL SECTION */}
        <TestimonialSection />

        {/* CONTACT SECTION */}
        <ContactSection />
      </div>

      {/* side menu */}
      <div className="fixed top-0 right-2 w-[10%] h-[90vh] hidden sm:hidden md:hidden lg:flex xl:flex items-center justify-center">
        <div className="w-14 hover:w-40 overflow-x-hidden py-6 px-4 flex flex-col items-start gap-6 text-lg text-gray border border-gray hover:rounded-3xl transition-all rounded-full bg-black">
          {links.map((link, index) => (
            <Link
              title={link.name}
              key={index}
              href={link.link}
              className="flex items-center gap-5 hover:text-primarycolor cursor-pointer transition-all"
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
