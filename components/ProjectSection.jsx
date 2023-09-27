"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BsGrid1X2Fill, BsGithub } from "react-icons/bs";
import { TbWorldCheck } from "react-icons/tb";
import { projects } from "@/public/data/projects";
import { MdClose } from "react-icons/md";
const ProjectSection = () => {
  const [pic, setpic] = useState("");
  const [modal, setModal] = useState(false);
  return (
    <section id="projects" className="my-8 pt-28">
      {/* OVERLAY */}
      {modal && (
        <div
          onClick={() => {
            setModal(false);
            setpic("");
          }}
          className="fixed top-0 left-0 right-0 bottom-0 h-screen w-screen z-30 bg-gray bg-opacity-90"
        >
          <div className="absolute right-8 top-4 p-2 rounded-full border border-white text-white hover:border-red-500 hover:text-red-500 transition-all cursor-pointer z-50 text-lg">
            <MdClose />
          </div>
        </div>
      )}
      {/* show image */}
      {modal && (
        <img
          className="fixed top-[25%] sm:top-[20%] md:top-[20%] lg:top-0 xl:top-0 left-0 h-auto sm:h-auto md:h-auto lg:h-screen xl:h-screen w-[90vw] z-50"
          src={pic}
          alt="project picture"
        />
      )}

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
              {project.video ? (
                <video
                  src={project.video}
                  controls
                  className="h-52 sm:h-52 md:h-96 lg:h-96 xl:h-96 w-80 sm:w-80 md:w-[50%] lg:w-[45%] xl:w-[50%]"
                ></video>
              ) : (
                <Image
                  onClick={() => {
                    setpic(project.image);
                    setModal(true);
                  }}
                  src={project.image}
                  className={`rounded-2xl cursor-pointer ${
                    project.name === "Community cleanup"
                      ? "h-52 sm:h-52 md:h-96 lg:h-96 xl:h-96 w-80 sm:w-80 md:w-[50%] lg:w-[45%] xl:w-[50%]"
                      : "h-52 w-80"
                  }`}
                  loading="lazy"
                  height={1000}
                  width={1000}
                  alt={project.name}
                />
              )}
              {/* tags */}
              <div
                className={`${
                  project.name === "Community cleanup" &&
                  "flex flex-col gap-4 justify-between md:w-[45%] lg:w-[45%]"
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
                    target="_blank"
                    className="uppercase flex items-center justify-center gap-2 bg-primarycolor text-background py-2 px-4 rounded-full border-2 border-primarycolor hover:bg-background hover:text-primarycolor text-sm transition-all"
                  >
                    <TbWorldCheck className="text-lg" />
                    <span className="text-md">Demo</span>
                  </Link>
                  <Link
                    href={project.code}
                    target="_blank"
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
