import { GenerateUploadUrlDecorSuggestionUseCase } from "../../application/useCases/GenerateUploadUrlDecorSuggestionUseCase";



export class GenerateUploadUrlDecorSuggestionController {
  constructor(private useCase: GenerateUploadUrlDecorSuggestionUseCase) { }

  async handle(event: any) {
    try {
      const suggestionId = event.pathParameters?.id
      const url = await this.useCase.execute(suggestionId)
      return {
        statusCode: 200,
        body: {
          url
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