
import { S3ProductsService } from "../infra/services/S3ProductsService";



export class GenerateUploadUrlProductsUseCase{
    constructor(private s3service: S3ProductsService){}

    async execute(productId:string){

        const key = `products/${productId}/${Date.now()}.jpg`


        const uploadUrl = await this.s3service.generateUrlProducts(key)
        const fileUrl = `https://${process.env.BUCKET_NAME}.s3.amazonaws.com/${key}`

        return{
            uploadUrl,
            fileUrl
        }
    }
}