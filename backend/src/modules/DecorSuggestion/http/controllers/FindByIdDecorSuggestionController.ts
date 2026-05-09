import { FindByIdDecorSuggestionUseCase } from "../../application/useCases/FindByIdDecorSuggestionUseCase";


export class FindByIdDecorSuggestionController {
    constructor(private useCase: FindByIdDecorSuggestionUseCase) { }

    async handle(event: any) {
        try {
            const suggestionId = event.pathParameters?.id
            const suggestion = await this.useCase.execute(suggestionId)
            return {
                statusCode: 200,
                body: {
                    suggestion
                }
            }
        } catch (error) {
            return {
                statusCode: 400,
                body: {
                    error: 'Bad request'
                }
            }
        }
    }
}