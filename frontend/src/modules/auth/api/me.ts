import axios from "axios";
import { Session } from "../schemas/session-schema";

export async function getMe() {
  const response = await axios.get<Session>(
    "http://localhost:3333/auth/me",
    {
      withCredentials: true,
    }
  );

  return response.data;
}
