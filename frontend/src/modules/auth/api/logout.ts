import { api } from "@/src/lib/axios/axios";


export async function logout() {
  await api.post("/auth/logout");
}