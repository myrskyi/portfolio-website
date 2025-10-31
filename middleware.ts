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

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") ?? "";

  if (!WEB_HOSTNAMES.has(hostname)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();

  if (isStaticAsset(url.pathname)) {
    return NextResponse.next();
  }

  if (url.pathname === "/") {
    url.pathname = "/web";
    return NextResponse.rewrite(url);
  }

  if (!url.pathname.startsWith("/web")) {
    url.pathname = `/web${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
