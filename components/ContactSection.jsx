import React from "react";
import { MdEmail } from "react-icons/md";

const ContactSection = () => {
  return (
    <section id="contact" className="my-8 pt-28">
      <div className="flex items-center justify-center gap-4 py-2 px-5 text-white border border-gray rounded-full w-fit text-[12px]">
        <MdEmail /> <span className="uppercase">Contact</span>
      </div>
      <p className="text-5xl mt-16 font-light tracking-wide">
        Let's Work <span className="text-primarycolor">Together</span>
      </p>

      {/* CONTACT */}
      <p className="mt-4">shaami.khn321@gmail.com</p>
      <form
        action="https://formspree.io/f/mgejognr"
        method="post"
        className="mt-8 grid grid-col-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-y-12 items-center justify-between"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="uppercase text-sm">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="text-lg outline-none bg-black text-white placeholder:text-gray"
            placeholder="Your good name"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="uppercase text-sm">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="text-lg outline-none bg-black text-white placeholder:text-gray"
            placeholder="Your email address"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="subject" className="uppercase text-sm">
            Subject <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            required
            className="text-lg outline-none bg-black text-white placeholder:text-gray"
            placeholder="Enter subject"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="phone" className="uppercase text-sm">
            Phone <span className="text-gray">(optional)</span>
          </label>
          <input
            type="phone"
            name="phone"
            id="phone"
            className="text-lg outline-none bg-black text-white placeholder:text-gray"
            placeholder="Your contact number"
          />
        </div>
        <div className="flex flex-col gap-1 ">
          <label htmlFor="message" className="uppercase text-sm">
            Message <span className="text-gray">(optional)</span>
          </label>
          <textarea
            type="text"
            name="message"
            id="message"
            className="text-lg outline-none bg-black text-white placeholder:text-gray "
            placeholder="Write your message here..."
          ></textarea>
        </div>
        <div></div>
        <button
          type="submit"
          className="uppercase flex items-center justify-center gap-2 bg-primarycolor text-background py-3 px-7 w-fit rounded-full border-2 border-primarycolor hover:bg-background hover:text-primarycolor text-sm transition-all"
        >
          <MdEmail className="text-lg" />
          <span className="text-md">send message</span>
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
