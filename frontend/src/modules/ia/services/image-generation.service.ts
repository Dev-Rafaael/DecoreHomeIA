import { api } from "@/src/lib/axios/axios";

export const imageGenerationService = {
  async generate(prompt: string) {
    const response = await api.post(
      "/ia/image",
      { prompt }
    );

    return response.data;
  }
}