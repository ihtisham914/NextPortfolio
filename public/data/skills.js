import { FaHtml5, FaReact, FaNode } from "react-icons/fa";
import {
  SiTailwindcss,
  SiChakraui,
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiMysql,
} from "react-icons/si";
import { BiLogoFigma } from "react-icons/bi";
import { BsGit } from "react-icons/bs";
import { TbBrandRedux } from "react-icons/tb";

export const skills = [
  {
    name: "HTML5",
    percent: 95,
    icon: <FaHtml5 />,
    color: "text-orange-600",
  },
  {
    name: "Tailwind",
    percent: 90,
    icon: <SiTailwindcss />,
    color: "text-blue-600",
  },
  {
    name: "Chakra-ui",
    percent: 60,
    icon: <SiChakraui />,
    color: "text-blue-400",
  },

  {
    name: "JavaScript",
    percent: 80,
    icon: <SiJavascript />,
    color: "text-yellow-500",
  },
  {
    name: "TypeScript",
    percent: 80,
    icon: <SiTypescript />,
    color: "text-yellow-500",
  },
  {
    name: "PHP",
    percent: 75,
    icon: <SiPhp />,
    color: "text-yellow-500",
  },
  {
    name: "React",
    percent: 90,
    icon: <FaReact />,
    color: "text-blue-500",
  },
  {
    name: "Redux",
    percent: 95,
    icon: <TbBrandRedux />,
    color: "text-blue-500",
  },
  {
    name: "Next",
    percent: 85,
    icon: <SiNextdotjs />,
    color: "text-white",
  },
  {
    name: "Node",
    percent: 70,
    icon: <FaNode />,
    color: "text-green-500",
  },
  {
    name: "Express",
    percent: 85,
    icon: <SiExpress />,
    color: "text-white",
  },
  {
    name: "MongoDb",
    percent: 75,
    icon: <SiMongodb />,
    color: "text-green-600",
  },
  {
    name: "Figma",
    percent: 65,
    icon: <BiLogoFigma />,
    color: "text-green-600",
  },
  {
    name: "Postman",
    percent: 85,
    icon: <SiPostman />,
    color: "text-green-600",
  },
  {
    name: "Git",
    percent: 80,
    icon: <BsGit />,
    color: "text-green-600",
  },
  {
    name: "MySql",
    percent: 78,
    icon: <SiMysql />,
    color: "text-green-600",
  },
];
