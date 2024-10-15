import { fetchProducts } from './data/fetchProducts.js';
import { deleteLocStorageKey, resetStorage } from './data/locStorage.js';
import { editProduct } from './data/editProduct.js';
import { generateTable } from './components/tableGeneration.js';
import { updateProductTable } from './data/updateStorage.js';

const resetButton = document.getElementById('resetStorage');
resetButton.addEventListener('click', () => {
    resetStorage();
    updateProductTable();
});

document.querySelector('table').addEventListener('click', async (event) => {
    const target = event.target;

    if (target.id === 'edit-product') {
        editProduct("products", target.dataset.productId);
        updateProductTable();

    } else if (target.id === 'remove-product') {
        deleteLocStorageKey("products", target.dataset.productId);
        await fetchProducts();
        updateProductTable();
        alert('Product deleted!');
    }
});

document.getElementById('confirmEdit').addEventListener('click', (event) => {
    event.preventDefault();
    const modal = document.getElementById('form-input-modal');
    const productId = modal.getAttribute('data-product-id');
    editProduct(productId);
    alert('Product updated!');

    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('price').value = '';
    document.getElementById('stock').value = '';
    document.getElementById('image').value = '';

    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
}

);

document.addEventListener('DOMContentLoaded', async () => {
    const products = await fetchProducts();
    await generateTable(products);
});

