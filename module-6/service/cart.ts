import { CartEntity } from "../types/cart.entity";
import { getCart, updateCart} from "../repository/cart";


// export async function readAll(): Promise<ProductEntity[]> {
//     const products = await getAllProducts();

//     return products;
// }

export async function read(): Promise<{ data: CartEntity, error: Error | null } | undefined> {
    const data = await getCart();

    return data;
}

export async function update(body: {productId: string, count: number}): Promise<{ data: CartEntity, error: Error | null } | undefined> {
    console.log(body);
    const cart = await updateCart(body.productId, body.count);

    return cart;
}

// export async function delete(userId: string): Promise<CartEntity | undefined> {
//     const cart = await deleteCart(userId);

//     return cart;
// }