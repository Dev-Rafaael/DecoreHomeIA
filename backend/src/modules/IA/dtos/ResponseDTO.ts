export interface DecorItemDTO {
  movel: string;
  estilo: string;
  cores: string[];
  material: string;
  dica: string;
}

export interface DecorSuggestionResponseDTO {
  ambiente: string;
  itens: DecorItemDTO[];
}