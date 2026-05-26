import { api } from "@/src/lib/axios/axios";

export const chatAIService = {
  async sendMessage(message: string) {
    const response = await api.post(
      "/ia/chat",
      { message }
    );

    return response.data;
  }
}