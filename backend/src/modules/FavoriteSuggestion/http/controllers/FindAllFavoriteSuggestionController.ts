import { FindAllFavoriteSuggestionUseCase } from "../../application/useCases/FindAllFavoriteSuggestionUseCase";




export class FindAllFavoriteSuggestionController{
    constructor(private useCase:FindAllFavoriteSuggestionUseCase){}

    async handle(){
        try {
            const preferences = await this.useCase.execute()
            return{
                statusCode:200,
                body:JSON.stringify(preferences)
            }
        } catch (error:any) {
            return{
                statusCode:400,
                body:JSON.stringify({error:error.message})
            }
        }
    }
}