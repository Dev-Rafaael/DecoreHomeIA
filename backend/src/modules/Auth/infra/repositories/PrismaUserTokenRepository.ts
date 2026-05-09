import { prisma } from "../../../../shared/database/prisma";
import { UserToken } from "../../domain/entities/UserToken";
import { IUserTokenRepository } from "../../domain/interfaces/IUserTokenRepository";

export class PrismaUserTokenRepository implements IUserTokenRepository {

  async create(data: UserToken): Promise<void> {
    await prisma.userToken.create({
      data
    });
  }

  async findByToken(token: string) {
    return await prisma.userToken.findFirst({
      where: {
        token
      }
    });
  }

  async delete(token: string): Promise<void> {
    await prisma.userToken.deleteMany({
      where: {
        token
      }
    });
  }
}