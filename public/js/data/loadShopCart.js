import { generateCart } from '../components/cartGeneration.js';
import { getLocStorage, updateCartIndicator } from './locStorage.js';
import { fetchProducts } from './fetchProducts.js';

export async function getCartProducts() {
    const allProducts = await fetchProducts();
    const cartItems = getLocStorage('cart') || [];

    const cartProductCounts = cartItems.reduce((count, productId) => {
        count[productId] = (count[productId] || 0) + 1;
        return count;
    }, {});

    // cartProducts is an array of objects with the product data + the count of the product in the cart
    const cartProducts = Object.keys(cartProductCounts).map(productId => {
        const product = allProducts.find(product => product.id.toString() === productId.toString());
        return { ...product, count: cartProductCounts[productId] };
    });

    return cartProducts;
}

export async function loadCartData() {
    const cartProducts = await getCartProducts();

    if (!cartProducts.length) {
        updateCartIndicator();
        await generateCart(cartProducts);
        return;
    }

    await generateCart(cartProducts);
    updateCartIndicator();
};
