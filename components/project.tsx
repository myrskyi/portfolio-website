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
                className="bg-gray-100 max-w-[44rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:min-h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
                <div
                    className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-6 sm:pt-10 sm:max-w-[55%] flex flex-col h-full sm:group-even:ml-[18rem]">
                    <h3 className="text-2xl font-semibold">{title}</h3>
                    <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
                        {description}
                    </p>
                    <Image
                        src={imageUrl}
                        alt="Project I worked on"
                        quality={95}
                        className="mt-5 w-full rounded-lg shadow-xl sm:hidden"
                    />
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
                        <div className="flex items-center gap-3">
                            <Link
                                href={detailPath}
                                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 px-6 py-2.5 text-base font-semibold text-white shadow-lg shadow-gray-900/20 ring-1 ring-gray-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 dark:from-white/20 dark:via-white/10 dark:to-white/20 dark:text-white dark:ring-white/10 dark:hover:brightness-125 dark:shadow-black/30"
                            >
                                <span className="tracking-wide">View Project</span>
                                <FiArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1" />
                            </Link>
                            <a
                                href={learnMoreUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 text-gray-800 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800 dark:text-white dark:border-white/30 dark:hover:bg-white/10"
                            >
                                <span className="sr-only">Open external link</span>
                                <FiExternalLink className="h-5 w-5" aria-hidden="true" />
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
