import React from "react";

import { AiFillCode, AiFillHome, AiOutlineGithub  } from "react-icons/ai";
import { GrResume } from "react-icons/gr";

const menuConfig = {
  sidebarData: [
    {
      id: "menu-0",
      title: "Home",
      path: "/portfolio",
      icon: <AiFillHome size={35} />,
      className: "nav-text",
    },
    {
      id: "menu-1",
      title: "Projects",
      path: "/projects",
      icon: <AiOutlineGithub size={35} />,
      className: "nav-text",
    },
    {
      id: "menu-3",
      title: "Skills",
      path: "/skills",
      icon: <AiFillCode size={35} />,
      className: "nav-text",
    },
    {
      id: "menu-4",
      title: "Resume",
      path: "/resume",
      icon: <GrResume size={35} />,
      className: "nav-text",
    },
  ],
};

export default menuConfig;
