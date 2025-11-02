import React from "react";
import {CgWorkAlt} from "react-icons/cg";
import {LuGraduationCap} from "react-icons/lu";
import undeadsImg from "@/public/projects/undeads.jpeg";
import puzzlefightImg from "@/public/projects/puzzlefight.png";
import handycandyImg from "@/public/projects/handycandy.png";
import bingoImg from "@/public/projects/bingo.png";
import match3Img from "@/public/projects/match3.png";
import enguImg from "@/public/projects/engu.png";
import reactorImg from "@/public/projects/reactor.jpg";
import amongusImg from "@/public/projects/amongus.png";
import cosmoCarImg from "@/public/projects/cosmoCar.png";
import ragalikImg from "@/public/projects/ragalik.png";
import vizqImg from "@/public/projects/vizq.png";
import ghostUkraineImg from "@/public/projects/ghostUkraine.png";
import mrEscapeImg from "@/public/projects/mrEscape.png";
import dadSimulatorImg from "@/public/projects/dadSimulator.png";
import wormImg from "@/public/projects/worm.jpg";

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

export const projectsData = [
    {
        slug: "engu-education-platform",
        title: "ENGU - Educational platform",
        description:
            "Leading the transition to new platforms, setting up stable CI/CD Jenkins pipelines.",
        tags: ["C#", "Jenkins", "CI/CD", "macOS"],
        imageUrl: enguImg,
        learnMoreUrl: "https://edu.ylands.com",
        detailPath: "/projects/engu-education-platform",
    },
    {
        slug: "vizq-vr-therapeutic-app",
        title: "VIZQ - VR therapeutic app",
        description:
            "Led the development of a VR therapeutic application for autistic children. Architected a scenario-based guidance system. Implemented dynamic VR avatars with IK.",
        tags: ["VR", "IK", "Unity", "AI"],
        imageUrl: vizqImg,
        learnMoreUrl: "https://vizq.com",
        detailPath: "/projects/vizq-vr-therapeutic-app",
    },

    {
        slug: "match3-stars-casual-pvp",
        title: "Match3 Stars - Casual PVP",
        description:
            "Casual PVP Match3 game using Akka and AWS. Developed multilayer dynamics, meta mini-games, optimized game logic, and built a reactive UI.",
        tags: ["Unity", "C#", "Akka", "AWS", "Multiplayer"],
        imageUrl: match3Img,
        learnMoreUrl:
            "https://play.google.com/store/apps/details?id=com.matchstars.match3starspvpchampions",
        detailPath: "/projects/match3-stars-casual-pvp",
    },
    {
        slug: "bingo-casual",
        title: "Bingo - Casual bingo",
        description:
            "Casual bingo game. Developed backend on AWS to ensure stable multiplayer interactions, smooth performance, and responsive UI.",
        tags: ["Unity", "C#", ".NET", "AWS", "Multiplayer"],
        imageUrl: bingoImg,
        learnMoreUrl:
            "https://play.google.com/store/apps/details?id=com.Galaxy4Games.BingoLoveinMontana&hl=en_US&gl=US",
        detailPath: "/projects/bingo-casual",
    },
    {
        slug: "undeads-mmorpg-survival",
        title: "Undeads MMORPG - MMORPG survival",
        description:
            "MMORPG survival game on the Ethereum blockchain with in-game NFTs. Built scalable architectures using AWS, Mirror, and a custom .NET server.",
        tags: ["Unity", "C#", ".NET", "Blockchain", "AWS", "Mirror"],
        imageUrl: undeadsImg,
        learnMoreUrl: "https://undeads.com/",
        detailPath: "/projects/undeads-mmorpg-survival",
    },
    {
        slug: "puzzle-fight-match3-pvp",
        title: "Puzzle Fight - Real-time Match-3 PvP",
        description:
            "Real-time Match-3 PvP game. Architected backend with AWS and .NET for seamless multiplayer, matchmaking, and in-game economy.",
        tags: ["Unity", "C#", ".NET", "AWS", "Mirror", "Match-3"],
        imageUrl: puzzlefightImg,
        learnMoreUrl:
            "https://galaxy4games.com/our-work/projects/puzzlefight/",
        detailPath: "/projects/puzzle-fight-match3-pvp",
    },
    {
        slug: "handy-candy-hyper-casual",
        title: "Handy Candy - Personal HC",
        description:
            "Hyper-casual mobile title. Created reusable game systems to reduce development time and support rapid prototyping for quality releases.",
        tags: ["Unity", "C#", "Android/iOS", "Clean Code", "2D/3D"],
        imageUrl: handycandyImg,
        learnMoreUrl: "https://gitlab.com/unitysource/projects/bear",
        detailPath: "/projects/handy-candy-hyper-casual",
    },
    {
        slug: "cosmo-car-hyper-casual",
        title: "Cosmo Car - Personal HC",
        description:
            "Personal hyper-casual project featuring procedural road generation and vehicle control mechanics for engaging gameplay.",
        tags: ["Unity", "C#", "Hyper-casual", "Procedural"],
        imageUrl: cosmoCarImg,
        learnMoreUrl: "https://gitlab.com/unitysource/projects/cosmo-car",
        detailPath: "/projects/cosmo-car-hyper-casual",
    },
    {
        slug: "among-us-personal",
        title: "Among Us - Personal",
        description:
            "Team project under tight deadlines. Implemented IO-based gameplay and a simulated multiplayer system to capture cooperative challenges.",
        tags: ["Unity", "C#", "Multiplayer", "Game Jam"],
        imageUrl: amongusImg,
        learnMoreUrl: "https://gitlab.com/unitysource/projects/among-us",
        detailPath: "/projects/among-us-personal",
    },
    {
        slug: "reactor-arkanoid",
        title: "Reactor - Indie Arkanoid",
        description:
            "Indie Arkanoid idle project. Brainstormed ideas, documented gameplay mechanics, and prepared for public presentation in an indie setup.",
        tags: ["Unity", "C#", "Indie", "Arkanoid"],
        imageUrl: reactorImg,
        learnMoreUrl: "https://gitlab.com/unitysource/projects/reactor",
        detailPath: "/projects/reactor-arkanoid",
    },
    {
        slug: "ragalik-roguelike",
        title: "Ragalik - Roguelike",
        description:
            "Roguelike game exploring world mechanics, weapon systems, and pathfinding. Project stalled early but showcased promising design efforts.",
        tags: ["Unity", "C#", "Roguelike", "Pathfinding"],
        imageUrl: ragalikImg,
        learnMoreUrl: "https://gitlab.com/unitysource/projects/ragalik",
        detailPath: "/projects/ragalik-roguelike",
    },
    {
        slug: "worm-hyper-casual",
        title: "Worm - Personal HC",
        description:
            "Personal hyper-casual project featuring spline development and mesh generation for a unique, dynamic gameplay experience.",
        tags: ["Unity", "C#", "Hyper-casual", "Mesh"],
        imageUrl: wormImg,
        learnMoreUrl: "https://gitlab.com/unitysource/wormrearchitect",
        detailPath: "/projects/worm-hyper-casual",
    },
    {
        slug: "mr-escape-puzzle",
        title: "Mr Escape - Puzzle",
        description:
            "Puzzle game with a physics engine. Completed as a test project using off-the-shelf packages with custom animation tweaks.",
        tags: ["Unity", "C#", "Puzzle", "Physics"],
        imageUrl: mrEscapeImg,
        learnMoreUrl: "https://gitlab.com/unitysource/projects/mr-escape",
        detailPath: "/projects/mr-escape-puzzle",
    }
] as const;

export const experiencesData = [
    {
        title: "Programmer",
        location: "Prague, Czech Republic (Hybrid)",
        description:
            "Leading the transition to new platforms, setting up stable CI/CD Jenkins pipelines.",
        icon: React.createElement(CgWorkAlt),
        date: "Jul 2025 – Present (Bohemia Interactive)",
    },
    {
        title: "Full Stack Developer",
        location: "Prague, Czech Republic (Remote)",
        description:
            "Freelance full stack developer, working on a variety of projects.",
        icon: React.createElement(CgWorkAlt),
        date: "Jun 2025 – Jul 2025 (Upwork)",
    },
    {
        title: "Full Stack Developer",
        location: "Prague, Czech Republic (Remote)",
        description:
            "Built a platform that transforms ideas into micro-courses with AI-driven content creation.",
        icon: React.createElement(CgWorkAlt),
        date: "Nov 2024 – Jun 2025 (Levenue Tech)",
    },
    {
        title: "VR Software Engineer",
        location: "Florida (Remote)",
        description:
            "Developed a VR therapeutic app for autistic children with AI-driven prompting on Quest devices. Created a scenario-based system and integrated VR avatars with IK for immersive, natural interactions.",
        icon: React.createElement(CgWorkAlt),
        date: "Sep 2024 – Dec 2024 (LucidRealityLabs)",
    },
    {
        title: "Lead Unity Engineer",
        location: "Estonia (Remote)",
        description:
            "Led a large-scale .NET-based Unity project, implementing interactive gameplay features and modular UI packages. Coordinated cross-functional teams to ensure performance and scalability.",
        icon: React.createElement(CgWorkAlt),
        date: "Jun 2023 – Sep 2024 (Galaxy4Games)",
    },
    {
        title: "Unity Software Engineer",
        location: "UK (Remote)",
        description:
            "Developed core .NET systems for an online multiplayer game, focusing on scalable networking and seamless interactions. Integrated new features, boosting engagement and ensuring timely delivery.",
        icon: React.createElement(CgWorkAlt),
        date: "Jul 2022 – Jun 2023 (Whimsy Games)",
    },
    {
        title: "Unity Developer",
        location: "Kiev, Ukraine (On-site)",
        description:
            "Created hyper-casual and casual .NET games with reusable systems, accelerating production. Mentored teammates on .NET workflows and optimized new and legacy code for better performance.",
        icon: React.createElement(CgWorkAlt),
        date: "Sep 2020 – May 2022 (Appside)",
    },
    {
        title: "Unity/C# Engineer",
        location: "Kyiv, Ukraine (On-site)",
        description:
            "Built casual and WebGL games in Unity and C#, establishing foundational systems for performance and streamlined workflows. Collaborated with designers and QA to integrate features smoothly.",
        icon: React.createElement(CgWorkAlt),
        date: "Aug 2019 – Mar 2020 (WOUFF)",
    },
    {
        title: "Bachelor degree in Information Systems",
        location: "Kyiv, Ukraine",
        description:
            "Bachelor's in Information Systems, Taras Shevchenko National University.",
        icon: React.createElement(LuGraduationCap),
        date: "Sep 2019 - Jun 2023",
    },
] as const;

// Adjusted hard skills to better reflect your portfolio's focus.
export const hardSkills = [
    "Unity, C#",
    "Multiplayer Systems",
    "AWS",
    "Mirror",
    "VR Development",
    "VR/Mobile Optimization",
    "CI/CD",
    "Git",
];

// Soft skills provided.
export const softSkills = [
    "Adaptability & Flexibility",
    "Communication",
    "Teamwork",
    "Problem-solving",
    "Emotional Intelligence",
];
