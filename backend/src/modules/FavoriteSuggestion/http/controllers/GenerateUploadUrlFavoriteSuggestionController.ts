import { GenerateUploadUrlFavoriteSuggestionUseCase } from "../../application/useCases/GenerateUploadUrlDecorPreferenceUseCase"



export class GenerateUploadUrlFavoriteSuggestionController {
  constructor(private useCase:GenerateUploadUrlFavoriteSuggestionUseCase){}   

  async handle(event:any){
    try { 
      const FavoriteSuggestionId = event.pathParameters?.FavoriteSuggestionId
      const url = await this.useCase.execute(FavoriteSuggestionId)
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