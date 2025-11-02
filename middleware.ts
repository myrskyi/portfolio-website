import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const WEB_HOSTNAMES = new Set([
  "web.pavlomyrskyi.com",
  "web.localhost:3000",
  "web.127.0.0.1:3000",
]);

function isStaticAsset(pathname: string) {
  return (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/static") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.includes(".")
  );
}

function redirectWithoutWebPrefix(url: URL) {
  url.pathname = url.pathname.slice("/web".length) || "/";
  if (!url.pathname.startsWith("/")) {
    url.pathname = `/${url.pathname}`;
  }
  return NextResponse.redirect(url);
}

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") ?? "";
  const url = request.nextUrl.clone();

  if (WEB_HOSTNAMES.has(hostname)) {
    if (isStaticAsset(url.pathname)) {
      return NextResponse.next();
    }

    if (url.pathname === "/web" || url.pathname.startsWith("/web/")) {
      return redirectWithoutWebPrefix(url);
    }

    if (url.pathname === "/") {
      url.pathname = "/web";
      return NextResponse.rewrite(url);
    }

    const bypassPrefixes = [
      // Allow canonical project detail routes to resolve without rewriting.
      "/projects",
    ];
    if (bypassPrefixes.some((prefix) => url.pathname.startsWith(prefix))) {
      return NextResponse.next();
    }

    if (!url.pathname.startsWith("/web")) {
      url.pathname = `/web${url.pathname}`;
      return NextResponse.rewrite(url);
    }

    return NextResponse.next();
  }

  if (url.pathname === "/web" || url.pathname.startsWith("/web/")) {
    return redirectWithoutWebPrefix(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
