
import { CreateDecorSuggestionUseCase } from "../../application/useCases/CreateDecorSuggestionUseCase";

export class CreateDecorSuggestionController {
    constructor(private useCase: CreateDecorSuggestionUseCase) { }

    async handle(event: any) {
        try {
            const body = JSON.parse(event.body)
            const suggestion = await this.useCase.execute(body)
            return {
                statusCode: 201,
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