    import { prisma } from "../../../../shared/database/prisma";
    import { UserToken } from "../../../Auth/domain/entities/UserToken";
    import { User } from "../../domain/entities/User";
    import { IUserRepository } from "../../domain/interfaces/IUserRepository";
    import { CreateUserDTO } from "../../dtos/CreateUserDTO";
    import { UpdateUserDTO } from "../../dtos/UpdateUserDTO";

    export class PrismaUserRepository implements IUserRepository {
      async findAll(): Promise<User[]> {
            return await prisma.user.findMany()
        }
        async findByEmail(email: string): Promise<User | null> {
            return await prisma.user.findFirst({
                where: {
                    email
                }
            })
        }
        async findById(id: string): Promise<User | null> {
            return await prisma.user.findUnique({
                where: {
                    id
                }
            })
        }
        async findByToken(token: string): Promise<UserToken | null> {
            return await prisma.userToken.findFirst({
                where: {
                    token
                }
            })
        }
        async create(user: CreateUserDTO): Promise<User> {
            return await prisma.user.create({
                data: {
                    name: user.name,
                    email: user.email,
                    password: user.password,
                    birthDate: user.birthDate,
                    gender: user.gender,
                    phone: user.phone,
                    role: user.role
                }
            })
        }
        async update(id: string, data: UpdateUserDTO): Promise<User> {
            return await prisma.user.update({
                where: {
                    id
                },
                data
            })
        }
        async delete(id: string): Promise<void> {
            await prisma.user.delete({
                where: {
                    id
                }
            })
        }
    }