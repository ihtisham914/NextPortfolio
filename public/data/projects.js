import { FaHtml5, FaCss3Alt, FaReact, FaWordpressSimple } from "react-icons/fa";
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
import { FaElementor } from "react-icons/fa6";

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
    name: "Power Stations for SRSP",
    demo: "https://srspmhp.com/",
    code: "https://srspmhp.com/",
    image: "/srspmhp.png",
    desc: "An online power station management system for SRSP",
    tags: [
      {
        name: "NextJs",
        icon: <SiNextdotjs />,
      },
      {
        name: "JavaScript",
        icon: <SiJavascript />,
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
    image: "/carnaval.jpg",
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
        name: "HTML",
        icon: <FaHtml5 />,
      },
      {
        name: "CSS",
        icon: <FaCss3Alt />,
      },
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
  {
    name: "Buy Social Today",
    demo: "https://buysocialtoday.com/",
    code: "https://buysocialtoday.com/",
    image: "/buysocialtoday.png",
    desc: "A social media marketing agency for boosting your online presence",
    tags: [
      {
        name: "Wordpress",
        icon: <FaWordpressSimple />,
      },
      {
        name: "Elementor",
        icon: <FaElementor />,
      },
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
  {
    name: "Get Music Viral",
    demo: "https://getmusicviral.com/",
    code: "https://getmusicviral.com/",
    image: "/getmusicviral.png",
    desc: "Boosts your Tiktok, Spotify and Youtube channels.",
    tags: [
      {
        name: "Wordpress",
        icon: <FaWordpressSimple />,
      },
      {
        name: "Elementor",
        icon: <FaElementor />,
      },
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
