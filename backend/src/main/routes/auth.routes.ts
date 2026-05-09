import { Router } from "express";

import { makeLoginController } from "../factories/Auth/makeLoginController";
import { makeGetMeController } from "../factories/Auth/makeGetMeController";
import { makeRefreshTokenController } from "../factories/Auth/makeRefreshTokenController";
import { makeForgotPasswordController } from "../factories/Auth/makeForgotPasswordController";
import { makeResetPasswordController } from "../factories/Auth/makeResetPasswordController";

export const authRoutes = Router();

const loginController = makeLoginController();
const getMeController = makeGetMeController();
const refreshController = makeRefreshTokenController();
const forgotController = makeForgotPasswordController();
const resetController = makeResetPasswordController();


authRoutes.post("/login", (req, res) =>
  loginController.handle(req, res)
);

authRoutes.get("/me", (req, res) =>
  getMeController.handle(req, res)
);

authRoutes.post("/refresh", (req, res) =>
  refreshController.handle(req, res)
);

authRoutes.post("/forgot-password", (req, res) =>
  forgotController.handle(req, res)
);


authRoutes.post("/reset-password", (req, res) =>
  resetController.handle(req, res)
);

authRoutes.post("/logout", (req, res) => {
  res.clearCookie("auth_token");
  res.clearCookie("refresh_token");

  return res.json({ message: "Logout realizado com sucesso" });
});