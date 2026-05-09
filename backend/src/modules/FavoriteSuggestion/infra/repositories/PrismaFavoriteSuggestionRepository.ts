import { prisma } from "../../../../shared/database/prisma";
import { FavoriteSuggestion } from "../../domain/entities/FavoriteSuggestion";
import { IFavoriteSuggestion } from "../../domain/interface/IFavoriteSuggestion";
import { CreateFavoriteSuggestionDTO } from "../../DTO/CreateFavoriteSuggestionDTO";


export class PrismaFavoriteSuggestionRepository implements IFavoriteSuggestion {
   
    async create(data: CreateFavoriteSuggestionDTO): Promise<FavoriteSuggestion> {
        return await prisma.favoriteSuggestion.create({
            data
        })
    }
    async findAll(): Promise<FavoriteSuggestion[]> {
        return await prisma.favoriteSuggestion.findMany()
    }
    async findById(id: string): Promise<FavoriteSuggestion | null> {
        return await prisma.favoriteSuggestion.findUnique({
            where: {
                id
            }
        })
    }
    async delete(id: string): Promise<void> {
        await prisma.favoriteSuggestion.delete({
            where: {
                id
            }
        })
    }
}
