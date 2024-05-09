import Hero_person from "./assets/images/Hero/person.png";
import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";
import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";
import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";
import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";
import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Austin Casquejo",
    firstName: "TinTanic",
    LastName: "",
    btnText: "Download CV",
    image: Hero_person,
    hero_content: [
      {
        count: "1",
        text: "Year of Experiencw in Web development",
      },
      {
        count: "10+",
        text: "Projects Completed",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Figma",
        para: "Lorem ipsum text  dummy",
        logo: figma,
      },
      {
        name: "Node js",
        para: "Lorem ipsum text  dummy",
        logo: nodejs,
      },
      {
        name: "Arduino",
        para: "Lorem ipsum text  dummy",
        logo: ps,
      },
      {
        name: "React",
        para: "Lorem ipsum text  dummy",
        logo: reactjs,
      },
      {
        name: "Sketch",
        para: "Lorem ipsum text  dummy",
        logo: sketch,
      },
      {
        name: "Python",
        para: "Lorem ipsum text  dummy",
        logo: python,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Skills",
    subtitle: "WHAT I CAN OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "Crafting digital visions to life by crafting dynamic and engaging websites.",
        logo: services_logo1,
      },
      {
        title: "Mobile App Development",
        para: "Transform ideas into intuitive and captivating mobile applications that resonate with the audience on smartphones and tablets.",
        logo: services_logo2,
      },
      {
        title: "APIs & Integrations",
        para: "Seamlessly connect systems and platforms to enhance efficiency and streamline processes.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: Hero_person,
    project_content: [
      {
        title: "austin-app",
        image: project1,
      },
      {
        title: "Zagana Mobile App",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
  },

  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hero_person,
    image2: Hero_person,
    para: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "austincasquejo@gmail.com",
        icon: GrMail,
        link: "mailto:austincasquejo.com",
      },
      {
        text: "+09289470680",
        icon: MdCall,
        link: "https://wa.me/9917877456",
      },
      {
        text: "austincasquejo",
        icon: BsInstagram,
        link: "https://www.instagram.com/austincasquejo/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2023",
  },
};
