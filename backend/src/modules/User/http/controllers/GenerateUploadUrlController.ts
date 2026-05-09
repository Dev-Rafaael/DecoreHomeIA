import { GenerateUploadUrlUseCase } from "../../application/useCases/GenerateUploadUrlUseCase";



export class GenerateUploadUrlController {
    constructor(private generateUploadUrlUseCase: GenerateUploadUrlUseCase) {}
    
    
    async handle(event:any){
        try {
            const userId = event.pathParameters?.userId;
            
            const result = await this.generateUploadUrlUseCase.execute(userId);
            return{
                statusCode: 200,
                body: JSON.stringify(result)
            }
        } catch (error) {
            console.error(error)
            return{
                statusCode: 400,
                body: JSON.stringify({ message: 'Error ao gerar URL de upload' })
            }
        }
    }
}
