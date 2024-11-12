
export default async function generateCart(products) {
    if (!products) return;
    let totalProductPrice = 0;
    const container = document.getElementById('shopCartContainer');
    const docFragment = document.createDocumentFragment();

    container.innerHTML = '';

    products.forEach(product => {
        const cart = document.createElement('div');
        let productPrice = (product.price * product.count).toFixed(2);
        totalProductPrice += parseFloat(productPrice);

        cart.classList.add('flex', 'w-full', 'border', 'rounded', 'shadow-sm', 'p-4', 'mb-4', 'items-center');

        cart.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="w-24 h-24 object-cover mr-4">
            <div class="flex-grow">
                <h2 class="text-lg md:text-xl text-darkGrey font-bold">${product.title}</h2>
                <p class="text-sm sm:text-base text-gray-600">${product.description}</p>
            </div>
            <div class="text-right">
                <p class="text-lg font-semibold">€${productPrice}</p>
                <div class="inline-flex flex-col gap-2 sm:gap-4 sm:flex-row">

                    <button data-product-id="${product.id}" id="deleteProduct"
                    class="mt-2 order-1 deleteProduct bg-red-500 text-offWhite 
                    px-2.5 py-1 sm:px-4 sm:py-2 rounded">
                        <i class="ph ph-trash"></i>
                    <span class="sr-only">Remove Product</span>
                    </button>
                    
                    <span data-product-id="${product.id}"
                    class="mt-2 text-darkGrey border-darkGrey border 
                    px-2.5 py-1 sm:px-4 sm:py-2 rounded">${product.count}
                    </span>
                </div>
            </div>
        `;
        docFragment.appendChild(cart);
    });
    // Displays the price & buttons if the cart has items
    if (products.length > 0) {
        const totalPriceElement = document.createElement('div');
        totalPriceElement.classList.add('text-right', 'self-end', 'font-bold', 'text-lg', 'mt-4');
        totalPriceElement.textContent = `Total Price: €${totalProductPrice.toFixed(2)}`;
        docFragment.appendChild(totalPriceElement);

        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('flex', 'w-full', 'justify-between', 'mt-4');
        buttonContainer.innerHTML = clearCartButton + orderButton;
        docFragment.appendChild(buttonContainer);
    }

    container.appendChild(docFragment);
}

const clearCartButton = `
<button id="clearCart" class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
    <div
        class="inline-flex items-center justify-center px-8 py-3 text-base 
        font-bold text-center bg-red-400 rounded-lg text-darkGrey hover:bg-red-500">
        <i class="ph ph-arrow-counter-clockwise"></i>
        Clear cart
    </div>
</button>`;

const orderButton = `
<button id="confirmOrder" class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
    <div
        class="inline-flex items-center justify-center px-8 py-3 text-base 
        font-bold text-center bg-green-400 rounded-lg text-darkGrey hover:bg-green-500">
        Confirm Order
        <i class="w-3.5 h-3.5 ms-2 ph ph-arrow-right"></i>
    </div>
</button>
`;
