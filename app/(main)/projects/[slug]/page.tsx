import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetailPage from "@/components/project-detail-page";
import { getProjectDetail, getProjectSlugs } from "@/lib/project-details";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const detail = getProjectDetail(params.slug);

  if (!detail) {
    return {
      title: "Project not found",
      description: "The requested project could not be located.",
    };
  }

  const description = detail.seo.description;
  const title = `${detail.title} | Project Details`;

  let image: string | undefined;
  if (detail.hero.media.type === "image") {
    const mediaSrc = detail.hero.media.src as unknown;
    if (typeof mediaSrc === "string") {
      image = mediaSrc;
    } else if (
      mediaSrc &&
      typeof mediaSrc === "object" &&
      "src" in mediaSrc &&
      typeof (mediaSrc as { src: unknown }).src === "string"
    ) {
      image = (mediaSrc as { src: string }).src;
    }
  }

  return {
    title,
    description,
    openGraph: {
      title: `${detail.title} | Pavlo Zakharov`,
      description,
      type: "article",
      images: image ? [image] : undefined,
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title,
      description,
      images: image ? [image] : undefined,
    },
    alternates: {
      canonical: `/projects/${detail.slug}`,
    },
  };
}

export default function ProjectDetailRoute({ params }: PageProps) {
  const detail = getProjectDetail(params.slug);

  if (!detail) {
    notFound();
  }

  return (
    <ProjectDetailPage
      detail={detail}
      contactVariant={detail.kind === "web" ? "web" : "general"}
    />
  );
}
