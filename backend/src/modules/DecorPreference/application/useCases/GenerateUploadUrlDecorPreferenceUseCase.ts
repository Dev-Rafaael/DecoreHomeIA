import { S3DecorPreferenceService } from "../../infra/services/S3DecorPreferenceService";



export class GenerateUploadUrlDecorPreferenceUseCase {
    constructor(private s3service: S3DecorPreferenceService) { }

    async execute(DecorPreferenceId: string) {
        //    cria chave
        const key = `decor-preferences/${DecorPreferenceId}/${Date.now()}.jpg`


        //  cria variavel uploadurl usando o constuctor  e fileUrl e retorna ambas

        const uploadUrl = await this.s3service.generateUrlDecorPreference(DecorPreferenceId)
        const fileUrl = `https://${process.env.BUCKET_NAME}.s3.amazonaws.com/${key}`

        return {
            uploadUrl,
            fileUrl
        }
    }

}
