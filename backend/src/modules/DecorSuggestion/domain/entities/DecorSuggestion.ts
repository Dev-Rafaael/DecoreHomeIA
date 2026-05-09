export class DecorSuggestion{
    constructor(
        public id: string,
        public userId: string,
        public prompt: string,
        public response: any,
        public ambiente: string,
        public estilo: string,
        public cores: string[],
        public orcamento: string,
        public modelUsed: string,
        public createdAt: Date
    ){}
}
