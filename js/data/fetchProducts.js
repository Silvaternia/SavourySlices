import fetchJsonData from './fetchJsonData.js';
import { getLocStorage, setLocStorage } from './locStorage.js';

export default async function fetchProducts() {
    let products = getLocStorage("products");

    if (!products) {
        products = await fetchJsonData();
        setLocStorage("products", products);
    }
    return products;
}
