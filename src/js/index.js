import { fetchProducts } from './data/fetchProducts.js';
import { addToCart, updateCartIndicator } from './data/locStorage.js';
import { generateCards } from './components/cardGeneration.js';

function addProductButtonListeners() {
    const productButtons = document.querySelectorAll(`[data-product-id]`);
    productButtons.forEach(button => {
        button.addEventListener("click", () => {
            const productId = button.getAttribute("data-product-id");
            addToCart(productId);
        });
    });
};

document.addEventListener('DOMContentLoaded', async () => {
    const products = await fetchProducts();
    generateCards(products);
    addProductButtonListeners();
    updateCartIndicator();
});
