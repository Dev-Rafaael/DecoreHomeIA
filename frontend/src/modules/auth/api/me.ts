import { api } from "@/src/lib/axios/axios";
import { Session } from "../schemas/session-schema";

export async function getMe() {
  const response =
    await api.get<Session>("/auth/me");

  return response.data;
}