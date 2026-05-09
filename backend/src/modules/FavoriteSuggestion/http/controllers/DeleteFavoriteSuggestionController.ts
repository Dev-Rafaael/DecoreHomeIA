import { DeleteFavoriteSuggestionUseCase } from "../../application/useCases/DeleteFavoriteSuggestionUseCase"


export class DeleteFavoriteSuggestionController{
    constructor(private useCase: DeleteFavoriteSuggestionUseCase){}

    async handle(event:any){
        try {
            const suggestionId = event.pathParameters?.id

            await this.useCase.execute(suggestionId)
            return{
                statusCode:200,
                body: JSON.stringify({message:"Sugestão favorita deletada com sucesso"})
            }
        } catch (error:any) {
            return{
                statusCode:400,
                body: JSON.stringify({error:error.message})
            }
        }
    }
}