

import { IDecorSuggestion } from "../../domain/interface/IDecorSuggestion";

import { IQueueDecorSuggestionService } from "../../domain/interface/IQueueDecorSuggestionService";
import { CreateDecorSuggestionDTO } from "../../DTO/CreateDecorSuggestionDTO";

export class CreateDecorSuggestionUseCase {
  constructor(private IDecorSuggestionRepository: IDecorSuggestion,
    private IQueueService: IQueueDecorSuggestionService
  ) {}
    
  async execute(data:CreateDecorSuggestionDTO){
    if(!data.userId){
      throw new Error('User ID é Obrigatório')
    }
    if(!data.prompt){
      throw new Error('Prompt é Obrigatório')
    }
    if(!data.ambiente){
      throw new Error('Ambiente é Obrigatório')
    }
    if(!data.estilo){
      throw new Error('Estilo é Obrigatório')
    }
    if(!data.cores){
      throw new Error('Cores é Obrigatório')
    }
    if(!data.orcamento){
      throw new Error('Orçamento é Obrigatório')
    }
    if(!data.modelUsed){
      throw new Error('Modelo usado é Obrigatório')
    }
    const suggestion = await this.IDecorSuggestionRepository.create(data)
    await this.IQueueService.send({
      type:"SUGGESTION_CREATED",
      suggestionId: suggestion.id
    })
    return suggestion
  }
}