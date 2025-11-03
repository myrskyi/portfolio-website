import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
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
import mrEscapeImg from "@/public/projects/mrEscape.png";
import wormImg from "@/public/projects/worm.jpg";
import levenueImg from "@/public/projects/web/levenue/levenue_2.png";
import vocabchatImg from "@/public/projects/web/vocab-app/vocabchat1.png";
import pintedGuruImg from "@/public/projects/web/pinted/guru.png";

export const webProjectsData = [
  {
    slug: "levenue",
    title: "Levenue MiniCourses",
    description:
      "Bootstrapped a multi-tenant learning platform with mobile-first UI, lesson authoring, and automated billing flows.",
    tags: ["React", "Next.js", "TypeScript", "ASP.NET", "Azure DevOps"],
    imageUrl: levenueImg,
    learnMoreUrl: "https://levenue.tech",
    detailPath: "/projects/levenue",
  },
  {
    slug: "pinted-procurement-workspace",
    title: "Pinted - Procurement Workspace",
    description:
      "Coordinated two delivery squads to ship AI-assisted sourcing, intake workflows, and supplier dashboards.",
    tags: ["Python", "Docker", "REST API", "Azure DevOps"],
    imageUrl: pintedGuruImg,
    learnMoreUrl: "https://pinted.io/guru",
    detailPath: "/projects/pinted-procurement-workspace",
  },
  {
    slug: "vocabulary-practice-system",
    title: "Vocabulary Practice System",
    description:
      "Prototyped a Next.js experience that streamlines spaced repetition, sheet-driven content, and AI practice partners in under a week.",
    tags: ["Next.js", "TypeScript", "Vercel", "Sheets"],
    imageUrl: vocabchatImg,
    learnMoreUrl: "https://vocab-chat.vercel.app",
    detailPath: "/projects/vocabulary-practice-system",
  },
  {
    slug: "engu-education-extensions",
    title: "ENGU - Education Platform Extensions",
    description:
      "Scaled web services and CI/CD pipelines that power global classroom tools and curriculum delivery.",
    tags: ["Jenkins", "CI/CD", "CORS"],
    imageUrl: enguImg,
    learnMoreUrl: "https://edu.ylands.com",
    detailPath: "/projects/engu-education-extensions",
  },
  {
    slug: "vizq-therapy-portal",
    title: "VIZQ - Therapy Portal",
    description:
      "Delivered clinician dashboards, telemetry pipelines, and content management supporting VR therapy programs.",
    tags: ["React", "TypeScript", "Analytics", "VR"],
    imageUrl: vizqImg,
    learnMoreUrl: "https://vizq.com",
    detailPath: "/projects/vizq-therapy-portal",
  },
  {
    slug: "match3-stars-live-ops",
    title: "Match3 Stars - Live Ops Suite",
    description:
      "Built player segmentation tools, event scheduling, and telemetry dashboards for a live multiplayer title.",
    tags: ["C#", "Akka", "AWS", "Multiplayer"],
    imageUrl: match3Img,
    learnMoreUrl:
      "https://play.google.com/store/apps/details?id=com.matchstars.match3starspvpchampions",
    detailPath: "/projects/match3-stars-live-ops",
  },
  {
    slug: "bingo-game-services",
    title: "Bingo - Game Services Hub",
    description:
      "Stabilized backend services and created internal tooling for real-time operations teams.",
    tags: ["Unity", "C#", ".NET", "AWS", "Multiplayer"],
    imageUrl: bingoImg,
    learnMoreUrl:
      "https://play.google.com/store/apps/details?id=com.Galaxy4Games.BingoLoveinMontana&hl=en_US&gl=US",
    detailPath: "/projects/bingo-game-services",
  },
  {
    slug: "undeads-player-economy",
    title: "Undeads MMORPG - Player Economy",
    description:
      "Introduced blockchain-enabled item flows, transaction dashboards, and moderation tooling.",
    tags: ["Unity", "C#", ".NET", "Blockchain", "AWS", "Mirror"],
    imageUrl: undeadsImg,
    learnMoreUrl: "https://undeads.com/",
    detailPath: "/projects/undeads-player-economy",
  },
  {
    slug: "puzzle-fight-matchmaking-portal",
    title: "Puzzle Fight - Matchmaking Portal",
    description:
      "Implemented admin dashboards and telemetry to operate large-scale multiplayer events.",
    tags: ["Unity", "C#", ".NET", "AWS", "Mirror", "Match-3"],
    imageUrl: puzzlefightImg,
    learnMoreUrl:
      "https://galaxy4games.com/our-work/projects/puzzlefight/",
    detailPath: "/projects/puzzle-fight-matchmaking-portal",
  },
  {
    slug: "handy-candy-experimentation-toolkit",
    title: "Handy Candy - Experimentation Toolkit",
    description:
      "Created reusable UI flows and analytics instrumentation to speed up prototyping cycles.",
    tags: ["Unity", "C#", "Android/iOS", "Clean Code", "2D/3D"],
    imageUrl: handycandyImg,
    learnMoreUrl: "https://gitlab.com/unitysource/projects/bear",
    detailPath: "/projects/handy-candy-experimentation-toolkit",
  },
  {
    slug: "cosmo-car-internal-demo",
    title: "Cosmo Car - Internal Demo Platform",
    description:
      "Built procedural systems and internal dashboards to showcase concept KPIs to stakeholders.",
    tags: ["Unity", "C#", "Hyper-casual", "Procedural"],
    imageUrl: cosmoCarImg,
    learnMoreUrl: "https://gitlab.com/unitysource/projects/cosmo-car",
    detailPath: "/projects/cosmo-car-internal-demo",
  },
  {
    slug: "among-us-remote-play-test",
    title: "Among Us - Remote Play Test Portal",
    description:
      "Delivered tooling for distributed play testing, feedback loops, and release sign-offs.",
    tags: ["Unity", "C#", "Multiplayer", "Game Jam"],
    imageUrl: amongusImg,
    learnMoreUrl: "https://gitlab.com/unitysource/projects/among-us",
    detailPath: "/projects/among-us-remote-play-test",
  },
  {
    slug: "reactor-idle-analytics",
    title: "Reactor - Idle Analytics Stack",
    description:
      "Modeled retention dashboards and economy telemetry to guide feature roadmap decisions.",
    tags: ["Unity", "C#", "Indie", "Arkanoid"],
    imageUrl: reactorImg,
    learnMoreUrl: "https://gitlab.com/unitysource/projects/reactor",
    detailPath: "/projects/reactor-idle-analytics",
  },
  {
    slug: "ragalik-procedural-systems",
    title: "Ragalik - Procedural Systems",
    description:
      "Explored procedural content tooling, user research loops, and a service-ready API surface.",
    tags: ["Unity", "C#", "Roguelike", "Pathfinding"],
    imageUrl: ragalikImg,
    learnMoreUrl: "https://gitlab.com/unitysource/projects/ragalik",
    detailPath: "/projects/ragalik-procedural-systems",
  },
  {
    slug: "worm-content-pipeline",
    title: "Worm - Content Pipeline",
    description:
      "Built spline-driven level editors and internal dashboards for experiment tracking.",
    tags: ["Unity", "C#", "Hyper-casual", "Mesh"],
    imageUrl: wormImg,
    learnMoreUrl: "https://gitlab.com/unitysource/wormrearchitect",
    detailPath: "/projects/worm-content-pipeline",
  },
  {
    slug: "mr-escape-puzzle-prototype",
    title: "Mr Escape - Puzzle Prototype",
    description:
      "Delivered test harnesses, instrumentation, and release automation for a physics-focused title.",
    tags: ["Unity", "C#", "Puzzle", "Physics"],
    imageUrl: mrEscapeImg,
    learnMoreUrl: "https://gitlab.com/unitysource/projects/mr-escape",
    detailPath: "/projects/mr-escape-puzzle-prototype",
  },
] as const;

export const webExperiencesData = [
  {
    title: "Programmer",
    location: "Prague, Czech Republic (Hybrid)",
    description:
      "Coordinating platform modernization, strengthening CI/CD pipelines, and shipping web tooling with product and QA teams.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2025 – Present (Bohemia Interactive)",
  },
  {
    title: "Full Stack Developer",
    location: "Prague, Czech Republic (Remote)",
    description:
      "Delivered client web apps end-to-end, scoping requirements, building TypeScript frontends, wiring APIs, and owning release schedules.",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2025 – Jul 2025 (Upwork)",
  },
  {
    title: "Full Stack Developer",
    location: "Prague, Czech Republic (Remote)",
    description:
      "Developed an AI-assisted course builder with Next.js UI, API integrations, and dashboards that support content operations.",
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2024 – Jun 2025 (Levenue Tech)",
  },
  {
    title: "VR Software Engineer",
    location: "Florida (Remote)",
    description:
      "Built companion web services for VR therapy, analytics views, configuration panels, and secure API layers for clinicians.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2024 – Dec 2024 (LucidRealityLabs)",
  },
  {
    title: "Lead Unity Engineer",
    location: "Estonia (Remote)",
    description:
      "Directed backend tooling, live dashboards, and integration workflows that supported large-scale game and web surfaces.",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2023 – Sep 2024 (Galaxy4Games)",
  },
  {
    title: "Unity Software Engineer",
    location: "UK (Remote)",
    description:
      "Implemented service integrations, account systems, and monitoring pipelines spanning multiplayer clients and web portals.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2022 – Jun 2023 (Whimsy Games)",
  },
  {
    title: "Unity Developer",
    location: "Kiev, Ukraine (On-site)",
    description:
      "Shipped cross-platform features, internal dashboards, and reusable tooling to accelerate content teams.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2020 – May 2022 (Appside)",
  },
  {
    title: "Unity/C# Engineer",
    location: "Kyiv, Ukraine (On-site)",
    description:
      "Created API integrations, admin flows, and automation scripts that linked gameplay services with web experiences.",
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

export const webHardSkills = [
  "Next.js & React",
  "TypeScript",
  "Node.js & Express",
  "Python (FastAPI)",
  "CI/CD (GitHub Actions, Jenkins)",
  "AWS & Terraform",
  "UX Collaboration",
];

export const webSoftSkills = [
  "Product Thinking",
  "Stakeholder Communication",
  "Remote Collaboration",
  "Technical Leadership",
  "Mentorship",
] as const;
