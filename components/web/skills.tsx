"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import { webHardSkills, webSoftSkills } from "@/lib/web-data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function WebSkills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Capabilities</SectionHeading>
      <div>
        <h3 className="text-xl font-semibold mt-4 mb-2">Delivery & Platform</h3>
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
          {webHardSkills.map((skill, index) => (
            <motion.li
              key={index}
              className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold mt-8 mb-2">Collaboration</h3>
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
          {webSoftSkills.map((skill, index) => (
            <motion.li
              key={index}
              className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
