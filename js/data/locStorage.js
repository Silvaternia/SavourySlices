const cartIndicator = document.getElementById("cartIndicator");

function parseJSON(data, key) {
    try {
        const parsedData = JSON.parse(data);
        if (typeof parsedData !== 'object' || parsedData === null) {
            throw new Error('Invalid data');
        }
        return parsedData;
    } catch (error) {
        console.error(`Error parsing localStorage data for key: ${key}`, error);
        localStorage.removeItem(key);
        return null;
    }
}

export function resetStorage() {
    localStorage.clear();
    alert('Local storage cleared!');
}


export function getLocStorage(key) {
    const data = localStorage.getItem(key);
    return data ? parseJSON(data, key) : null;
}

export async function setLocStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error('Error setting localStorage:', error);
    }
}

export async function deleteLocStorageKey(key, productId) {
    if (productId) {
        try {
            const locStorage = JSON.parse(localStorage.getItem(key)) || [];
            const index = locStorage.findIndex(product => product.id === productId);
            if (index !== -1) {
                locStorage.splice(index, 1);
                setLocStorage(key, locStorage);
            } else {
                console.warn(`Product with ID: ${productId} not found in localStorage for key: ${key}`);
            }
        } catch (error) {
            console.error('Error deleting from localStorage:', error);
        }
    }
}

export function addToCart(productId) {
    const cartList = getLocStorage("cart") || [];
    try {
        cartList.push(productId);
        setLocStorage("cart", cartList);
        updateCartIndicator();
    } catch (error) {
        console.error('Error adding to cart:', error);
    }
}

export function updateCartIndicator() {
    try {
        const cartData = localStorage.getItem("cart");
        if (cartData) {
            cartIndicator.textContent = JSON.parse(cartData).length;
            cartIndicator.classList.replace("hidden", "inline-flex");
        } else {
            cartIndicator.classList.add("hidden");
        }
    } catch (error) {
        console.error('Error updating cart indicator:', error);
    }
}

export async function remFromCart(value) {
    try {
        const cartData = getLocStorage("cart") || [];
        const index = cartData.indexOf(value);

        if (index !== -1) {
            cartData.splice(index, 1);
        }
        localStorage.setItem('cart', JSON.stringify(cartData));
    } catch (error) {
        console.error('Error removing localStorage:', error);
    }
}
