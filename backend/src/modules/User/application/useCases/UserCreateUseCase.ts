import { IUserRepository } from "../../domain/interfaces/IUserRepository";
import { IHashService } from "../../domain/interfaces/IHashService";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";
import { IQueueService } from "../../domain/interfaces/IQueueService";

export class UserCreateUseCase {
 constructor(
    private userRepository:IUserRepository,
     private hashService:IHashService,
    private queueService: IQueueService
    ){}
 
 async handle(data: CreateUserDTO){
    const userExist = await this.userRepository.findByEmail(data.email)
    if(userExist) {
        throw new Error('User already exists')
    }
    if(!data.password){
        throw new Error('Password is required')
    }
    const hashedPassword = await this.hashService.hash(data.password)
   
    if(!data.name){
        throw new Error('Name is required')
    }
    if(!data.email){
        throw new Error('Email is required')
    }
  
    if(!data.phone){
        throw new Error('Phone is required')
    }
    if(!data.birthDate){
        throw new Error('Birth date is required')
    }
    if(!data.gender){
        throw new Error('Gender is required')
    }
    const user = await this.userRepository.create({
        ...data,
        password: hashedPassword
    });
    await this.queueService.send({
        type:'USER_CREATE',
        userId:user.id
    })
    return user
 }
}