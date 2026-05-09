import { Router } from "express";
import { makeCreateUserController } from "../factories/User/makeCreateUserController";
import { makeUpdateUserController } from "../factories/User/makeUpdateUserController";
import { makeDeleteUserController } from "../factories/User/makeDeleteUserController";



export const userRoutes = Router()

const createUserController = makeCreateUserController()
const updateUserController = makeUpdateUserController()
const deleteUserController = makeDeleteUserController()

userRoutes.post("/", (req, res) => createUserController.execute(req, res))
userRoutes.put("/:id", (req, res) => updateUserController.execute(req, res))
userRoutes.delete("/:id", (req, res) => deleteUserController.execute(req, res))