"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/section-heading";
import { useSectionInView } from "@/lib/hooks";

function FullText() {
  return (
    <>
      <p className="mb-3">
        I’m a product-minded <span className="font-medium">Full Stack Web Engineer</span> with
        a background in large-scale Unity projects. Today I apply the same focus on experience,
        performance, and tooling to ship <span className="font-medium">modern web platforms</span>.
      </p>
      <p>
        From greenfield SaaS builds to modernization projects, I partner with founders and product
        teams to translate fuzzy requirements into delightful, measurable outcomes.
      </p>
    </>
  );
}

function ShortText() {
  return (
    <p className="mb-3">
      I’m a <span className="font-medium">Full Stack Web Engineer</span> focused on pairing
      intuitive UX with scalable backends. I help teams launch fast without trading off quality.
    </p>
  );
}

export default function WebAbout() {
  const { ref } = useSectionInView("About");
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.section
      ref={ref}
      className="scroll-mt-28 mb-28 max-w-[60rem] px-4 md:px-8 mx-auto"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left leading-8">
        <div>
          <div className="md:hidden">
            {isExpanded ? <FullText /> : <ShortText />}
            {!isExpanded && (
              <button
                onClick={() => setIsExpanded(true)}
                className="inline-block mt-2 text-blue-600 font-medium underline hover:text-blue-800 transition"
              >
                Read more
              </button>
            )}
          </div>

          <div className="hidden md:block">
            <FullText />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="font-semibold">Product Alignment</span>: turn discovery insights into
              roadmaps, success metrics, and iterative delivery.
            </li>
            <li>
              <span className="font-semibold">Scalable Architectures</span>: build resilient APIs,
              background jobs, and automated deployment pipelines.
            </li>
            <li>
              <span className="font-semibold">Collaborative UX</span>: partner with design to ship
              cohesive experiences and accessible interfaces.
            </li>
            <li>
              <span className="font-semibold">Measured Outcomes</span>: instrument features with
              analytics and feedback loops to guide growth.
            </li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
