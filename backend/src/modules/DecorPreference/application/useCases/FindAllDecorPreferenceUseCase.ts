import { IDecorPreference } from "../../domain/interface/IDecorPreference";


export class FindAllDecorPreferenceUseCase{
        constructor(private IDecorPreferenceRepository:IDecorPreference){}


        async execute(){
            return await this.IDecorPreferenceRepository.findAll();
        }
}
