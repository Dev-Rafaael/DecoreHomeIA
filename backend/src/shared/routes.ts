import { Router } from "express";
import { iaRoutes } from "../main/routes/ia.routes";
import { userRoutes } from "../main/routes/user.routes";
import { authRoutes } from "../main/routes/auth.routes";
import { authMiddleware } from "./middlewares/authMiddleware";



export const routes = Router()
routes.use('/ia', iaRoutes)
routes.use('/user', authMiddleware, userRoutes)
routes.use('/auth',authMiddleware, authRoutes)