


import { IQueueDecorPreferenceService } from "../../../DecorPreference/domain/interface/IQueueService";
import { IDecorSuggestion } from "../../domain/interface/IDecorSuggestion";


export class FindByIdDecorSuggestionUseCase {
  constructor(private IDecorSuggestionRepository: IDecorSuggestion
  ) { }

  async execute(id: string) {
    const suggestion = await this.IDecorSuggestionRepository.findById(id)
    if (!suggestion) {
      throw new Error('Sugestão não encontrada')
    }
    return suggestion


  }
}
