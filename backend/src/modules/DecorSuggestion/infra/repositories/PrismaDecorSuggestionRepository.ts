import { prisma } from "../../../../shared/database/prisma";
import { DecorSuggestion } from "../../domain/entities/DecorSuggestion";
import { IDecorSuggestion } from "../../domain/interface/IDecorSuggestion";
import { CreateDecorSuggestionDTO } from "../../DTO/CreateDecorSuggestionDTO";


export class PrismaDecorSuggestionRepository implements IDecorSuggestion {
  

  async create(data: CreateDecorSuggestionDTO): Promise<DecorSuggestion> {
    return await prisma.suggestion.create({
      data
    })
  }
  async findAll(): Promise<DecorSuggestion[]> {
    return await prisma.suggestion.findMany()
  }
  async findById(id: string): Promise<DecorSuggestion | null> {
    return await prisma.suggestion.findUnique({
      where: {
        id
      }
    })
  }


}
