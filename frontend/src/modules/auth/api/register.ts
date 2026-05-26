
import { api } from "@/src/lib/axios/axios";
import {
  RegisterDTO
} from "../schemas/register-schema";

export async function register(
  data: RegisterDTO
) {
  const response =
    await api.post(
      "/auth/register",
      data
    );

  return response.data;
}