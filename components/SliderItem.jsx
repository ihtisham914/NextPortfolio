import React from "react";
import Image from "next/image";

const SliderItem = ({ item }) => {
  return (
    <div className="w-full m-2 border-2 border-gray p-4 sm:p-8 md:12 lg:p-14 xl:p-14 rounded-3xl">
      <div className="flex justify-between">
        <div className="flex items-start gap-4">
          <Image
            src={item.image}
            className="rounded-full border border-white"
            height={50}
            width={50}
            alt=""
          />
          <div className="flex flex-col gap-1">
            <span className="text-xl">{item.name}</span>
            <span className="text-xs text-gray">{item.date}</span>
          </div>
        </div>
        <Image
          src={item.company}
          className="h-8 w-20 rounded-lg"
          height={32}
          width={80}
          alt=""
        />
      </div>

      <p className="mt-8 text-xl">"{item.review}"</p>
    </div>
  );
};

export default SliderItem;
