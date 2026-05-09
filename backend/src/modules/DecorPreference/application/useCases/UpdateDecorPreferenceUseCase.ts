


import { IDecorPreference } from "../../domain/interface/IDecorPreference";
import { IQueueDecorPreferenceService } from "../../domain/interface/IQueueService";
import { UpdateDecorPreferenceDTO } from "../../DTO/UpdateDecorPreferenceDTO";

export class UpdateDecorPreferenceUseCase {
  constructor(private IDecorPreferenceRepository: IDecorPreference,
    private IQueueService: IQueueDecorPreferenceService
  ) {}

  async execute(id: string, data: UpdateDecorPreferenceDTO) {
    const preferenceExists = await this.IDecorPreferenceRepository.findById(id);
    if (!preferenceExists) {
      throw new Error("Preferência não encontrada");
    }
    const preference = await this.IDecorPreferenceRepository.update(id, data);

    await this.IQueueService.send({
        type:"PREFERENCE_UPDATED",
        preferenceId:preference?.id
    })
  }
}
