export interface SaveDecorPreferenceDTO {
  ambiente: "SALA" | "QUARTO" | "COZINHA" | "BANHEIRO" | "ESCRITORIO";
  estilo: "MODERNO" | "MINIMALISTA" | "CLASSICO" | "INDUSTRIAL" | "RUSTICO";
  coresPreferidas: string[];
  orcamento: "BAIXO" | "MEDIO" | "ALTO";
  descricaoLivre?: string;
}