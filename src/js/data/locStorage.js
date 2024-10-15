const cartList = JSON.parse(localStorage.getItem("Cart")) || [];
const cartIndicator = document.getElementById("cart-indicator");

export async function setLocStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error('Error setting localStorage:', error);
    }
}

export function getLocStorage(key) {
    const data = localStorage.getItem(key);
    if (data) {
        try {
            const parsedData = JSON.parse(data);
            if (typeof parsedData !== 'object' || parsedData === null) {
                throw new Error('Invalid products data');
            }
            return parsedData;
        } catch (error) {
            console.error('Error parsing localStorage products data:', error);
            localStorage.removeItem(key);
        }
    }
}

export async function deleteLocStorageKey(key, value) {
    if (value) {
        try {
            const locStorage = JSON.parse(localStorage.getItem(key));
            const index = locStorage.indexOf(value);
            locStorage.splice(index, 1);
            setLocStorage(key, locStorage);

        } catch (error) {
            console.error('Error deleting from localStorage:', error);
        }
    }
}

export async function remLocStorage(key, value) {
    try {
        const cartData = JSON.parse(localStorage.getItem(key)) || [];
        const index = cartData.indexOf(value);
        if (index !== -1) {
            cartData.splice(index, 1);
        }
        localStorage.setItem('cart', JSON.stringify(cartData));
    } catch (error) {
        console.error('Error removing localStorage:', error);
    }
}

export function removeFromCart(productId) {
    try {
        remLocStorage("cart", productId);
    } catch (error) {
        console.error('Error removing from cart:', error);
    }
}

export function addToCart(productId) {
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
export function resetStorage() {
    localStorage.clear();
    alert('Local storage cleared!');
}
