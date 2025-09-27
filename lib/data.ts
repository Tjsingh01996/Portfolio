import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Graduated bootcamp",
        location: "Miami, FL",
        description:
            "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
        icon: React.createElement(LuGraduationCap),
        date: "2019",
    },
    {
        title: "Front-End Developer",
        location: "Orlando, FL",
        description:
            "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
        icon: React.createElement(CgWorkAlt),
        date: "2019 - 2021",
    },
    {
        title: "Full-Stack Developer",
        location: "Houston, TX",
        description:
            "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
        icon: React.createElement(FaReact),
        date: "2021 - present",
    },
] as const;

export const projectsData = [
    {
        title: "Sports Gear Swag",
        description:
            "Custom Sports Apparels to Capture the Identity of your Brand. I was the full-stack developer. It has features like product management, user authentication, and payment processing.",
        tags: ["React", "MySql", "Ant Design", "Node.js", "Docker", "PHP", "Redis", "Fabric-Js"],
        imageUrl: corpcommentImg,
    },
    {
        title: "Troom",
        description:
            "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
        tags: ["PHP"],
        imageUrl: rmtdevImg,
    },
    {
        title: "Myillia",
        description:
            "Contributed to the development and maintenance of MyILIA® , a financial strategy and enrollment platform by NIW Companies .",
        tags: ["React", "MySQL", "Node Js", "GoLang"],
    },
    {
        title: "ILRC",
        description:
            "It is a admin dashboard to manage their website data show data in graphs Technology Used:",
        tags: ["React", "MySQL", "Laravel", "Google Chart"],
        imageUrl: wordanalyticsImg,
    },
] as const;

export const skillsData = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Git",
    "Docker",
    "Golang",
    "Redux",
    "Express",
    "PostgreSQL",
] as const;