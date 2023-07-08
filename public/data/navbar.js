import { AiFillHome } from "react-icons/ai";
import {
  FaUserGraduate,
  FaTools,
  FaBriefcase,
  FaLaptopCode,
} from "react-icons/fa";
import { BsGrid1X2Fill } from "react-icons/bs";
import { BiSolidCommentDetail } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

export const links = [
  {
    name: "Home",
    icon: <AiFillHome />,
    link: "/#home",
  },
  {
    name: "About",
    icon: <FaUserGraduate />,
    link: "/#about",
  },
  {
    name: "Resume",
    icon: <FaBriefcase />,
    link: "/#resume",
  },
  {
    name: "Services",
    icon: <FaLaptopCode />,
    link: "/#services",
  },
  {
    name: "Skills",
    icon: <FaTools />,
    link: "/#skills",
  },
  {
    name: "Projects",
    icon: <BsGrid1X2Fill />,
    link: "/#projects",
  },
  {
    name: "Testimoials",
    icon: <BiSolidCommentDetail />,
    link: "/#testimonials",
  },
  {
    name: "Contact",
    icon: <MdEmail />,
    link: "#contact",
  },
];
