"use client";

import {useRef} from "react";
import Image from "next/image";
import {motion, useScroll, useTransform} from "framer-motion";
import type {StaticImageData} from "next/image";
import Link from "next/link";
import {FiArrowUpRight, FiExternalLink} from "react-icons/fi";

export type ProjectProps = {
    slug: string;
    title: string;
    description: string;
    tags: readonly string[];
    imageUrl: StaticImageData;
    learnMoreUrl: string;
    detailPath: string;
};

export default function Project({
                                    title,
                                    description,
                                    tags,
                                    imageUrl,
                                    learnMoreUrl,
                                    detailPath
                                }: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgess,
                opacity: opacityProgess,
            }}
            className="group mb-3 sm:mb-8 last:mb-0"
        >
            <section
                className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
                <div
                    className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
                    <h3 className="text-2xl font-semibold">{title}</h3>
                    <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
                        {description}
                    </p>
                    <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                        {tags.map((tag, index) => (
                            <li
                                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                                key={index}
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-end items-end h-full">
                        <div className="flex gap-2">
                            <Link
                                href={detailPath}
                                className="group/cta inline-flex items-center gap-3 rounded-full bg-gray-900 px-5 py-2 text-base font-semibold text-white shadow-lg shadow-gray-900/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 dark:bg-white/20 dark:text-white dark:shadow-black/40 dark:hover:bg-white/30"
                            >
                                <span className="tracking-wide">View Project</span>
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-900 transition-transform duration-300 group-hover/cta:translate-x-1 group-hover/cta:rotate-12 dark:bg-white/10 dark:text-white">
                                    <FiArrowUpRight className="h-4 w-4" />
                                </span>
                            </Link>
                            <a
                                href={learnMoreUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-gray-400 px-4 py-2 text-sm font-medium text-gray-800 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800 dark:text-white dark:border-white/40 dark:hover:bg-white/10"
                            >
                                <span>External</span>
                                <FiExternalLink className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </div>

                <Image
                    src={imageUrl}
                    alt="Project I worked on"
                    quality={95}
                    className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-lg shadow-2xl
        transition
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
                />
            </section>
        </motion.div>
    );
}
