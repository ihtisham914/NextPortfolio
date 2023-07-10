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

export const projects = [
  {
    name: "Community cleanup",
    demo: "https://fyp-wsscm-system.vercel.app",
    code: "https://gitlab.com/grey-software/nest/community-cleanup",
    image: "/dummy.jpg",
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
    demo: "https://sttrand.vercel.app",
    code: "https://github.com/ihtisham914/Sttrand",
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
    name: "Guess Number Game",
    demo: "https://quiz-game-ihtisham914.vercel.app",
    code: "https://github.com/ihtisham914/QuizGame",
    image: "/dummy.jpg",
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
