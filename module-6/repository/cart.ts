import { CartEntity, CartItemEntity } from "../types/cart.entity"
import { products, ProductEntity } from "../types/product.entity"
import { cart } from "../types/cart.entity"


export async function getCart(): Promise<{ data: CartEntity, error: Error | null }> {
    return {
        data: cart,
        error: null,
    }
}

export async function updateCart(productId: string, count: number): Promise<{ data: CartEntity, error: Error | null }> {
    
    const product: ProductEntity | undefined = products.find(p => p.id === productId);

    if (product) {
        const cartItem: CartItemEntity = {
            product: product,
            count: count
        }

        cart.items.push(cartItem);
    }
    
    return {
        data: cart,
        error: null,
    }
}