import { loadCartData, getCartProducts } from './data/loadShopCart.js';
import { setLocStorage, getLocStorage } from './data/locStorage.js';

document.addEventListener('DOMContentLoaded', async () => {
    const buttonOrder = document.getElementById('confirmOrder');
    const clearCart = document.getElementById('clearCart');
    await loadCartData();

    ButtonVisibility();
    confirmClear(clearCart);
    confirmOrder(buttonOrder);

});

async function ButtonVisibility() {
    const cartButtonContainer = document.getElementById('cartButtonContainer');
    const cartData = await getCartProducts();

    cartButtonContainer.classList.replace('hidden', cartData.length > 0 ? 'flex' : 'hidden');
    cartButtonContainer.classList.replace('flex', cartData.length === 0 ? 'hidden' : 'flex');
}

function confirmOrder(buttonOrder) {

    const formatOrder = (cart, orderCount) => ({
        orderId: orderCount + 1,
        total: cart.join(''),
        date: new Date().toLocaleString()
    });

    if (buttonOrder) {
        buttonOrder.addEventListener('click', async () => {
            const orders = JSON.parse(localStorage.getItem('orders')) || [];
            const cart = await getLocStorage('cart') || [];
            console.log(cart);

            const formattedOrder = formatOrder(cart, orders.length);

            orders.push(formattedOrder);
            setLocStorage('orders', orders);

            alert('Order confirmed!');
            localStorage.removeItem('cart');
            await loadCartData();
            ButtonVisibility();
        });
    }
}

function confirmClear(clearCart) {
    if (clearCart) {
        clearCart.addEventListener('click', async () => {
            localStorage.removeItem('cart');
            await loadCartData();
            ButtonVisibility();
        });
    }
}
