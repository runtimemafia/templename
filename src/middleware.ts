import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log("Middleware triggered");
  const url = request.nextUrl;
  console.log(url);
  const host = request.headers.get("host") || "";
  const subdomain = host.split(".")[0];

  const excludedSubdomains = ["www", "bookmypuja.org", "dev"];

  if (subdomain && !excludedSubdomains.includes(subdomain)) {
    url.pathname = `/temple/${subdomain}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}