import { ProductEntity } from "../types/product.entity"
import { products } from "../types/product.entity"


export async function getAllProducts(): Promise<ProductEntity[] | []> {
    return products;
}

export async function getProductById(id: string): Promise<ProductEntity | undefined> {
    return products.find(p => p.id === id);
}
