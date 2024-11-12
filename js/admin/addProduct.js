import { setLocStorage } from '../data/locStorage.js';
import fetchProducts from '../data/fetchProducts.js';
import validateInputs from '../data/validateInput.js';

function getFormValues() {
    return {
        title: document.getElementById('title').value,
        description: document.getElementById('description').value,
        price: document.getElementById('price').value,
        stock: document.getElementById('stock').value,
        image: document.getElementById('image').value,
    };
}

document.getElementById('addProduct').addEventListener('click', async (event) => {
    event.preventDefault();

    const formValues = getFormValues();

    if (validateInputs(formValues)) {
        await addProduct(formValues);
    }
});

async function addProduct(formValues) {
    const allProducts = await fetchProducts();

    formValues.id = allProducts.length + 1;
    allProducts.push(formValues);

    setLocStorage('products', allProducts);
    alert('Product added!');
    document.querySelector('form').reset();
    document.getElementById('imagePreview').classList.add('hidden');
}
