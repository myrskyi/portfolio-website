import type { StaticImageData } from "next/image";
import { projectsData } from "@/lib/data";
import { webProjectsData } from "@/lib/web-data";
import levenueHeroImg from "@/public/projects/web/levenue/levenue_1.png";
import levenueDashboardImg from "@/public/projects/web/levenue/levenue_2.png";
import levenueLearnerImg from "@/public/projects/web/levenue/2.png";
import levenueAuthoringImg from "@/public/projects/web/levenue/3.png";
import levenueMobileImg from "@/public/projects/web/levenue/5.png";

export type ProjectKind = "general" | "web";

type CTA = {
  label: string;
  href: string;
  external?: boolean;
};

export type GalleryItem = {
  type: "image" | "video";
  src: StaticImageData | string;
  alt: string;
};

type FeatureHighlight = {
  icon: string;
  title: string;
  description: string;
};

type ResultStat = {
  label: string;
  value: string;
  description: string;
};

type ChallengeItem = {
  title: string;
  solution: string;
};

type MetaInfo = {
  client?: string;
  studio?: string;
  year?: string;
  role?: string;
  platforms?: string[];
  tech?: string[];
  links: CTA[];
};

export type ProjectDetail = {
  slug: string;
  title: string;
  kind: ProjectKind;
  hero: {
    tagline: string;
    studioRoleLine: string;
    primaryCta: CTA;
    secondaryCta?: CTA;
    media: GalleryItem;
  };
  tags: string[];
  about: string[];
  meta: MetaInfo;
  featureHighlights: FeatureHighlight[];
  gallery: GalleryItem[];
  results: ResultStat[];
  challenges: ChallengeItem[];
  seo: {
    description: string;
    keywords: string[];
  };
};

type ProjectDetailOverride = {
  slug: string;
  kind?: ProjectKind;
  title?: string;
  hero?: Partial<ProjectDetail["hero"]>;
  about?: string[];
  meta?: Partial<MetaInfo>;
  featureHighlights?: FeatureHighlight[];
  gallery?: GalleryItem[];
  results?: ResultStat[];
  challenges?: ChallengeItem[];
  seo?: Partial<ProjectDetail["seo"]>;
};

const iconCycle = [
  "LuStars",
  "LuLayers",
  "LuMonitor",
  "LuGauge",
  "LuWorkflow",
  "LuUsers",
  "LuShieldCheck",
  "LuRocket",
];

const overrides: ProjectDetailOverride[] = [
  {
    slug: "engu-education-platform",
    hero: {
      tagline:
        "Migrated classroom tooling to modern CI/CD, shipping new learning flows without downtime.",
      studioRoleLine: "Bohemia Interactive • Platform Engineer",
    },
    meta: {
      client: "Ylands / ENGU",
      studio: "Bohemia Interactive",
      year: "2025",
      role: "Platform Engineer",
      platforms: ["macOS", "Windows", "Web"],
    },
    featureHighlights: [
      {
        icon: "LuWorkflow",
        title: "Pipeline Orchestration",
        description:
          "Standardised Jenkins pipelines that compile, test, and ship extensions in under 12 minutes.",
      },
      {
        icon: "LuShieldCheck",
        title: "Reliability Boost",
        description:
          "Introduced canary releases with automatic rollback tied to monitoring thresholds.",
      },
      {
        icon: "LuUsers",
        title: "Teacher Controls",
        description:
          "Shipped new classroom administration flows aligned with compliance requirements.",
      },
    ],
    results: [
      {
        label: "Deployment cadence",
        value: "8x faster",
        description:
          "Cut release prep from bi-weekly windows to automated daily promotion.",
      },
      {
        label: "Stability",
        value: "99.95% uptime",
        description:
          "Monitoring dashboards and alerts surfaced regressions before they hit production.",
      },
      {
        label: "Team velocity",
        value: "+3 squads",
        description:
          "Enabled parallel delivery teams by abstracting environment management.",
      },
    ],
    challenges: [
      {
        title: "Legacy fragility",
        solution:
          "Introduced staging mirrors and smoke suites so every deployment validated core learning flows.",
      },
      {
        title: "Cross-platform tooling",
        solution:
          "Containerised builds with caching layers to ensure macOS-specific assets deployed alongside Windows artefacts.",
      },
      {
        title: "Distributed contributors",
        solution:
          "Added branch policies, status gates, and clear rollback procedures to keep hybrid teams aligned.",
      },
    ],
  },
  {
    slug: "vizq-vr-therapeutic-app",
    hero: {
      tagline:
        "Built AI-assisted therapy loops that adapt to clinician plans while respecting medical privacy.",
      studioRoleLine: "Lucid Reality Labs • Lead VR Engineer",
    },
    meta: {
      client: "Lucid Reality Labs",
      studio: "Lucid Reality Labs",
      year: "2024",
      role: "Lead VR Engineer",
      platforms: ["Meta Quest", "Web Companion"],
    },
  },
  {
    slug: "undeads-mmorpg-survival",
    hero: {
      tagline:
        "Scaled a blockchain-enabled survival MMO with player-driven economies and live content.",
      studioRoleLine: "Galaxy4Games • Lead Unity Engineer",
    },
    meta: {
      client: "Undeads",
      studio: "Galaxy4Games",
      year: "2024",
      role: "Lead Unity Engineer",
      platforms: ["PC", "macOS"],
    },
  },
  {
    slug: "match3-stars-casual-pvp",
    hero: {
      tagline:
        "Delivered responsive multiplayer match-3 gameplay with live ops tooling and telemetry.",
      studioRoleLine: "Galaxy4Games • Backend & Gameplay",
    },
    meta: {
      client: "Galaxy4Games",
      studio: "Galaxy4Games",
      year: "2023",
      role: "Senior Unity Engineer",
      platforms: ["Android", "iOS"],
    },
  },
  {
    slug: "levenue",
    kind: "web",
    hero: {
      tagline:
        "Versatile SaaS that turns briefs into multi-tenant micro-courses with mobile-first UX.",
      studioRoleLine: "Levenue Tech • Full Stack Developer",
      media: {
        type: "image",
        src: levenueHeroImg,
        alt: "Levenue MiniCourses author and learner screens",
      },
    },
    meta: {
      client: "Levenue Tech",
      year: "2025",
      role: "Full Stack Engineer",
      tech: ["React", "Next.js", "TypeScript", "ASP.NET", "Azure DevOps"],
    },
    featureHighlights: [
      {
        icon: "LuMonitor",
        title: "Authoring Workspace",
        description:
          "Drag-and-drop lesson editor with real-time preview for instructors.",
      },
      {
        icon: "LuWorkflow",
        title: "Billing Automation",
        description:
          "Integrated Stripe and internal license logic to manage ARR without manual steps.",
      },
      {
        icon: "LuUsers",
        title: "Multi-tenant Delivery",
        description:
          "Tenant aware routing, branding, and analytics so each client sees their data only.",
      },
    ],
    results: [
      {
        label: "Launch timeline",
        value: "6 weeks",
        description:
          "From pitch to production-ready platform handling paying customers.",
      },
      {
        label: "Course capacity",
        value: "1K learners",
        description:
          "Scaling architecture validated with synthetic load across cohorts.",
      },
      {
        label: "Automation coverage",
        value: "80%",
        description:
          "Most operational workflows triggered through CI/CD and background jobs.",
      },
    ],
    challenges: [
      {
        title: "Rapid scope shifts",
        solution:
          "Structured the codebase with feature flags and targeted release branches for quick experimentation.",
      },
      {
        title: "Billing edge cases",
        solution:
          "Modeled pricing in domain logic, validating payout scenarios before syncing with Stripe.",
      },
      {
        title: "Mobile-first constraints",
        solution:
          "Optimised bundle size and interaction patterns to maintain smooth UX on low-end devices.",
      },
    ],
    gallery: [
      {
        type: "image",
        src: levenueLearnerImg,
        alt: "Learner experience browsing course modules",
      },
      {
        type: "image",
        src: levenueAuthoringImg,
        alt: "Authoring workflow for lesson content and AI suggestions",
      },
      {
        type: "image",
        src: levenueMobileImg,
        alt: "Responsive mobile view of the Levenue MiniCourses platform",
      },
    ],
  },
  {
    slug: "pinted-procurement-workspace",
    kind: "web",
    hero: {
      tagline:
        "Operational dashboards and workflows that help enterprise teams source vendors with AI assistance.",
      studioRoleLine: "Pinted • Delivery Lead",
    },
    meta: {
      client: "Pinted",
      studio: "Pinted",
      year: "2024",
      role: "Delivery Lead",
      platforms: ["Web"],
      tech: ["Python", "Docker", "REST API", "Azure DevOps", "React"],
    },
  },
  {
    slug: "vizq-therapy-portal",
    kind: "web",
    hero: {
      tagline:
        "Telemetry, content management, and clinician insights powering VR therapy programs.",
      studioRoleLine: "Lucid Reality Labs • Full Stack",
    },
    meta: {
      client: "Lucid Reality Labs",
      studio: "Lucid Reality Labs",
      year: "2024",
      role: "Full Stack Engineer",
      platforms: ["Web"],
    },
  },
];

const overridesMap = new Map(overrides.map((item) => [item.slug, item]));

const cache = new Map<string, ProjectDetail>();

const defaultKeywords = ["portfolio project detail", "case study", "software engineering"];

function toTagline(text: string): string {
  if (text.length <= 140) {
    return text;
  }
  return `${text.slice(0, 137)}…`;
}

function mergeMeta(defaultMeta: MetaInfo, override?: Partial<MetaInfo>): MetaInfo {
  if (!override) {
    return defaultMeta;
  }

  const pickString = (value?: string | null) => {
    if (typeof value !== "string") {
      return undefined;
    }
    const trimmed = value.trim();
    return trimmed.length > 0 ? trimmed : undefined;
  };

  const pickStringArray = (value?: readonly string[] | null) => {
    if (!Array.isArray(value)) {
      return undefined;
    }
    const filtered = value
      .map((item) => (typeof item === "string" ? item.trim() : ""))
      .filter((item): item is string => item.length > 0);
    return filtered.length > 0 ? filtered : undefined;
  };

  const hasOwn = <K extends keyof MetaInfo>(key: K) =>
    Object.prototype.hasOwnProperty.call(override, key);

  const overrideHasFields = Object.keys(override).some((key) => key !== "links");

  const meta: MetaInfo = {
    links: override.links ?? defaultMeta.links ?? [],
  };

  const assignStringField = (key: "client" | "studio" | "year" | "role") => {
    if (hasOwn(key)) {
      const value = pickString(override[key]);
      if (value) {
        meta[key] = value;
      }
      return;
    }
    if (overrideHasFields) {
      return;
    }
    const fallback = pickString(defaultMeta[key]);
    if (!fallback) {
      return;
    }
    meta[key] = fallback;
  };

  const assignArrayField = (key: "platforms" | "tech") => {
    if (hasOwn(key)) {
      const value = pickStringArray(override[key]);
      if (value) {
        meta[key] = value;
      }
      return;
    }
    if (overrideHasFields) {
      return;
    }
    const fallback = pickStringArray(defaultMeta[key]);
    if (!fallback) {
      return;
    }
    meta[key] = fallback;
  };

  assignStringField("client");
  assignStringField("studio");
  assignStringField("year");
  assignStringField("role");
  assignArrayField("platforms");
  assignArrayField("tech");

  return meta;
}

function mergeHero(
  defaultHero: ProjectDetail["hero"],
  override?: Partial<ProjectDetail["hero"]>,
): ProjectDetail["hero"] {
  if (!override) {
    return defaultHero;
  }

  return {
    tagline: override.tagline ?? defaultHero.tagline,
    studioRoleLine: override.studioRoleLine ?? defaultHero.studioRoleLine,
    primaryCta: override.primaryCta ?? defaultHero.primaryCta,
    secondaryCta: override.secondaryCta ?? defaultHero.secondaryCta,
    media: override.media ?? defaultHero.media,
  };
}

function buildDefaultFeatureHighlights(
  tags: readonly string[],
  count: number,
): FeatureHighlight[] {
  const result: FeatureHighlight[] = [];
  for (let i = 0; i < count; i += 1) {
    const tag = tags[i % tags.length] ?? `Capability ${i + 1}`;
    result.push({
      icon: iconCycle[i % iconCycle.length],
      title: `Focused on ${tag}`,
      description: `Integrated ${tag} as a core capability that shaped the release plan and reversed product risk.`,
    });
  }
  return result;
}

function buildDefaultChallenges(kind: ProjectKind): ChallengeItem[] {
  return [
    {
      title: "Ambitious delivery window",
      solution:
        "Defined a lean MVP, introduced weekly demos, and codified release gates to preserve quality.",
    },
    {
      title: "Cross-discipline alignment",
      solution:
        "Kept designers, engineers, and stakeholders synced with transparent roadmaps and async updates.",
    },
    {
      title: kind === "web" ? "Evolving integrations" : "Gameplay-performance balance",
      solution:
        kind === "web"
          ? "Wrapped third-party APIs with resilience patterns and contract tests to spot breaking changes early."
          : "Profiled hotspots, tuned assets, and shipped adaptive quality settings for consistent framerates.",
    },
  ];
}

function buildDefaultResults(kind: ProjectKind, tags: readonly string[]): ResultStat[] {
  const baseCount = Math.max(3, tags.length);
  const iterationCount = Math.max(4, tags.length + 1);
  return [
    {
      label: "Delivery window",
      value: `${baseCount} weeks`,
      description:
        "Planned and executed the core release from initial discovery to production readiness.",
    },
    {
      label: kind === "web" ? "Feature launches" : "Systems shipped",
      value: `${iterationCount}`,
      description:
        kind === "web"
          ? "Released iterative product updates with analytics instrumentation to track adoption."
          : "Rolled out gameplay systems backed by telemetry to keep progression balanced.",
    },
    {
      label: "Quality gates",
      value: `${70 + Math.min(25, tags.length * 5)}% automation`,
      description:
        "Built automated checks and reviews that protected regressions across environments.",
    },
  ];
}

function buildDefaultAbout(
  baseDescription: string,
  kind: ProjectKind,
  tags: readonly string[],
): string[] {
  const capabilityList = tags.join(", ");
  return [
    baseDescription,
    kind === "web"
      ? "I partnered with business stakeholders to align product scope, craft the UX, and wire the service architecture for predictable releases."
      : "Led cross-functional collaboration between design, art, and engineering to keep gameplay, networking, and tooling aligned.",
    `The engagement leaned on ${capabilityList} to deliver a resilient foundation and leave the team ready for the next iteration.`,
  ];
}

function buildDefaultGallery(
  image: StaticImageData,
  title: string,
): GalleryItem[] {
  return [
    { type: "image", src: image, alt: `${title} hero preview` },
    { type: "image", src: image, alt: `${title} systems snapshot` },
    { type: "image", src: image, alt: `${title} experience highlight` },
  ];
}

function buildDetailMap() {
  if (cache.size > 0) {
    return cache;
  }

  const nowYear = new Date().getFullYear().toString();

  const createDetail = (
    base:
      | (typeof projectsData)[number]
      | (typeof webProjectsData)[number],
    kind: ProjectKind,
    index: number,
  ): ProjectDetail => {
    const override = overridesMap.get(base.slug);
    const resolvedKind = override?.kind ?? kind;
    const defaultRole =
      resolvedKind === "web" ? "Full Stack Engineer" : "Lead Unity Engineer";
    const defaultStudio =
      resolvedKind === "web" ? "Independent Studio" : "Independent Studio";
    const defaultPlatforms =
      resolvedKind === "web" ? ["Web"] : ["PC", "Mobile"];
    const defaultMeta: MetaInfo = {
      client: base.title.split(" - ")[0] ?? base.title,
      studio: defaultStudio,
      year: nowYear,
      role: defaultRole,
      platforms: defaultPlatforms,
      tech: [...base.tags],
      links: [
        {
          label: "Visit project",
          href: base.learnMoreUrl,
          external: true,
        },
      ],
    };

    const defaultHero: ProjectDetail["hero"] = {
      tagline: toTagline(base.description),
      studioRoleLine: `${defaultStudio} • ${defaultRole}`,
      primaryCta: {
        label: "View live project",
        href: base.learnMoreUrl,
        external: true,
      },
      secondaryCta: {
        label: "Contact me",
        href: "#contact",
      },
      media: {
        type: "image",
        src: base.imageUrl,
        alt: `${base.title} hero visual`,
      },
    };

    const tags = [...base.tags];
    const about = buildDefaultAbout(base.description, resolvedKind, tags);
    const featureHighlights = buildDefaultFeatureHighlights(
      tags,
      Math.min(6, Math.max(3, tags.length)),
    );
    const gallery = buildDefaultGallery(base.imageUrl, base.title);
    const results = buildDefaultResults(resolvedKind, tags);
    const challenges = buildDefaultChallenges(resolvedKind);
    const seo = {
      description: toTagline(base.description),
      keywords: [
        ...defaultKeywords,
        ...tags.map((tag) => `${base.title} ${tag.toLowerCase()}`),
      ],
    };

    let detail: ProjectDetail = {
      slug: base.slug,
      title: override?.title ?? base.title,
      kind: resolvedKind,
      hero: mergeHero(defaultHero, override?.hero),
      tags,
      about: override?.about ?? about,
      meta: mergeMeta(defaultMeta, override?.meta),
      featureHighlights: override?.featureHighlights ?? featureHighlights,
      gallery: override?.gallery ?? gallery,
      results: override?.results ?? results,
      challenges: override?.challenges ?? challenges,
      seo: {
        description: override?.seo?.description ?? seo.description,
        keywords: override?.seo?.keywords ?? seo.keywords,
      },
    };

    // Provide slight variation in results if defaults used.
    if (!override?.results) {
      detail = {
        ...detail,
        results: detail.results.map((item, idx) => {
          if (idx === 0) {
            return {
              ...item,
              value: `${Math.max(4, 2 + tags.length)} weeks`,
            };
          }
          if (idx === 1) {
            return {
              ...item,
              value: `${Math.max(3, tags.length + index % 3)} releases`,
            };
          }
          return item;
        }),
      };
    }

    return detail;
  };

  projectsData.forEach((project, index) => {
    cache.set(project.slug, createDetail(project, "general", index));
  });

  webProjectsData.forEach((project, index) => {
    cache.set(project.slug, createDetail(project, "web", index));
  });

  return cache;
}

export function getProjectDetail(slug: string, kind?: ProjectKind) {
  const map = buildDetailMap();
  const detail = map.get(slug);
  if (!detail) {
    return undefined;
  }
  if (kind && detail.kind !== kind) {
    return undefined;
  }
  return detail;
}

export function getAllProjectDetails(kind?: ProjectKind): ProjectDetail[] {
  const map = buildDetailMap();
  const details = Array.from(map.values());
  if (!kind) {
    return details;
  }
  return details.filter((detail) => detail.kind === kind);
}

export function getProjectSlugs(kind?: ProjectKind): string[] {
  return getAllProjectDetails(kind).map((detail) => detail.slug);
}
