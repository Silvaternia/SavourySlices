
import { removeFromCart, updateCartIndicator } from '../data/locStorage.js';
import { loadCartData } from '../data/loadShopCart.js';

export async function generateCart(products) {
    if (!products) return;

    const container = document.getElementById('shopcartContainer');
    container.innerHTML = '';
    // There might be a better way to fix my image issues but this is the quickest solution I found that workes

    products.forEach(product => {
        if (!product) return;

        const cart = document.createElement('div');
        cart.classList.add('flex', 'border', 'rounded', 'shadow-sm', 'p-4', 'mb-4', 'items-center');


        cart.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="w-24 h-24 object-cover mr-4">
            <div class="flex-grow">
                <h2 class="text-lg md:text-xl text-darkGrey font-bold">${product.title}</h2>
                <p class="text-sm sm:text-base text-gray-600">${product.description}</p>
            </div>
            <div class="text-right">
                <p class="text-lg font-semibold">€${product.price * product.count}</p>
                <div class="inline-flex flex-col gap-2 sm:gap-4 sm:flex-row">
                    <button data-product-id="${product.id}" class="mt-2 order-1 deleteProduct bg-red-500 text-offWhite px-2.5 py-1 sm:px-4 sm:py-2 rounded">
                        <i class="ph ph-trash"></i>
                    </button>
                    <span class="sr-only">Remove Button</span>
                    <span data-product-id="${product.id}" class="mt-2 text-darkGrey border-darkGrey border px-2.5 py-1 sm:px-4 sm:py-2 rounded">${product.count}</span>
                </div>
            </div>
        `;

        container.appendChild(cart);

        document.querySelectorAll('.deleteProduct[data-product-id]').forEach(button => {
            button.addEventListener('click', async (event) => {
                const productId = event.currentTarget.getAttribute('data-product-id');
                removeFromCart(productId);
                await loadCartData();
                updateCartIndicator();
            });
        });

    });

}
