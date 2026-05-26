export type DecorItem = {
   movel: string;
   estilo: string;
   cores: string[];
   material: string;
   dica: string;
}

export type DecorResponse = {
   ambiente: string;
   itens: DecorItem[];
}