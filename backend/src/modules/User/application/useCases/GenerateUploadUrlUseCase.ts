import { S3Service } from "../../infra/services/S3Service";



export class GenerateUploadUrlUseCase{
    constructor(private s3Service:S3Service){}


    async execute(userId:string){
        const key = `avatars/${userId}.jpg`;

        const uploadUrl = await this.s3Service.generateUploadUrl(key)
        const fileUrl = `https://${process.env.BUCKET_NAME}.s3.amazonaws.com/${key}`

        return{
            uploadUrl,
            fileUrl
        }
    }
    
}