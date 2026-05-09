import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";


export class S3Service {
    private client = new S3Client({
        region: process.env.AWS_REGION || 'us-east-1'
    })

    async generateUploadUrl(key:string): Promise<string> {
        const command = new PutObjectCommand({
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: key,
            ContentType:'image/jpeg'
        })

        const url = await getSignedUrl(this.client,command,{
            expiresIn: 60
        })
        
        return url;
    }
}