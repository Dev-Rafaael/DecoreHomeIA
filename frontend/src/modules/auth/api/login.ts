
import { api } from "@/src/lib/axios/axios";
import { LoginDTO } from "../schemas/login-schema";
import { AuthResponse } from "../schemas/auth-response-schema";


export async function login(data: LoginDTO) {
  const response = await api.post<AuthResponse>(
    "/auth/login",
    data
  );

  return response.data;
}
