import { S3FavoriteSuggestionService } from "../../infra/services/S3FavoriteSuggestionService";



export class GenerateUploadUrlFavoriteSuggestionUseCase {
    constructor(private s3service: S3FavoriteSuggestionService) { }

    async execute(FavoriteSuggestionId: string) {
        //    cria chave
        const key = `decor-preferences/${FavoriteSuggestionId}/${Date.now()}.jpg`


        //  cria variavel uploadurl usando o constuctor  e fileUrl e retorna ambas

        const uploadUrl = await this.s3service.generateUploadUrl(FavoriteSuggestionId)
        const fileUrl = `https://${process.env.BUCKET_NAME}.s3.amazonaws.com/${key}`

        return {
            uploadUrl,
            fileUrl
        }
    }

}
