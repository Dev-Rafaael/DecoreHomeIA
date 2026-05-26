import { api } from "@/src/lib/axios/axios";
import { RefreshResponse } from "../schemas/refresh-schema";


export async function refreshSession() {
  const response =
    await api.post<RefreshResponse>(
      "/auth/refresh"
    );

  return response.data;
}