"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiGitlab } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import Link from "next/link";
import { links } from "@/public/data/navbar";

const ProfileCard = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className="block lg:fixed xl:fixed lg:top-8 xl:top-8 border-2 border-gray rounded-3xl  w-full lg:w-[25%] xl:w-[25%] h-[90%]">
      {/* OVERLAY */}
      {modal ? (
        <div
          onClick={() => {
            setModal(false);
          }}
          className={`fixed top-0 left-0 bottom-0 right-0 h-[100vh] w-[100vw] bg-slate-300 opacity-50 z-40${
            modal && "sm:block md:block lg:hidden xl:hidden"
          } `}
        ></div>
      ) : (
        ""
      )}

      {/* SIDE MENU */}
      <div
        className={`bg-black h-full w-[75vw] sm:w-[50vw] md:w-[40vw] p-12 flex items-start z-50 fixed top-0 right-0 transform transition-transform ${
          modal
            ? "translate-x-0 sm:translate-x-0 md:translate-x-0 lg:hidden xl:hidden"
            : "translate-x-[100vw] sm:translate-x-[100vw] md:translate-x-[100vw] lg:hidden xl:hidden"
        }`}
      >
        <div className="w-full">
          <div className="flex items-center justify-between w-full text-gray">
            <span>Menu</span>
            <div
              onClick={() => setModal(false)}
              className="p-3 border-2 border-gray rounded-full"
            >
              <MdClose />
            </div>
          </div>
          <div className="flex flex-col gap-4 items-start mt-16">
            {links.map((link, index) => (
              <a
                onClick={() => setModal(false)}
                title={link.name}
                key={index}
                href={link.link}
                className="flex items-center gap-5 text-gray hover:text-primarycolor cursor-pointer transition-all active:text-primarycolor"
              >
                {link.icon}
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between pt-6 sm:pt-6 md:pt-6 lg:pt-3 xl:pt-6 px-4">
        <Image
          src="/newlogo.png"
          className="hidden sm:hidden md:block lg:block xl:block rounded-3xl"
          width={35}
          height={35}
          alt="Logo"
        />
        <h1 className="text-2xl font-semibold">Ihtisham Ul Haq</h1>
        <div className="hidden sm:hidden md:block lg:hidden xl:hidden"></div>
        {/* SIDE MENU TOGGLE */}
        <div
          onClick={() => setModal(true)}
          className="z-30 fixed sm:fixed md:block lg:hidden xl:hidden top-11 right-8 p-3 bg-black border border-gray rounded-full"
        >
          <BiMenu />
        </div>
      </div>
      <div className="flex items-center flex-col gap-6 sm:gap-6 md:gap-6 lg:gap-3 xl:gap-6 mt-4 m-6">
        <Image
          src="/mydp.jpg"
          className="rounded-3xl h-[250px] sm:h-[250px] md:h-[250px] lg:h-[200px] xl:h-[250px] w-[250px] sm:w-[250px] md:w-[250px] lg:w-[200px] xl:w-[250px]"
          width={250}
          height={250}
          alt="Ihtisham's Dp"
        />
        <h2 className="text-xl font-semibold text-center">
          Software Engineer & Web Developer
        </h2>
        <p className="text-gray">&copy; Ihtisham. All Rights Reserved.</p>
        <div className="flex items-center justify-center gap-3">
          <Link
            href="https://www.linkedin.com/in/ihtisham-ul-haq-998669223"
            className="p-4 text-gray border-2 border-gray rounded-full transition-all hover:text-primarycolor hover:border-primarycolor"
          >
            <BsLinkedin />
          </Link>
          <Link
            href="https://github.com/ihtisham914"
            className="p-4 text-gray border-2 border-gray rounded-full transition-all hover:text-primarycolor hover:border-primarycolor"
          >
            <BsGithub />
          </Link>
          <Link
            href="https://gitlab.com/ihtisham914"
            className="p-4 text-gray border-2 border-gray rounded-full transition-all hover:text-primarycolor hover:border-primarycolor"
          >
            <SiGitlab />
          </Link>
        </div>
        <a
          href="#contact"
          className="uppercase flex items-center justify-center gap-2 bg-primarycolor text-background w-full p-3 rounded-full border-2 border-primarycolor hover:bg-background hover:text-primarycolor transition-all"
        >
          <MdEmail className="text-xl" />
          <span className="text-lg">Hire me!</span>
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
