import { CreateDecorPreferenceDTO } from "../../DTO/CreateDecorPreferenceDTO";
import { UpdateDecorPreferenceDTO } from "../../DTO/UpdateDecorPreferenceDTO";
import { DecorPreference } from "../entities/DecorPreference";

export interface IDecorPreference {
  create(data:CreateDecorPreferenceDTO):Promise<DecorPreference>
  findAll():Promise<DecorPreference[]>
  findById(id:string):Promise<DecorPreference | null>
  update(id:string, data:UpdateDecorPreferenceDTO):Promise<DecorPreference | null>
}