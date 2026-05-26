import { useMutation } from "@tanstack/react-query";

import { chatAIService }
from "../services/chat-ai.service";

export function useAIChat() {
  return useMutation({
    mutationFn: chatAIService.sendMessage
  });
}