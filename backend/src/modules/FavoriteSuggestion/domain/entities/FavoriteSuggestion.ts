export class FavoriteSuggestion{
    constructor(
        public id: string,
        public userId: string,
        public suggestionId: string,
        public createdAt: Date
    ){}
}
