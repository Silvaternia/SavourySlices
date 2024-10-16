export function generateCards(products) {
    const productsArray = Object.values(products);
    const container = document.getElementById('productContainer');

    if (!Array.isArray(productsArray)) {
        console.error('Input is not an array');
        return;
    }

    if (!container) {
        console.error('Product container element not found');
        return;
    }
    productsArray.forEach(product => {
        if (!product) {
            console.error('a product is missing');
            return;
        }

        const cardStyling = `
        <div class="max-w-sm flex flex-col h-full bg-white border border-gray-200 rounded-lg shadow">
            <img class="p-4 rounded-t-lg" src="${product.image}" alt="${product.title}" />

            <div class="flex mb-auto flex-col items-end px-4 pb-4">
                <a href="#" class="flex flex-col sm:flex-row justify-between w-full">
                    <h3 class="mb-2 text-md md:text-2xl font-bold text-darkGrey">${product.title}</h3>
                    <p class="mb-3">€${product.price}</p>
                </a>
                <p class="w-full mb-3 text-left sm:text-base font-normal text-gray-700">${product.description}</p>
            </div>
            
            <button
                class="text-white m-4 font-medium self-end z-10 rounded-full text-sm p-2 sm:p-2.5 text-center w-fit inline-flex items-center bg-accent"
                data-product-id="${product.id}">
                <i class="text-2xl ph ph-plus"></i>
                <span class="sr-only">Add to cart</span>
            </button>
        </div>
        `;
        document.getElementById('productContainer').innerHTML += cardStyling;
    });
}
