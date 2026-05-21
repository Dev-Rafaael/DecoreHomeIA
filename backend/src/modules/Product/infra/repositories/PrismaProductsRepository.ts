



import { prisma } from "../../../../shared/database/prisma";
import { IProducts } from "../../domain/interface/IProducts";

export class PrismaProductsRepository implements IProducts {
    async findById(id: string): Promise<any> {
        return await prisma.product.findUnique({
            where: {
                id,
            },
        });
    }
    async findAll(): Promise<any> {
        return await prisma.product.findMany();
    }
    async create(data: any): Promise<any> {
        return await prisma.product.create({
            data,
        });
    }
    async update(id: string, data: any): Promise<any> {
        return await prisma.product.update({
            where: {
                id,
            },
            data,
        });
    }
    async delete(id: string): Promise<void> {
        await prisma.product.delete({
            where: {
                id,
            },
        });
    }

}