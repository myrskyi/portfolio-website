"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  LuGauge,
  LuLayers,
  LuMonitor,
  LuRocket,
  LuShieldCheck,
  LuStars,
  LuUsers,
  LuWorkflow,
} from "react-icons/lu";
import type { IconType } from "react-icons";
import type { ProjectDetail } from "@/lib/project-details";
import Contact from "@/components/contact";
import WebContact from "@/components/web/contact";
import type { StaticImageData } from "next/image";

const iconComponents: Record<string, IconType> = {
  LuStars,
  LuLayers,
  LuMonitor,
  LuGauge,
  LuWorkflow,
  LuUsers,
  LuShieldCheck,
  LuRocket,
};

type ProjectDetailPageProps = {
  detail: ProjectDetail;
  contactVariant: "general" | "web";
};

function classNames(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function resolveImageMedia(src: StaticImageData | string) {
  if (typeof src === "string") {
    return { src, width: 1600, height: 900 };
  }
  return { src, width: src.width, height: src.height };
}

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const matcher = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setPrefersReducedMotion(matcher.matches);
    handleChange();
    if (typeof matcher.addEventListener === "function") {
      matcher.addEventListener("change", handleChange);
      return () => matcher.removeEventListener("change", handleChange);
    }
    matcher.addListener(handleChange);
    return () => matcher.removeListener(handleChange);
  }, []);

  return prefersReducedMotion;
}

export default function ProjectDetailPage({
  detail,
  contactVariant,
}: ProjectDetailPageProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const lightboxRef = useRef<HTMLDivElement | null>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [openChallenge, setOpenChallenge] = useState<number>(0);
  const metaClientStudio = [detail.meta.client, detail.meta.studio]
    .map((entry) => (typeof entry === "string" ? entry.trim() : ""))
    .filter((entry) => entry.length > 0)
    .join(" · ");
  const metaPlatforms =
    detail.meta.platforms
      ?.map((platform) => (typeof platform === "string" ? platform.trim() : ""))
      .filter((platform) => platform.length > 0) ?? [];

  const heroBreadcrumbHref = "/#projects";

  useEffect(() => {
    setActiveMediaIndex(0);
  }, [detail.slug]);

  useEffect(() => {
    if (lightboxIndex === null) {
      return;
    }

    previouslyFocused.current = document.activeElement as HTMLElement | null;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusableSelectors =
      "a[href], button, textarea, input, select, [tabindex]:not([tabindex='-1'])";

    const trapFocus = (event: KeyboardEvent) => {
      if (!lightboxRef.current) return;
      const focusableItems = Array.from(
        lightboxRef.current.querySelectorAll<HTMLElement>(focusableSelectors),
      );
      if (focusableItems.length === 0) return;
      const first = focusableItems[0];
      const last = focusableItems[focusableItems.length - 1];

      switch (event.key) {
        case "Escape":
          event.preventDefault();
          setLightboxIndex(null);
          break;
        case "ArrowRight":
          event.preventDefault();
          setLightboxIndex((current) => {
            if (current === null) return null;
            return (current + 1) % detail.gallery.length;
          });
          break;
        case "ArrowLeft":
          event.preventDefault();
          setLightboxIndex((current) => {
            if (current === null) return null;
            return (current - 1 + detail.gallery.length) % detail.gallery.length;
          });
          break;
        case "Tab":
          if (event.shiftKey) {
            if (document.activeElement === first) {
              event.preventDefault();
              last.focus();
            }
          } else if (document.activeElement === last) {
            event.preventDefault();
            first.focus();
          }
          break;
        default:
          break;
      }
    };

    const focusWatcher = window.setTimeout(() => {
      if (!lightboxRef.current) return;
      const focusableItems = lightboxRef.current.querySelectorAll<
        HTMLElement
      >(focusableSelectors);
      if (focusableItems.length > 0) {
        focusableItems[0].focus();
      }
    }, 0);

    document.addEventListener("keydown", trapFocus);

    return () => {
      document.removeEventListener("keydown", trapFocus);
      window.clearTimeout(focusWatcher);
      document.body.style.overflow = originalOverflow;
      previouslyFocused.current?.focus?.();
    };
  }, [detail.gallery.length, lightboxIndex]);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const totalMediaItems = detail.gallery.length;
  const activeMedia =
    totalMediaItems > 0
      ? detail.gallery[activeMediaIndex % totalMediaItems]
      : undefined;

  const goToNextMedia = useCallback(() => {
    if (totalMediaItems < 2) return;
    setActiveMediaIndex((current) => (current + 1) % totalMediaItems);
  }, [totalMediaItems]);

  const goToPreviousMedia = useCallback(() => {
    if (totalMediaItems < 2) return;
    setActiveMediaIndex(
      (current) => (current - 1 + totalMediaItems) % totalMediaItems,
    );
  }, [totalMediaItems]);

  return (
    <article className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 pb-24 pt-10 md:px-8">
      <header className="space-y-8">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 dark:text-white/70">
          <div className="flex items-center gap-2">
            <Link
              href={heroBreadcrumbHref}
              className="hover:text-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500 dark:hover:text-white"
            >
              Projects
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-gray-700 dark:text-white">{detail.title}</span>
          </div>
        </nav>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl font-semibold text-gray-900 dark:text-white sm:text-4xl">
                {detail.title}
              </h1>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-white/80">
                {detail.hero.tagline}
              </p>
              <p className="text-sm uppercase tracking-wide text-gray-500 dark:text-white/60">
                {detail.hero.studioRoleLine}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <HeroCtaButton
                cta={detail.hero.primaryCta}
                variant="primary"
                prefersReducedMotion={prefersReducedMotion}
              />
              {detail.hero.secondaryCta ? (
                <HeroCtaButton
                  cta={detail.hero.secondaryCta}
                  variant="secondary"
                  prefersReducedMotion={prefersReducedMotion}
                />
              ) : null}
            </div>
            <ul className="flex flex-wrap gap-2">
              {detail.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-gray-200 px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-700 dark:bg-white/10 dark:text-white/80"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-gray-200 shadow-xl shadow-gray-200/60 ring-1 ring-gray-200 dark:bg-white/10 dark:shadow-black/30 dark:ring-white/10">
            {detail.hero.media.type === "image" ? (
              (() => {
                const media = resolveImageMedia(detail.hero.media.src);
                return (
                  <Image
                    src={media.src}
                    alt={detail.hero.media.alt}
                    width={media.width}
                    height={media.height}
                    className="h-auto w-full object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                );
              })()
            ) : (
              <video
                src={
                  typeof detail.hero.media.src === "string"
                    ? detail.hero.media.src
                    : detail.hero.media.src.src
                }
                className="h-full w-full object-cover"
                controls
                preload="metadata"
              >
                <track kind="captions" label="captions" />
              </video>
            )}
          </div>
        </div>
      </header>

      <section id="overview" className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            About the project
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-gray-600 dark:text-white/80">
            {detail.about.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-28">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg shadow-gray-200/60 dark:border-white/10 dark:bg-white/10 dark:shadow-black/30">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Details</h3>
            <dl className="mt-4 space-y-4 text-sm text-gray-600 dark:text-white/70">
              {metaClientStudio ? <MetaRow label="Client / Studio" value={metaClientStudio} /> : null}
              {detail.meta.year ? <MetaRow label="Year" value={detail.meta.year} /> : null}
              {detail.meta.role ? <MetaRow label="Role" value={detail.meta.role} /> : null}
              {metaPlatforms.length > 0 ? (
                <MetaRow label="Platforms" value={metaPlatforms.join(", ")} />
              ) : null}
              {detail.meta.links.length > 0 && (
                <div>
                  <dt className="font-medium text-gray-700 dark:text-white">Links</dt>
                  <dd className="mt-2 space-y-2">
                    {detail.meta.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="block rounded-md border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400 dark:border-white/10 dark:text-white/80 dark:hover:bg-white/10"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </dd>
                </div>
              )}
            </dl>
          </div>
        </aside>
      </section>

      <section aria-labelledby="feature-highlights">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 id="feature-highlights" className="text-2xl font-semibold text-gray-900 dark:text-white">
              Feature highlights
            </h2>
            <p className="hidden text-sm text-gray-500 dark:text-white/70 lg:block">
              Snapshots of what made the work stand out.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {detail.featureHighlights.map((feature, index) => {
              const Icon = iconComponents[feature.icon] ?? LuStars;
              return (
                <div
                  key={`${feature.title}-${index}`}
                  className="flex h-full flex-col space-y-3 rounded-2xl border border-gray-200 bg-white p-6 shadow-md shadow-gray-200/60 transition hover:shadow-lg dark:border-white/10 dark:bg-white/10 dark:shadow-black/30"
                >
                  <Icon className="h-6 w-6 text-gray-700 dark:text-white" aria-hidden="true" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-white/70">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="gallery" aria-labelledby="gallery-heading" className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 id="gallery-heading" className="text-2xl font-semibold text-gray-900 dark:text-white">
            Gallery
          </h2>
          <p className="hidden text-sm text-gray-500 dark:text-white/70 lg:block">
            Click the main frame to open the lightbox view.
          </p>
        </div>

        {activeMedia ? (
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg shadow-gray-200/60 dark:border-white/10 dark:bg-white/10 dark:shadow-black/30">
              <button
                type="button"
                onClick={() => setLightboxIndex(activeMediaIndex)}
                className="block w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400"
              >
                <span className="sr-only">Open {activeMedia.alt}</span>
                {activeMedia.type === "image" ? (
                  (() => {
                    const media = resolveImageMedia(activeMedia.src);
                    return (
                      <Image
                        src={media.src}
                        alt={activeMedia.alt}
                        width={media.width}
                        height={media.height}
                        className="h-auto w-full object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    );
                  })()
                ) : (
                  <video
                    src={
                      typeof activeMedia.src === "string"
                        ? activeMedia.src
                        : activeMedia.src.src
                    }
                    className="h-full w-full object-cover"
                    muted
                    playsInline
                    loop
                    autoPlay
                  >
                    <track kind="captions" label="captions" />
                  </video>
                )}
              </button>

              {totalMediaItems > 1 && (
                <>
                  <button
                    type="button"
                    onClick={goToPreviousMedia}
                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-gray-700 shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400 dark:bg-gray-900/80 dark:text-white"
                    aria-label="Previous media"
                  >
                    <span aria-hidden="true">←</span>
                  </button>
                  <button
                    type="button"
                    onClick={goToNextMedia}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-gray-700 shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400 dark:bg-gray-900/80 dark:text-white"
                    aria-label="Next media"
                  >
                    <span aria-hidden="true">→</span>
                  </button>
                </>
              )}
            </div>

            {totalMediaItems > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {detail.gallery.map((item, index) => {
                  const isActive = index === activeMediaIndex;
                  return (
                    <button
                      key={`${item.alt}-${index}`}
                      type="button"
                      onClick={() => setActiveMediaIndex(index)}
                      className={classNames(
                        "relative flex-shrink-0 rounded-xl border p-0.5 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400",
                        isActive
                          ? "border-gray-900 shadow-md dark:border-white"
                          : "border-transparent opacity-70 hover:opacity-100",
                      )}
                      aria-current={isActive ? "true" : undefined}
                      aria-label={`Show ${item.alt}`}
                    >
                      {item.type === "image" ? (
                        (() => {
                          const media = resolveImageMedia(item.src);
                          return (
                            <Image
                              src={media.src}
                              alt={item.alt}
                              width={media.width}
                              height={media.height}
                              className="h-16 w-28 rounded-lg object-cover"
                              sizes="112px"
                            />
                          );
                        })()
                      ) : (
                        <div className="flex h-16 w-28 items-center justify-center rounded-lg bg-gray-200 text-xs font-semibold uppercase tracking-wide text-gray-600 dark:bg-white/10 dark:text-white/70">
                          Video
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        ) : (
          <p className="text-sm text-gray-500 dark:text-white/70">
            Media assets are coming soon.
          </p>
        )}
      </section>

      <section id="results" className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Results</h2>
          <p className="text-sm text-gray-500 dark:text-white/70">
            Impact metrics captured during the engagement.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {detail.results.map((result) => (
            <div
              key={result.label}
              className="flex h-full flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-md shadow-gray-200/60 dark:border-white/10 dark:bg-white/10 dark:shadow-black/30"
            >
              <div>
                <p className="text-sm uppercase tracking-wide text-gray-500 dark:text-white/70">
                  {result.label}
                </p>
                <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">
                  {result.value}
                </p>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-white/70">
                {result.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="challenges" className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Challenges</h2>
          <p className="text-sm text-gray-500 dark:text-white/70">
            Key obstacles and how I solved them.
          </p>
        </div>
        <div className="space-y-3">
          {detail.challenges.map((challenge, index) => (
            <ChallengeAccordion
              key={`${challenge.title}-${index}`}
              challenge={challenge}
              isOpen={openChallenge === index}
              onToggle={() =>
                setOpenChallenge(openChallenge === index ? -1 : index)
              }
            />
          ))}
        </div>
      </section>

      {contactVariant === "web" ? <WebContact /> : <Contact />}

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6 backdrop-blur"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery lightbox"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeLightbox();
            }
          }}
        >
          <div
            ref={lightboxRef}
            className="relative w-full max-w-4xl rounded-2xl bg-gray-900 p-4 shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <div className="relative w-full overflow-hidden rounded-2xl bg-black">
              {detail.gallery[lightboxIndex].type === "image" ? (
                (() => {
                  const media = resolveImageMedia(
                    detail.gallery[lightboxIndex].src,
                  );
                  return (
                    <Image
                      src={media.src}
                      alt={detail.gallery[lightboxIndex].alt}
                      width={media.width}
                      height={media.height}
                      className="h-auto w-full object-contain"
                      sizes="(max-width: 1024px) 100vw, 1280px"
                    />
                  );
                })()
              ) : (
                <video
                  src={
                    typeof detail.gallery[lightboxIndex].src === "string"
                      ? detail.gallery[lightboxIndex].src
                      : detail.gallery[lightboxIndex].src.src
                  }
                  className="h-full w-full object-contain"
                  controls
                  autoPlay
                >
                  <track kind="captions" />
                </video>
              )}
            </div>
            <p className="mt-4 text-sm text-white/80">
              {detail.gallery[lightboxIndex].alt}
            </p>
            <div className="mt-6 flex items-center justify-between">
              <button
                type="button"
                onClick={() =>
                  setLightboxIndex(
                    (lightboxIndex - 1 + detail.gallery.length) %
                      detail.gallery.length,
                  )
                }
                className="rounded-md border border-white/20 px-3 py-2 text-sm font-medium text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Previous
              </button>
              <div className="flex items-center gap-2 text-xs text-white/60">
                {lightboxIndex + 1} / {detail.gallery.length}
              </div>
              <button
                type="button"
                onClick={() =>
                  setLightboxIndex((lightboxIndex + 1) % detail.gallery.length)
                }
                className="rounded-md border border-white/20 px-3 py-2 text-sm font-medium text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Next
              </button>
            </div>
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute right-4 top-4 rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </article>
  );
}

type HeroCtaButtonProps = {
  cta: ProjectDetail["hero"]["primaryCta"];
  variant: "primary" | "secondary";
  prefersReducedMotion: boolean;
};

function HeroCtaButton({ cta, variant, prefersReducedMotion }: HeroCtaButtonProps) {
  const isExternal = Boolean(cta.external);
  const isAnchor = !isExternal && cta.href.startsWith("#");
  const className =
    variant === "primary"
      ? "rounded-full bg-gray-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 dark:bg-white dark:text-gray-900 dark:hover:bg-white/80"
      : "rounded-full border border-gray-300 px-5 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400 dark:border-white/40 dark:text-white/80 dark:hover:bg-white/10";

  if (isExternal) {
    return (
      <a
        href={cta.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {cta.label}
      </a>
    );
  }

  if (isAnchor) {
    return (
      <button
        type="button"
        className={className}
        onClick={() => {
          const target = document.querySelector(cta.href) as HTMLElement | null;
          if (target) {
            target.scrollIntoView({
              behavior: prefersReducedMotion ? "auto" : "smooth",
              block: "start",
            });
            target.focus?.({ preventScroll: true });
          }
        }}
      >
        {cta.label}
      </button>
    );
  }

  return (
    <Link href={cta.href} className={className}>
      {cta.label}
    </Link>
  );
}

type MetaRowProps = {
  label: string;
  value: string;
};

function MetaRow({ label, value }: MetaRowProps) {
  return (
    <div>
      <dt className="font-medium text-gray-700 dark:text-white">{label}</dt>
      <dd className="mt-1 text-gray-600 dark:text-white/70">{value}</dd>
    </div>
  );
}

type ChallengeAccordionProps = {
  challenge: ProjectDetail["challenges"][number];
  isOpen: boolean;
  onToggle: () => void;
};

function ChallengeAccordion({
  challenge,
  isOpen,
  onToggle,
}: ChallengeAccordionProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-md shadow-gray-200/60 dark:border-white/10 dark:bg-white/10 dark:shadow-black/30">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400"
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        <span className="text-base font-semibold text-gray-900 dark:text-white">
          {challenge.title}
        </span>
        <span
          className={classNames(
            "text-xs font-semibold uppercase tracking-wide text-gray-500 transition-transform dark:text-white/70",
            isOpen ? "rotate-45" : "",
          )}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      {isOpen && (
        <div className="px-5 pb-5 text-sm leading-relaxed text-gray-600 dark:text-white/70">
          {challenge.solution}
        </div>
      )}
    </div>
  );
}
