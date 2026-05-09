
export interface IAIService {
    generateDecorSuggestion(prompt: string): Promise<string>;
}
