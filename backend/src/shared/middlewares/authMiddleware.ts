import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";



export function authMiddleware(event:any) {

    const token = event.headers?.authorization;

    if (!token) {
    throw new Error("Unauthorized");
  }

    const SECRET_KEY = process.env.JWT_SECRET;

    if (!SECRET_KEY) {
        throw new Error("JWT_SECRET não definida");
    }
    try {
        const decoded = jwt.verify(token.replace("Bearer "," "),SECRET_KEY);

        return decoded
        
    } catch {
        throw new Error("Token inválido");
    }

}