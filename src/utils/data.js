import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaReact,
  FaTwitter,
  FaHtml5,
  FaNodeJs 
} from "react-icons/fa";
import { IoLogoCss3 ,IoLogoJavascript } from "react-icons/io";
import { SiMongodb,SiExpress} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbBrandGithub } from "react-icons/tb";
import PROJECT_IMG_1 from "../assets/images/project_img1.jpeg";
import PROJECT_IMG_2 from "../assets/images/project_img2.png"
import PROJECT_IMG_3 from "../assets/images/project_img3.jpeg"
import PROJECT_IMG_4 from "../assets/images/project_img4.png"
export const MENU_LINKS = [
  { id: "01", label: "Home", offset: -100, to: "hero" },
  { id: "02", label: "Skills", offset: -80, to: "skills" },
  { id: "03", label: "About Me", offset: -80, to: "about" },
  { id: "04", label: "Projects", offset: -80, to: "projects" },
  { id: "05", label: "Contact", offset: -80, to: "contact" },
];
export const STATS = [
  { id: "01", count: "10", label: `Years of \nExperience` },
  { id: "02", count: "12", label: `Certifications \nEarned` },
  { id: "03", count: "43", label: `Projects \nCompleted` },
  { id: "04", count: "37+", label: `Happly \n Clients` },
];
export const SKILL_TABS = [
  { id: "01", label: "All", value: "all" },
  { id: "02", label: "Frontend", value: "frontend" },
  { id: "03", label: "Backend", value: "backend" },
  { id: "04", label: "Tools", value: "tools" },
  { id: "05", label: "Skills", value: "soft-skills" },
];
export const SKILLS = [
  {
    id: "01",
    icon: FaReact,
    skill: "React Js",
    progress: 95,
    type: "frontend",
    description:
      "Skilled in building scalable, component-based UIs with React, using hooks and API integration.",
  },
  {
    id: "02",
    icon: FaHtml5,
    skill: "HTML",
    progress: 95,
    type: "frontend",
    description:
      "Proficient in writing clean, semantic HTML for accessible and SEO-friendly web pages.",
  },
  {
    id: "03",
    icon: IoLogoCss3,
    skill: "CSS",
    progress: 80,
    type: "frontend",
    description:
      "Proficient in creating responsive, modern layouts using CSS Flexbox, Grid, and animations.",
  },
  {
    id: "04",
    icon: IoLogoJavascript ,
    skill: "JavaScript",
    progress: 95,
    type: "frontend",
    description:
      "Expert in modern JavaScript (ES6+), DOM manipulation, and asynchronous programming.",
  },
  {
    id: "05",
    icon: FaNodeJs,
    skill: "Node Js",
    progress: 95,
    type: "backend",
    description:
      "Experienced in backend development using Node.js for building fast, scalable servers.",
  },
  {
    id: "06",
    icon: SiExpress,
    skill: "Express Js",
    progress: 95,
    type: "backend",
    description:
      "Capable of creating robust RESTful APIs and middleware with Express.js.",
  },
  {
    id: "07",
    icon: SiMongodb,
    skill: "MongoDb",
    progress: 95,
    type: "backend",
    description:
      "Skilled in designing NoSQL schemas and performing database operations using MongoDB.",
  },
  {
    id: "08",
    icon: VscVscode,
    skill: "Vs Code",
    progress: 95,
    type: "tools",
    description:
      "Efficient in using VS Code with extensions, debugging, and Git integration for faster development.",
  },
  {
    id: "09",
    icon: TbBrandGithub,
    skill: "Git & Github",
    progress: 70,
    type: "tools",
    description:
      "Skilled in using Git for version control and GitHub for hosting, collaboration, and project management through branches, pull requests, and issue tracking.",
  },
];
export const ABOUT_ME = {
  content: `I'm  a passionate and detail-oriented developer with a strong foundation in computer science and hands-on experience in MERN-stack web development. I'm currently pursuing my B.Tech in Information Technology, where I’ve honed my skills in designing, developing, and deploying user-friendly web applications. I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js) and enjoy building clean, interactive interfaces backed by robust server-side logic. From creating responsive UIs to integrating cloud-based databases, I aim to deliver solutions that are both efficient and scalable.

Beyond coding, I’m always eager to explore new technologies, optimize performance, and contribute to collaborative projects. Whether it's developing a dynamic e-commerce site, an online learning platform, or a real-time application, I approach every project with curiosity and a commitment to quality.
Let’s connect and build something awesome!`,
  socialLinks: [
    { id: "01", label: "Facebook", icon: FaFacebook, link: "#" },
    { id: "02", label: "Instagram", icon: FaInstagram, link: "#" },
    { id: "03", label: "Linkdin", icon: FaLinkedin, link: "#" },
    { id: "04", label: "Twitter", icon: FaTwitter, link: "#" },
  ],
  email: "shahilag63@gmail.com",
  phone: "+91-8340718518",
};
export const PROJECTS = [
  {
    id: 1,
    title: "Notes App using React",
    image: PROJECT_IMG_4,
    tags: ["React"],
  },
  {
    id: 2,
    title: "Expense Tracker",
    image: PROJECT_IMG_1,
    tags: ["React", "MongoDb", "NodeJs", "ExpressJs"],
  },
  {
    id: 3,
    title: "Url Shortener",
    image: PROJECT_IMG_2,
    tags: ["React", "MongoDb", "NodeJs", "ExpressJs"],
  },
  {
    id: 4,
    title: "Bloging Website",
    image: PROJECT_IMG_3,
    tags: ["MongoDb", "NodeJs", "ExpressJs", "Ejs"],
  },
  {
    id: 5,
    title: "Project 5",
    image: PROJECT_IMG_2,
    tags: ["React"],
  },
];
