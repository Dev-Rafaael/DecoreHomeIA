

  import { IUserRepository } from "../../../User/domain/interfaces/IUserRepository";
  import { IAIService } from "../../domain/interfaces/IAIService";
  import { IDecorSuggestionRepository } from "../../domain/interfaces/IDecorSuggestionRepository";
  import { GenerateDecorSuggestionDTO } from "../../dtos/GenerateDecorSuggestionDTO";

  export class IASuggestUseCase {
      constructor(
      private readonly iaService: IAIService,
      private readonly userRepository: IUserRepository,
      private readonly suggestionRepository: IDecorSuggestionRepository
    ) {}

      async execute(userId: string, input: GenerateDecorSuggestionDTO) {
          const user = await this.userRepository.findById(userId);
          if (!user) throw new Error("User not found");

          const prompt = `
          
          Usuário: ${user.name}

          Preferências:
          -Ambiente: ${input.ambiente},
          -Estilo:${input.estilo},
          -Cores:${input.cores.join(", ")},
          -Orçamento:${input.orcamento},
          -Extra: ${input.descricaoLivre || "Nenhuma"}


          Responda em Formato JSON:
          {
          "ambiente": "....",
          "itens":[
          {
          "movel": "....",
          "estilo": "....",
          "cores": ["...."],
          "material": "....",
          "dica": "...."
          }]
          `;

          const iaResponse = await this.iaService.generateDecorSuggestion(prompt)
        let parsed;

    try {
        const clean = iaResponse
          .replace(/```json/g, "")
          .replace(/```/g, "")
          .trim();

        parsed = JSON.parse(clean);
      } catch {
        throw new Error("IA retornou JSON inválido");
      }

      if (!parsed?.ambiente || !Array.isArray(parsed.itens)) {
        throw new Error("Formato inválido da IA");
      }
        this.suggestionRepository.create({
        userId,
        prompt,
        response: parsed,
        ambiente: input.ambiente,
        estilo: input.estilo,
        cores: input.cores,
        orcamento: input.orcamento
      }).catch(console.error);

      return parsed;

      }
  }