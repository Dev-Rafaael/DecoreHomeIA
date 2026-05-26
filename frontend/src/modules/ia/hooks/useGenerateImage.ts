import { useMutation } from "@tanstack/react-query";

import { imageGenerationService }
from "../services/image-generation.service";

export function useGenerateImage() {
  return useMutation({
    mutationFn: imageGenerationService.generate
  });
}