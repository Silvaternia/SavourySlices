import { fetchProducts } from '../data/fetchProducts.js';
import { deleteLocStorageKey, resetStorage } from '../data/locStorage.js';
import { editProduct } from './editProduct.js';
import { generateTable } from '../components/tableGeneration.js';
import { updateProductTable } from '../data/updateStorage.js';

const resetButton = document.getElementById('buttonResetStorage');
resetButton.addEventListener('click', () => {
    resetStorage();
    updateProductTable();
});

function clearFormFields() {
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('price').value = '';
    document.getElementById('stock').value = '';
    document.getElementById('image').value = '';
}

function hideModal(modal) {
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
}
document.querySelector('table').addEventListener('click', async (event) => {
    const target = event.target.closest('button');
    if (!target) return;


    if (target.id === 'deleteProduct') {
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

    clearFormFields();
    hideModal(modal);
}

);

document.addEventListener('DOMContentLoaded', async () => {
    const products = await fetchProducts();
    await generateTable(products);
});

