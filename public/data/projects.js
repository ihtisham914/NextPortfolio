import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
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
import { BsFillCloudArrowUpFill } from "react-icons/bs";
import { BiLogoGraphql } from "react-icons/bi";

export const projects = [
  {
    name: "Community cleanup",
    demo: "https://fyp-wsscm-system.vercel.app",
    code: "https://gitlab.com/grey-software/nest/community-cleanup",
    image: "/wssc.png",
    video:
      "https://res.cloudinary.com/dgpwe8xy6/video/upload/v1695807400/Fyp-Demonstration-Final_1_ptzfvb.mp4",
    desc: "A community cleanup project in KPK revolutionizes WSSCs with a Progressive Web App, improving management, handling complaints, and monitoring employee activities for better service delivery.",
    tags: [
      {
        name: "NextJs",
        icon: <SiNextdotjs />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript />,
      },
      {
        name: "Tailwind",
        icon: <SiTailwindcss />,
      },
      {
        name: "Node",
        icon: <SiNodedotjs />,
      },
      {
        name: "Express",
        icon: <SiExpress />,
      },
      {
        name: "MongoDb",
        icon: <SiMongodb />,
      },
      {
        name: "Cloundinary",
        icon: <BsFillCloudArrowUpFill />,
      },
    ],
  },
  {
    name: "Chatify",
    demo: "https://chatify-react.vercel.app",
    code: "https://github.com/ihtisham914/ChatApplication-react-vite-firebase",
    image: "/chatifyp.png",
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
    name: "Carnaval radio",
    demo: "https://site.carnaval-radio.nl",
    code: "https://github.com/carnaval-radio/carnaval-radio-frontend",
    image: "/carnaval.png",
    desc: "A non-profit internet radio station focused on local carnaval music in the south of the Netherlands.",
    tags: [
      {
        name: "NextJs",
        icon: <SiNextdotjs />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript />,
      },
      {
        name: "GraphQl",
        icon: <BiLogoGraphql />,
      },
      {
        name: "Tailwind",
        icon: <SiTailwindcss />,
      },
    ],
  },
  {
    name: "Sttrand",
    demo: "https://sttrand.vercel.app",
    code: "https://github.com/ihtisham914/Sttrand",
    image: "/sttrandp.png",
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
    demo: "https://charsadwalchappal.000webhostapp.com",
    code: "https://github.com/ihtisham914/charsadwalChappalphp/tree/main/CharsadwalChappal",
    image: "/chappal.webp",
    desc: "An E-commerce website ",
    tags: [
      {
        name: "PHP",
        icon: <SiPhp />,
      },
    ],
  },
  {
    name: "Bankist",
    demo: "https://bankist-react-self.vercel.app",
    code: "https://github.com/ihtisham914/bankist-react",
    image: "/bankist.png",
    desc: "A minimalist banking app",
    tags: [
      {
        name: "React",
        icon: <FaReact />,
      },
      {
        name: "HTML",
        icon: <FaHtml5 />,
      },
      {
        name: "CSS",
        icon: <FaCss3Alt />,
      },
    ],
  },
  {
    name: "Guess Number Game",
    demo: "https://quiz-game-ihtisham914.vercel.app",
    code: "https://github.com/ihtisham914/QuizGame",
    image: "/game.png",
    desc: "A mathimatics quiz game",
    tags: [
      {
        name: "HTML",
        icon: <FaHtml5 />,
      },
      {
        name: "CSS",
        icon: <FaCss3Alt />,
      },
      {
        name: "JavaScript",
        icon: <SiJavascript />,
      },
    ],
  },
];
