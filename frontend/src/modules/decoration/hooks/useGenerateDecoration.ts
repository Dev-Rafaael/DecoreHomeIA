import { useMutation } from "@tanstack/react-query";

import { decorAIService }
from "../services/decoration-ai.service";

export function useGenerateDecor() {
  return useMutation({
    mutationFn: decorAIService.generate
  });
}