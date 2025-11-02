import { redirect } from "next/navigation";
import { getProjectSlugs } from "@/lib/project-details";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getProjectSlugs("web").map((slug) => ({ slug }));
}

export default function WebProjectDetailRoute({ params }: PageProps) {
  redirect(`/projects/${params.slug}`);
}
