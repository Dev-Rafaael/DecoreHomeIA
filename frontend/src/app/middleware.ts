


import { NextRequest, NextResponse } from "next/server";
import { hasSessionCookie } from "../modules/auth/utils/auth";

export function middleware(req: NextRequest) {
     const hasCookie = hasSessionCookie(req)

     if(!hasCookie) {
          return Response.redirect(new URL("/auth/login", req.url))
     }

     return NextResponse.next
}
