import { NextRequest } from "next/server";



export function hasSessionCookie(req:NextRequest): boolean {
    const token = req.cookies.get("token");
    return !!token;
}