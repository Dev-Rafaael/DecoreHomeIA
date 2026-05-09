import { IAIService } from "../../domain/interfaces/IAIService";



export class OpenAIService implements IAIService {
    async generateDecorSuggestion(prompt: string): Promise<string> {
        try {
            const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    model: "openai/gpt-oss-120b:free",
                    messages: [{ role: "user", content: prompt }],
                }),
            })  
            if (!res.ok) throw new Error("Erro na IA");

            const data = await res.json()

            return data.choices[0].message.content || "Sugestão de decoração";
        } catch (error) {
            throw new Error("Falha ao chamar IA")
        }
    }
}
