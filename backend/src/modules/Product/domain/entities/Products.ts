export class Products{
    constructor(
        public id: string,
        public name: string,
        public description: string,
        public price: number,
        public category: string,
        public imageUrl: string,
        public createdAt: Date,
        public updatedAt: Date
    ){}
}