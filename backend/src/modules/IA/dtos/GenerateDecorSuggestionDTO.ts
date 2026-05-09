export interface GenerateDecorSuggestionDTO {
   ambiente: "SALA" | "QUARTO" | "COZINHA" | "BANHEIRO" | "ESCRITORIO";
  estilo: "MODERNO" | "MINIMALISTA" | "CLASSICO" | "INDUSTRIAL" | "RUSTICO";
  cores: string[];
  orcamento: "BAIXO" | "MEDIO" | "ALTO";
  descricaoLivre?: string;
}