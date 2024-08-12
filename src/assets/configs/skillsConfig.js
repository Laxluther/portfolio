import {
    SiPython,
    
    SiMicrosoftsqlserver,
    SiDocker,
    SiMicrosoftazure,
    SiJetpackcompose,
    SiReact,
    SiJavascript,
    SiCss3,
    SiHtml5,
    SiAndroidstudio,
    SiApachekafka,
    SiPowerbi,
    SiApachecassandra,
    SiKotlin,
    SiApachespark
} from "react-icons/si";
import {GrMysql} from "react-icons/gr";
import {FaGitAlt} from "react-icons/fa";
import React from "react";

const skillsConfig = {
    mainSkills: [
        {
            id: "skills-0",
            className: "skill-icon",
            icon: <SiPython size={50}/>,
            text: "Python"
        },
        {
            id: "skills-1",
            className: "skill-icon",
            icon: <SiKotlin size={50}/>,
            text: "Kotlin"
        },
        {
            id: "skills-2",
            className: "skill-icon",
            icon: <SiMicrosoftsqlserver size={50}/>,
            text: "MSSQL"
        },
        {
            id: "skills-3",
            className: "skill-icon",
            icon: <GrMysql size={50}/>,
            text: "MySQL"
        },
        {
            id: "skills-4",
            className: "skill-icon",
            icon: <SiDocker size={50}/>,
            text: "Docker"
        },
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <SiMicrosoftazure size={50}/>,
            text: "Azure"
        },
        {
            id: "skills-6",
            className: "skill-icon",
            icon: <FaGitAlt size={50}/>,
            text: "Git"
        }
    ],
    complementarySkills: [
        
        {
            id: "skills-7",
            className: "skill-icon",
            icon: <SiAndroidstudio size={50}/>,
            text: "Android Studio"
        },
        {
            id: "skills-8",
            className: "skill-icon",
            icon: <SiJetpackcompose size={50}/>,
            text: "Jetpackcompose"
        },
        {
            id: "skills-9",
            className: "skill-icon",
            icon: <SiApachespark size={50}/>,
            text: "Spark"
        },
        {
            id: "skills-10",
            className: "skill-icon",
            icon: <SiApachecassandra size={50}/>,
            text: "Cassandra"
        },
        {
            id: "skills-11",
            className: "skill-icon",
            icon: <SiApachekafka size={50}/>,
            text: "Kafka"
        },
        {
            id: "skills-12",
            className: "skill-icon",
            icon: <SiJavascript size={50}/>,
            text: "JS"
        },
        {
            id: "skills-13",
            className: "skill-icon",
            icon: <SiCss3 size={50}/>,
            text: "CSS 3"
        },
        {
            id: "skills-14",
            className: "skill-icon",
            icon: <SiHtml5 size={50}/>,
            text: "HTML 5"
        },
        {
            id: "skills-15",
            className: "skill-icon",
            icon: <SiReact size={50}/>,
            text: "React"
        },
        {
            id: "skills-16",
            className: "skill-icon",
            icon: <SiPowerbi size={50}/>,
            text: "Power BI"
        }
    ]
}

export default skillsConfig
