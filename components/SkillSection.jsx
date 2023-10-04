import React from "react";
import { FaTools } from "react-icons/fa";
import { skills } from "@/public/data/skills";
import Tag from "./Tag";

const SkillSection = () => {
  return (
    <section id="skills" className="my-8 pt-28">
      {/* TAG */}
      <Tag icon={<FaTools />} text="Skills" />
      <p className="text-5xl mt-16 font-light tracking-wide">
        My <span className="text-primarycolor">Advantages</span>
      </p>
      <div className="mt-10 flex items-center gap-4 flex-wrap">
        {skills.map((skill, index) => (
          <div className="flex flex-col items-center gap-3 mb-4">
            <div
              key={index}
              className="flex flex-col items-center gap-4 p-12 border-2 border-gray rounded-full hover:text-primarycolor hover:border-primarycolor cursor-default tranisition-all"
            >
              <span className={`text-6xl`}>{skill.icon}</span>
              <span className="text-primarycolor text-3xl">
                {skill.percent}%
              </span>
            </div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
