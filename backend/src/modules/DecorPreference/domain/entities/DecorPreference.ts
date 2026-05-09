export class DecorPreference{
    constructor(
        public id: string,
        public userId: string,
        public ambiente: string,
        public estilo: string,
        public coresPreferidas: string[],
        public orcamento: string,
        public descricaoLivre: string,
        public createdAt: Date,
        public updatedAt: Date
    ){}
}
