import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { BsCircleFill } from "react-icons/bs";
import { FaServer } from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { IProject, Service, Skill } from "./types";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "Create beautiful UI using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend Development",
    about:
      "handle database, server, api using <b>NodeJS, expressJS </b> & mongoDB",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about: "I can develop REST API using Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "Problem solving in HackerRank",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about: "Make beautiful UI using many kinds of framework",
  },
  {
    Icon: RiComputerLine,
    title: "Whatever",
    about: "Mid-level knowledge about Computer Hardware",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "70",
  },

  {
    Icon: BsCircleFill,
    name: "React",
    level: "70",
  },

  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Material UI",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Tailwind",
    level: "80",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Firebase",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "VS Code",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Heroku",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Illustrator",
    level: "50",
  },
];

export const projects: IProject[] = [
  {
    name: "ROAD-PEDAL",
    description: "Bycle realted project. It is a MERN-stack project",
    image_path:
      "/images/screencapture-road-padel-web-app-2022-01-16-19_48_34.png",
    deployed_url: "https://road-padel.web.app/",
    github_url: "https://github.com/rashidulrony/road-padel-client",
    category: ["react"],
    key_techs: ["React", "Material UI"],
  },
  {
    name: "ROAD-PEDAL",
    description: "Bycle realted project. It is a MERN-stack project",
    image_path:
      "/images/screencapture-road-padel-web-app-2022-01-16-19_48_34.png",
    deployed_url: "https://road-padel.web.app/",
    github_url: "https://github.com/rashidulrony/road-padel-client",
    category: ["react"],
    key_techs: ["React", "Material UI"],
  },

  {
    name: "ROAD-PEDAL",
    description: "Bycle realted project. It is a MERN-stack project",
    image_path:
      "/images/screencapture-road-padel-web-app-2022-01-16-19_48_34.png",
    deployed_url: "https://road-padel.web.app/",
    github_url: "https://github.com/rashidulrony/road-padel-client",
    category: ["react"],
    key_techs: ["React", "Material UI"],
  },
];
