import express from "express";
import cors from "cors";
import "dotenv/config";
import { routes } from "./shared/routes";
import cookieParser from "cookie-parser";
export const app = express();

app.use(cors({
    origin:"*"
}))
app.use(express.json())
app.use(cookieParser());
app.use(routes)