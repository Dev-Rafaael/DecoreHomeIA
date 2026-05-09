import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";


export class S3DecorPreferenceService {
    // Cria client 
  private client = new S3Client({
    region: process.env.AWS_REGION || 'us-east-1'
  })

  
    // cria funcao generateurl  com PutObjectCommand que tem bucker do env, key e contentType
   async generateUrlDecorPreference(key:string):Promise<string>{
    const command = new PutObjectCommand({
        Bucket:process.env.BUCKET_NAME!,
        Key:key,
        ContentType: 'image/jpg'
    })
    // variavel que pega getSignedUrl passando client e a variavel dentro da funcao 
    const url = await getSignedUrl(this.client,command,{
        expiresIn:60
    })
    return url
   }
}