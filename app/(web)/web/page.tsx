import WebIntro from "@/components/web/intro";
import SectionDivider from "@/components/section-divider";
import WebAbout from "@/components/web/about";
import WebProjects from "@/components/web/projects";
import WebSkills from "@/components/web/skills";
import WebExperience from "@/components/web/experience";
import WebContact from "@/components/web/contact";
import ScrollToTop from "@/components/scroll-to-top";

export const metadata = {
  title: "Pavlo | Web Engineering Portfolio",
  description:
    "Full stack web engineer delivering product-focused platforms, automation, and polished user experiences.",
};

export default function WebHomePage() {
  return (
    <main className="flex flex-col items-center px-4">
      <WebIntro />
      <SectionDivider />
      <WebAbout />
      <WebProjects />
      <WebSkills />
      <WebExperience />
      <WebContact />
      <ScrollToTop />
    </main>
  );
}
