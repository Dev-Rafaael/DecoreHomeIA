export class User {
   constructor(
    public id: string,
    public name: string,
    public email: string,
    public password: string,
    public role: string,
    public birthDate: Date,
    public gender: string,
    public phone: string,
    public createdAt: Date,
    public updatedAt: Date
   ){}

}