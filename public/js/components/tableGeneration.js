export async function generateTable(products) {
    const table = document.querySelector('table');
    const tbody = table.querySelector('tbody');
    tbody.innerHTML = '';

    products.forEach(product => {
        const tr = document.createElement('tr');
        tr.classList.add('border-b');
        tr.innerHTML = `
            <td class="text-center px-6 py-3">${product.id}</td>
            <td class="px-6 py-3">${product.title}</td>
            <td class="px-6 py-3">${product.description}</td>
            <td class="px-6 py-3">${product.price}</td>
            <td class="px-6 py-3">${product.image}</td>
            <td class="px-6 py-3">${product.stock}</td>
            <td class="flex gap-8">
                <button data-product-id="${product.id}" data-modal-target="form-input-modal" data-modal-toggle="form-input-modal">
                    Edit
                </button>
                <button id="deleteProduct" class="bg-red-700 text-offWhite px-2.5 py-2.5 sm:px-4 sm:py-3 rounded inline-flex items-center justify-center" data-product-id="${product.id}">
                    <i class="ph ph-trash"></i>
                    <span class="sr-only">Remove Button</span>
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });

    document.querySelectorAll('[data-modal-target="form-input-modal"]').forEach(button => {
        button.addEventListener('click', (event) => {
            const productId = event.currentTarget.getAttribute('data-product-id');
            const product = products.find(p => p.id == productId);

            const modal = document.getElementById('form-input-modal');
            modal.setAttribute('data-product-id', productId);

            if (product) {
                document.getElementById('title').value = product.title;
                document.getElementById('description').value = product.description;
                document.getElementById('price').value = product.price;
                document.getElementById('stock').value = product.stock;
                document.getElementById('image').value = product.image;
            }
        });
    });
}
