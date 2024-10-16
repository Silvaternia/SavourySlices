import { setLocStorage } from "../data/locStorage.js";
import { updateProductTable } from "../data/updateStorage.js";

export async function editProduct(productId) {
    const productsData = localStorage.getItem('products');
    const products = productsData ? JSON.parse(productsData) : [];
    const numericProductId = parseInt(productId, 10);
    const index = products.findIndex(p => p.id == numericProductId);

    function isValid(value) {
        return value !== null && value !== undefined && value !== '';
    }

    function getUpdatedValue(elementId, defaultValue) {
        const element = document.getElementById(elementId);
        return isValid(element.value) ? element.value : defaultValue;
    }
    // checks if the product props are valid and updates the product. If it's not valid it uses the defaul value
    if (index !== -1) {
        products[index] = {
            id: productId,
            title: getUpdatedValue('title', products[index].title),
            description: getUpdatedValue('description', products[index].description),
            price: isValid(document.getElementById('price').value) ? parseFloat(document.getElementById('price').value) : products[index].price,
            stock: isValid(document.getElementById('stock').value) ? parseInt(document.getElementById('stock').value, 10) : products[index].stock,
            image: getUpdatedValue('image', products[index].image)
        };

        setLocStorage('products', products);
        await updateProductTable(products);
        location.reload(); // I had to add location.reload because the Flowbite model wasn't working after a remove
    }
}
