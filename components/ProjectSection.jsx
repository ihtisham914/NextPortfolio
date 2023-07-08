import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsGrid1X2Fill, BsGithub } from "react-icons/bs";
import { TbWorldCheck } from "react-icons/tb";
import { projects } from "@/public/data/projects";

const ProjectSection = () => {
  return (
    <section id="projects" className="my-8 pt-28">
      {/* TAG */}
      <div className="flex items-center justify-center gap-4 py-2 px-5 text-white border border-gray rounded-full w-fit text-[12px]">
        <BsGrid1X2Fill /> <span className="uppercase">Portfolio</span>
      </div>
      <p className="text-5xl mt-16 font-light tracking-wide">
        Featured <span className="text-primarycolor">Projects</span>
      </p>

      {/* Projects */}
      <div className=" mt-10 grid grid-col-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex items-center justify-center ${
              project.name === "Community cleanup" &&
              "col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2"
            } p-4 border border-gray hover:border-primarycolor rounded-3xl transition-all hover:scale-[1.02]`}
          >
            <div
              className={`${
                project.name === "Community cleanup" &&
                "w-full flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row items-center justify-between"
              }`}
            >
              <Image
                src={project.image}
                className={`rounded-2xl ${
                  project.name === "Community cleanup"
                    ? "h-52 sm:h-52 md:h-64 lg:h-64 xl:h-64 sm:w-80 md:w-[50%] lg:w-[50%] xl:w-[50%]"
                    : "h-52 w-80"
                }`}
                loading="lazy"
                height={200}
                width={300}
              />
              {/* tags */}
              <div
                className={`${
                  project.name === "Community cleanup" &&
                  "flex flex-col gap-4 justify-between"
                }`}
              >
                <div className="flex items-center flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 py-1 px-4 rounded-full w-fit bg-white text-black text-sm"
                    >
                      {tag.icon}
                      {tag.name}
                    </div>
                  ))}
                </div>

                {/* name */}
                <h1 className="mt-4 text-3xl font-bold">{project.name}</h1>
                <p>{project.desc}</p>

                {/* CALL TO ACTION */}
                <div className="flex items-center justify-between mt-4">
                  <Link
                    href={project.demo}
                    className="uppercase flex items-center justify-center gap-2 bg-primarycolor text-background py-2 px-4 rounded-full border-2 border-primarycolor hover:bg-background hover:text-primarycolor text-sm transition-all"
                  >
                    <TbWorldCheck className="text-lg" />
                    <span className="text-md">Demo</span>
                  </Link>
                  <Link
                    href={project.code}
                    className="uppercase flex items-center justify-center gap-2 bg-black text-primarycolor py-2 px-4 rounded-full border-2 border-primarycolor hover:bg-primarycolor hover:text-background text-sm transition-all"
                  >
                    <BsGithub className="text-lg" />
                    <span className="text-md">Code</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
