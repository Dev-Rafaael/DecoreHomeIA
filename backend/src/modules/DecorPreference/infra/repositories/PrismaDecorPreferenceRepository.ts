import { prisma } from "../../../../shared/database/prisma";
import { DecorPreference } from "../../domain/entities/DecorPreference";
import { IDecorPreference } from "../../domain/interface/IDecorPreference";
import { CreateDecorPreferenceDTO } from "../../DTO/CreateDecorPreferenceDTO";
import { UpdateDecorPreferenceDTO } from "../../DTO/UpdateDecorPreferenceDTO";



export class PrismaDecorPreferenceRepository implements IDecorPreference {
    async create(data: CreateDecorPreferenceDTO): Promise<DecorPreference> {
        return await prisma.preference.create(data)
    }
    async findAll(): Promise<DecorPreference[]> {
        return await prisma.preference.findMany()
    }
    async findById(id: string): Promise<DecorPreference | null> {
        return await prisma.preference.findUnique({
            where: {
                id
            }
        })
    }
    async update(id: string, data: UpdateDecorPreferenceDTO): Promise<DecorPreference> {
        return await prisma.preference.update({
            where: {
                id
            },
            data
        })
    }
    async delete(id: string): Promise<void> {
        await prisma.preference.delete({
            where: {
                id
            }
        })
    }
}
