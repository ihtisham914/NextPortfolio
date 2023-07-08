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
  SiFirebase,
  SiNodedotjs,
} from "react-icons/si";

export const projects = [
  {
    name: "Community cleanup",
    demo: "https://fyp-wsscm-system.vercel.app",
    code: "https://gitlab.com/grey-software/nest/community-cleanup",
    image: "/sttrand.png",
    desc: "An PWA for WSSC's of KPK",
    tags: [
      {
        name: "NextJs",
        icon: <SiNextdotjs />,
      },
      // {
      //   name: "TypeScript",
      //   icon: <SiTypescript />,
      // },
      {
        name: "Node",
        icon: <SiNodedotjs />,
      },
      {
        name: "MongoDb",
        icon: <SiMongodb />,
      },
    ],
  },
  {
    name: "Chatify",
    demo: "https://chatify-react.vercel.app",
    code: "https://github.com/ihtisham914",
    image: "/chatify.png",
    desc: "An instant web chatting app",
    tags: [
      {
        name: "React",
        icon: <FaReact />,
      },
      {
        name: "Firebase",
        icon: <SiFirebase />,
      },
    ],
  },
  {
    name: "Sttrand",
    demo: "https://chatify-react.vercel.app",
    code: "https://github.com/ihtisham914",
    image: "/sttrand.png",
    desc: "An informative website for B2B App",
    tags: [
      {
        name: "React",
        icon: <FaReact />,
      },
      {
        name: "Chakra-ui",
        icon: <SiChakraui />,
      },
    ],
  },
  {
    name: "Charsadwal Chapal",
    demo: "https://chatify-react.vercel.app",
    code: "https://github.com/ihtisham914",
    image: "/chappal.webp",
    desc: "An E-commerce website ",
    tags: [
      {
        name: "PHP",
        icon: <SiPhp />,
      },
    ],
  },
];
