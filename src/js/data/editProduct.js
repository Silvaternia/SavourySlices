import { setLocStorage } from "./locStorage.js";
import { updateProductTable } from "./updateStorage.js";

export async function editProduct(productId) {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const numericProductId = parseInt(productId, 10);
    const index = products.findIndex(p => p.id == numericProductId);

    function isValid(value) {
        return value !== null && value !== undefined && value !== '';
    }
    // checks if the product props are valid and updates the product. If it's not valid it uses the defaul value
    if (index !== -1) {
        products[index] = {
            id: productId,
            title: isValid(document.getElementById('title').value) ? document.getElementById('title').value : products[index].title,
            description: isValid(document.getElementById('description').value) ? document.getElementById('description').value : products[index].description,
            price: isValid(document.getElementById('price').value) ? parseFloat(document.getElementById('price').value) : products[index].price,
            stock: isValid(document.getElementById('stock').value) ? parseInt(document.getElementById('stock').value, 10) : products[index].stock,
            image: isValid(document.getElementById('image').value) ? document.getElementById('image').value : products[index].image
        };

        setLocStorage('products', products);
        await updateProductTable(products);
        location.reload(); // I had to add location.reload because the Flowbite model wasn't working after a remove

    }
}

