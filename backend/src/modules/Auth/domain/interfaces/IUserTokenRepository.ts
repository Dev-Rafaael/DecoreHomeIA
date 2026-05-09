import { UserToken } from "../entities/UserToken"

export interface IUserTokenRepository {
  create(data:UserToken): Promise<void>
  findByToken(token: string): Promise<UserToken | null>
  delete(token: string): Promise<void>
}