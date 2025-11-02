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
                className="bg-gray-100 max-w-[48rem] border border-black/5 rounded-lg overflow-hidden hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-stretch sm:gap-10 sm:group-even:flex-row-reverse">
                    <div className="flex w-full flex-col px-5 pt-4 pb-6 sm:w-1/2 sm:px-10 sm:py-10 sm:group-even:pl-10">
                        <div>
                            <h3 className="text-2xl font-semibold">{title}</h3>
                            <p className="mt-3 leading-relaxed text-gray-700 dark:text-white/70">
                                {description}
                            </p>
                        </div>
                        <Image
                            src={imageUrl}
                            alt="Project I worked on"
                            quality={95}
                            className="mt-6 w-full rounded-lg shadow-xl sm:hidden"
                        />
                        <ul className="mt-6 flex flex-wrap gap-2">
                            {tags.map((tag, index) => (
                                <li
                                    className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                                    key={index}
                                >
                                    {tag}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8">
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
                    <div className="hidden w-full sm:flex sm:w-1/2 sm:flex-col sm:justify-center sm:gap-6 sm:pr-10 sm:py-10 sm:group-even:pl-10 sm:group-even:pr-10">
                        <div className="overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/10 dark:ring-white/10">
                            <Image
                                src={imageUrl}
                                alt="Project I worked on"
                                quality={95}
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}
