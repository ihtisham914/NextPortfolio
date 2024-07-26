"use client";
import React, { Fragment, useState } from "react";
import {
  BiSolidCommentDetail,
  BiChevronLeft,
  BiChevronRight,
} from "react-icons/bi";
import { reviews } from "@/public/data/testimonials";
import SliderItem from "./SliderItem";
import Tag from "./Tag";

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex(activeIndex === reviews.length - 1 ? 0 : activeIndex + 1);
  };

  const prevSlide = () => {
    setActiveIndex(activeIndex === 0 ? reviews.length - 1 : activeIndex - 1);
  };
  return (
    <section id="testimonials" className="my-8 pt-28">
      {/* TAG */}
      <Tag icon={<BiSolidCommentDetail />} text="Testimonial" />
      <p className="text-5xl mt-16 font-light tracking-wide">
        Trusted by{" "}
        <span className="text-primarycolor">Hundereds of clients</span>
      </p>

      {/* testiminial */}
      <div className="mt-8 ">
        {/* SLIDER */}
        <div
          className={`transition-all flex justify-center overflow-x-hidden w-full sm:w-full md:w-full lg:w-[50vw] xl:w-[50vw]`}
        >
          {/* SLIDE */}
          {reviews.map((item, index) => {
            return activeIndex === index && <SliderItem key={index} item={item} />;
          })}
        </div>
        {/* navigation */}
        <div className="flex items-center gap-8 mt-6">
          <div
            onClick={prevSlide}
            className="p-2 border-2 border-gray rounded-full text-3xl hover:text-primarycolor hover:border-primarycolor transition-all cursor-pointer"
          >
            <BiChevronLeft />
          </div>
          <div
            onClick={nextSlide}
            className="p-2 border-2 border-gray rounded-full text-3xl hover:text-primarycolor hover:border-primarycolor transition-all cursor-pointer"
          >
            <BiChevronRight />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
