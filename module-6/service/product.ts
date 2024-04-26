import { ProductEntity } from "../types/product.entity";
import { getAllProducts, getProductById } from "../repository/products";


export async function readAll(): Promise<ProductEntity[]> {
    const products = await getAllProducts();

    return products;
}

export async function read(userId: string): Promise<ProductEntity | undefined> {
    const product = await getProductById(userId);

    return product;
}