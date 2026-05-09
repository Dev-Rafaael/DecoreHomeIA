import { CreateDecorSuggestionDTO } from "../../dtos/CreateDecorSuggestionDTO";

export interface IDecorSuggestionRepository {
  create(data: CreateDecorSuggestionDTO): Promise<void>;
}