import { loadCartData } from './data/loadShopCart.js';
import { setLocStorage, getLocStorage } from './data/locStorage.js';


document.addEventListener('DOMContentLoaded', async () => {
    const buttonOrder = document.getElementById('confirmOrder');
    const clearCart = document.getElementById('clearCart');
    loadCartData();

    if (clearCart) {
        clearCart.addEventListener('click', async () => {
            alert('Cart cleared!');
            localStorage.removeItem('cart');
            await loadCartData();
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
            });
        }
    }
});

const formatOrder = (cart, orderCount) => ({
    orderId: orderCount + 1,
    total: cart.join(''),
    date: new Date().toLocaleString()
});
