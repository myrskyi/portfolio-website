"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/section-heading";
import Project from "@/components/project";
import { useSectionInView } from "@/lib/hooks";
import { webProjectsData } from "@/lib/web-data";

export default function WebProjects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? webProjectsData : webProjectsData.slice(0, 4);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>Featured projects</SectionHeading>
      <div>
        {displayedProjects.map((project) => (
          <React.Fragment key={project.slug}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
      {!showAll && webProjectsData.length > 4 && (
        <div className="mt-4 text-center">
          <button
            onClick={() => setShowAll(true)}
            className="px-4 py-2 border rounded hover:bg-gray-100"
          >
            Show more
          </button>
        </div>
      )}
    </section>
  );
}
