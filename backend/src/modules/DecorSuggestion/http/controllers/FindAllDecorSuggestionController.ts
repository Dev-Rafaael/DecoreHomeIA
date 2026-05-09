import { FindAllDecorSuggestionUseCase } from "../../application/useCases/FindAllDecorSuggestionUseCase";




export class FindAllDecorSuggestionController {
    constructor(private useCase: FindAllDecorSuggestionUseCase) { }

    async handle() {
        try {
            const suggestions = await this.useCase.execute()
            return {
                statusCode: 200,
                body: {
                    suggestions
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