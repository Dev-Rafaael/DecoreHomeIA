export type DecorItem = {
   ambiente: string;
   estilo: string;
   cores: string;
   orcamento: string;
   descricaoLivre?: string;
}

export type DecorResponse = {
  summary: string

  palette: string[]

  furniture: {
    name: string
    reason: string
  }[]

  lighting: string[]

  organizationTips: string[]

  materials: string[]

  styleExplanation: string
}