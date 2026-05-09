import { Router } from "express";
import { makeSuggestServiceController } from "../factories/AI/makeSuggestServiceController";



export const iaRoutes = Router()
const suggestController = makeSuggestServiceController()
iaRoutes.post('/suggest', (req, res) => suggestController.handle(req, res))