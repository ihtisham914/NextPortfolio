import React from "react";

const Tag = ({ icon, text }) => {
  return (
    <div className="flex items-center justify-center gap-4 py-2 px-5 text-white border-2 border-gray rounded-full w-fit text-[12px]">
      {icon} <span className="uppercase">{text}</span>
    </div>
  );
};

export default Tag;
