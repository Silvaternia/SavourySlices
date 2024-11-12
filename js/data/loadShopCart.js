import generateCart from '../utils/cardUtils.js';
import { getLocStorage, updateCartIndicator } from './locStorage.js';
import fetchProducts from './fetchProducts.js';

export async function getCartProducts() {
    const allProducts = await fetchProducts();
    const cartItems = getLocStorage('cart') || [];

    // Reduce to an object where the keys are the product ids and the values are the total count of appearance
    const cartProductCounts = cartItems.reduce((count, productId) => {
        count[productId] = (count[productId] || 0) + 1;
        return count;
    }, {});

    // cartProducts is an array of objects with the product data + added the count
    const cartProducts = Object.keys(cartProductCounts).map(productId => {
        const foundProduct = allProducts.find(product => product.id.toString() === productId.toString());
        return { ...foundProduct, count: cartProductCounts[productId] };
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
}
