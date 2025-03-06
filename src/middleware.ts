import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

const validPaths = String(process.env.TEMPLE_VALID_PATHS).split(',').map(origin => origin.trim());
const excludedSubdomains = String(process.env.TEMPLE_EXCLUDED_SUBDOMAINS).split(',').map(origin => origin.trim());

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const host = request.headers.get("host") || "";
  const subdomain = host.split(".")[0];
  const path = url.pathname;

  if (subdomain && !excludedSubdomains.includes(subdomain) && validPaths.includes(path)) {
    // url.pathname = `/temple/${subdomain}${path}`; // This is the original line
    url.pathname = `/${subdomain}${path}`; // For now, we are removing the /temple/ prefix
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}