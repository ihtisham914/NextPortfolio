import Image from "next/image";
import React from "react";
import {
  BiSolidCommentDetail,
  BiChevronLeft,
  BiChevronRight,
} from "react-icons/bi";

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="my-8 pt-28">
      {/* TAG */}
      <div className="flex items-center justify-center gap-4 py-2 px-5 text-white border border-gray rounded-full w-fit text-[12px]">
        <BiSolidCommentDetail /> <span className="uppercase">Testimonial</span>
      </div>
      <p className="text-5xl mt-16 font-light tracking-wide">
        Trusted by{" "}
        <span className="text-primarycolor">Hundereds of clients</span>
      </p>

      {/* testiminial */}
      <div className="mt-8">
        {/* SLIDER */}
        <div className="flex overflow-x-hidden w-full sm:w-full md:w-full lg:w-[50vw] xl:w-[50vw]">
          {/* SLIDE */}
          <div className="w-full m-2 border border-gray p-4 sm:p-8 md:12 lg:p-14 xl:p-14 rounded-3xl">
            <div className="flex items-start gap-4">
              <Image
                src="/mydp.jpg"
                className="rounded-full"
                height={50}
                width={50}
                alt=""
              />
              <span className="text-xl">John Doe</span>
            </div>

            <p className="mt-8 text-2xl">
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
              quaerat cum velit minima natus vel tempora molestias. Voluptas
              temporibus necessitatibus sit recusandae."
            </p>
          </div>
          {/* <div className="w-full m-2 border border-gray p-8 rounded-3xl translate-x-[250%]">
            <div className="flex items-start gap-4">
              <Image
                src="/mydp.jpg"
                className="rounded-full"
                height={50}
                width={50}
                alt=""
              />
              <span className="text-xl">Alyan</span>
            </div>

            <p className="mt-8 text-2xl">
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
              quaerat cum velit minima natus vel tempora molestias. Voluptas
              temporibus necessitatibus sit recusandae."
            </p>
          </div> */}

          {/* <div className="w-[80%] m-2 border border-gray p-8 rounded-3xl translate-x-[500%]">
            <div className="flex items-start gap-4">
              <Image
                src="/mydp.jpg"
                className="rounded-full"
                height={50}
                width={50}
                alt=""
              />
              <span className="text-xl">Farhan</span>
            </div>

            <p className="mt-8 text-2xl">
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
              quaerat cum velit minima natus vel tempora molestias. Voluptas
              temporibus necessitatibus sit recusandae."
            </p>
          </div> */}
        </div>

        {/* navigation */}
        <div className="flex items-center gap-8 mt-6">
          <div className="p-2 border border-gray rounded-full text-3xl hover:text-primarycolor hover:border-primarycolor transition-all cursor-pointer">
            <BiChevronLeft />
          </div>
          <div className="p-2 border border-gray rounded-full text-3xl hover:text-primarycolor hover:border-primarycolor transition-all cursor-pointer">
            <BiChevronRight />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
