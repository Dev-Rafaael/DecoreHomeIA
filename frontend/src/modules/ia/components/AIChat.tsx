"use client";

import { useState } from "react";

import { useAIChat }
from "../hooks/useAIChat";

export function AIChat() {

  const [message, setMessage] =
    useState("");

  const mutation = useAIChat();

  async function handleSend() {
    await mutation.mutateAsync(message);
  }

  return (
    <div>

      <textarea
        value={message}
        onChange={(e) =>
          setMessage(e.target.value)
        }
      />

      <button
        onClick={handleSend}
      >
        Enviar
      </button>

    </div>
  );
}