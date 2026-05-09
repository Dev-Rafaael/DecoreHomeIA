import { IASuggestUseCase } from "../../application/useCases/IASuggestUseCase";



export class IASuggestController {
        constructor(private IAUseCase:IASuggestUseCase){}

    async handle(event:any){
        let body;
        try {
            const userId = event.requestContext.authorizer?.jwt?.claims?.sub;
            body = JSON.parse(event.body || '{}');
            const result = await this.IAUseCase.execute(userId,body)
            return {
                statusCode: 200,
                body: JSON.stringify(result)
            };
        } catch (error:any) {
           console.error(error);

    return {
        statusCode: error.message === "User not found" ? 404 : 500,
        body: JSON.stringify({
            msg: error.message || "Erro interno"
        })
    };  
        }
    }
}