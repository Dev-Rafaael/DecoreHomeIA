export interface Preference {
    id: string;
  userId: string;
  ambiente: string;
  estilo: string;
  coresPreferidas: string[];
  orcamento: string;
  descricaoLivre: string;
  createdAt: Date;
  updatedAt: Date;
}

