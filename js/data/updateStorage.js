import fetchProducts from './fetchProducts.js';
import generateTable from '../components/tableGeneration.js';

export default async function updateProductTable(products) {
    const productsData = products || await fetchProducts();
    await generateTable(productsData);
    window.location.reload();
}
