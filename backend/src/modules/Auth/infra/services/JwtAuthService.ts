



import { IAuthRepository } from "../../domain/interfaces/IAuthRepository";
import jwt from 'jsonwebtoken';

export class JwtAuthService implements IAuthRepository {
  async  generateToken(payload: any): Promise<string> {
        return  jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: '1h' });
    }

    async verifyToken(token: string): Promise<any> {
        return jwt.verify(token,process.env.JWT_SECRET!);
    }
}