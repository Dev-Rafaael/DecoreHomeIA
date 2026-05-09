import { GenerateUploadUrlDecorPreferenceUseCase } from "../../application/useCases/GenerateUploadUrlDecorPreferenceUseCase";



export class GenerateUploadUrlDecorPreferenceController {
  constructor(private useCase:GenerateUploadUrlDecorPreferenceUseCase){}   

  async handle(event:any){
    try {
      const decorPreferenceId = event.pathParameters?.decorPreferenceId
      const url = await this.useCase.execute(decorPreferenceId)
      return{
        statusCode:200,
        body:JSON.stringify(url)
      }
    } catch (error:any) {
      return{
        statusCode:400,
        body: JSON.stringify({error:error.message})
      }
    }
  }
}