import { fetchProducts } from './fetchProducts.js';
import { generateTable } from '../components/tableGeneration.js';

export async function updateProductTable(products) {
    const productsData = products || await fetchProducts();
    await generateTable(productsData);
    location.reload(); // I had to add location.reload because the Flowbite model wasn't working after a remove
}
