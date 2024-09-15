import { NextResponse, NextRequest } from "next/server";
import { IUser } from "./interfaces/user";
import { cookies } from "next/headers";

export function middleware(request: NextRequest) {
  const userCookies = cookies().get("user")?.value;
  const user = userCookies ? (JSON.parse(userCookies) as IUser) : null;

  if (request.nextUrl.pathname.startsWith("/admin")) {
    if (user && user.role !== "admin") {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}
