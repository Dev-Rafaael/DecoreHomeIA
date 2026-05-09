import { prisma } from "../../../../shared/database/prisma";
import { IDecorSuggestionRepository } from "../../domain/interfaces/IDecorSuggestionRepository";
import { CreateDecorSuggestionDTO } from "../../dtos/CreateDecorSuggestionDTO";



export class PrismaDecorSuggestion implements IDecorSuggestionRepository {
    async create(data: CreateDecorSuggestionDTO): Promise<void> {
        await prisma.decorSuggestion.create({
            data: {
                userId: data.userId,
                prompt: data.prompt,
                response: data.response,
                ambiente: data.ambiente,
                estilo: data.estilo,
                cores: data.cores,
                orcamento: data.orcamento
            }
        })
    }


}