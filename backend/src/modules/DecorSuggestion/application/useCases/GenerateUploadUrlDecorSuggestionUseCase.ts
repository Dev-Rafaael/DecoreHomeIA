import { S3DecorSuggestionService } from "../../infra/services/S3DecorSuggestionService"

export class GenerateUploadUrlDecorSuggestionUseCase {
    constructor(private s3service: S3DecorSuggestionService) { }

    async execute(DecorSuggestionId: string) {
        //    cria chave
        const key = `decor-suggestion/${DecorSuggestionId}/${Date.now()}.jpg`
        //  cria variavel uploadurl usando o constuctor  e fileUrl e retorna ambas
        const uploadurl = await this.s3service.generateUploadUrl(key)
        const fileUrl = `https://decorehome-ai.s3.sa-east-1.amazonaws.com/${key}`
        return { uploadurl, fileUrl }
    }
}
