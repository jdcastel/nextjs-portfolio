import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoCPlusPlus } from "react-icons/bi";
import { FaReact, FaJava, FaNodeJs, FaGitAlt, FaDocker, FaGithub } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript, SiOracle, SiMongodb, SiMicrosoftazure, SiAmazonaws, SiDotnet, SiExpress, SiRedux, SiGithubactions } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

export const TECHNOLOGIES = [
  {
    category: "Programming Languages",
    items: [
      { name: "C/C++", icon: <BiLogoCPlusPlus size={32} /> },
      { name: "Java", icon: <FaJava size={32}/> },
      { name: "JavaScript", icon: <IoLogoJavascript size={32} /> },
      { name: "Typescript", icon: <SiTypescript size={32} /> },
      { name: "HTML", icon: <AiFillHtml5 size={32} /> },
      { name: "CSS", icon: <DiCss3 size={32} /> }
    ]
  },
  {
    category: "Frameworks and Libraries",
    items: [
      { name: ".NET", icon: <SiDotnet size={32} /> },
      { name: "React.js", icon: <FaReact size={32} /> },
      { name: "Next.js", icon: <TbBrandNextjs size={32} /> },
      { name: "Express.js", icon: <SiExpress size={32} /> },
      { name: "Redux.js", icon: <SiRedux size={32} /> },
      { name: "Node.js", icon: <FaNodeJs size={32} /> },
    ]
  },
  {
    category: "Databases",
    items: [
      { name: "Oracle", icon: <SiOracle size={32} /> }, 
      { name: "MongoDB", icon: <SiMongodb size={32} /> }, 
      { name: "PL/SQL", icon: <GrMysql size={32} /> } 
    ]
  },
  {
    category: "Technologies and Tools",
    items: [
      { name: "Docker", icon: <FaDocker size={32} />  }, 
      { name: "Microsoft Azure", icon: <SiMicrosoftazure size={32} /> }, 
      { name: "AWS", icon: <SiAmazonaws size={32} /> }, 
      { name: "Git", icon: <FaGitAlt size={32} />  }, 
      { name: "GitHub", icon: <FaGithub size={32} /> },
      { name: "CI/CD", icon: <SiGithubactions size={32} /> }, 
    ]
  }
];
