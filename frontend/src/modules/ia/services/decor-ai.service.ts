

import {
  GenerateDecorDTO
} from "../types/generate-decor.dto";

import {
  DecorResponse
} from "../types/decor-ai";
import { api } from "@/src/lib/axios/axios";

export const decorAIService = {
  async generate(
    data: GenerateDecorDTO
  ): Promise<DecorResponse> {

    const response = await api.post(
      "/ia/decor",
      data
    );

    return response.data;
  }
}