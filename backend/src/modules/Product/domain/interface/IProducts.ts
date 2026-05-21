import { CreateProductDTO } from "../../dtos/CreateProduct";
import { UpdateProductDTO } from "../../dtos/UpdateProduct";
import { Products } from "../entities/Products";



export interface IProducts {
    findById(id: string): Promise<Products | null>;
    findAll(): Promise<Products[]>;
    create(data: CreateProductDTO): Promise<Products>;
    update(id: string, data: UpdateProductDTO): Promise<Products>;
    delete(id: string): Promise<void>;
}