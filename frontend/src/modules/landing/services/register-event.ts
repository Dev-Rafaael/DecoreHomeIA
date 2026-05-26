import { EventFormData } from "../schemas/event-schema"

export async function registerEvent(
  data: EventFormData
) {
  const response = await fetch(
    "https://sua-api.com/inscrever",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  )

  if (!response.ok) {
    throw new Error("Erro ao registrar")
  }

  return response.json()
}