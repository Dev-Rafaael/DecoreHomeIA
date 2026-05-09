

import { IDecorPreference } from "../../domain/interface/IDecorPreference";
import { CreateDecorPreferenceDTO } from "../../DTO/CreateDecorPreferenceDTO";
import { IQueueDecorPreferenceService } from "../../domain/interface/IQueueService";

export class CreateDecorPreferenceUseCase {
  constructor(private IDecorPreferenceRepository: IDecorPreference,
    private IQueueService: IQueueDecorPreferenceService
  ) {}
    
    async execute(data: CreateDecorPreferenceDTO){
        if(!data.ambiente){
            throw new Error("Ambiente é Obrigatorio")
        }
        if(!data.coresPreferidas || data.coresPreferidas.length === 0){
            throw new Error("Cores Preferidas é Obrigatorio")
        }

        if(!data.estilo){
            throw new Error("Estilo é Obrigatorio")
        }
        if(!data.orcamento){
            throw new Error("Orçamento é Obrigatorio")
        }
        const preference = await this.IDecorPreferenceRepository.create(data);
        await this.IQueueService.send({
            type:"PREFERENCE_CREATED",
            preferenceId: preference.id
        });
        return preference;
    }
}