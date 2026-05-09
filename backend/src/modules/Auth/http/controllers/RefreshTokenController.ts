

import { RefreshTokenUseCase } from "../../application/useCases/RefreshTokenUseCase";

export class RefreshTokenController {
  constructor(private refreshTokenUseCase: RefreshTokenUseCase) { }
 
  
  async handle(event:any) {
        try {
             const refreshToken = event.cookies?.refreshToken;
            const newToken = await this.refreshTokenUseCase.execute(refreshToken);
            return {
                statusCode: 200,
                body: JSON.stringify({token: newToken})
            };
        } catch (error) {
            return {
                statusCode: 400,
                body: JSON.stringify({msg:'Erro ao renovar token'})
            };
        }
  }
}