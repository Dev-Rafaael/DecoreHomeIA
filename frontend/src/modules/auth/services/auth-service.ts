import { login } from "../api/login";
import { logout } from "../api/logout";
import { getMe } from "../api/me";
import { refreshSession }
from "../api/refresh";

export const authService = {
  login,
  logout,
  getMe,
  refreshSession
};