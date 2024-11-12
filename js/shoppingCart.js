import { loadCartData, getCartProducts } from './data/loadShopCart.js';
import { setLocStorage, getLocStorage, remFromCart } from './data/locStorage.js';

document.addEventListener('DOMContentLoaded', async () => {
    await loadCartData();
    buttonActions();
});

function buttonActions() {
    document.querySelector('section').addEventListener('click', async (event) => {
        const target = event.target.closest('button');
        if (!target) return;

        if (target.id === 'deleteProduct') {
            remFromCart(target.dataset.productId);
            await loadCartData();
        }
        if (target.id === 'clearCart') {
            localStorage.removeItem('cart');
            await loadCartData();
        }
        if (target.id === 'confirmOrder') {
            confirmOrder();
        }
    });
}

async function confirmOrder() {
    const orders = getLocStorage('orders') || [];
    const cartProducts = await getCartProducts();

    const orderTotalPrice = cartProducts.reduce((sum, product) => sum + (product.price * product.count), 0);

    const formatOrder = (totalPrice, orderCount) => ({
        orderId: orderCount + 1,
        total: totalPrice.toFixed(2),
        date: new Date().toLocaleString(),
    });

    const formattedOrder = formatOrder(orderTotalPrice, orders.length);

    orders.push(formattedOrder);
    setLocStorage('orders', orders);

    localStorage.removeItem('cart');
    await loadCartData();
    displayConfirmation();
}

function displayConfirmation() {
    const container = document.getElementById('shopCartContainer');
    container.innerHTML = '';

    const msgDiv = document.createElement('div');

    msgDiv.classList.add('text-center', 'text-xl', 'font-bold', 'text-green-500', 'mt-4');
    msgDiv.textContent = 'Order Confirmed!';

    msgDiv.innerHTML += returnButton;
    container.appendChild(msgDiv);

    document.getElementById('returnHome').addEventListener('click', () => {
        window.location.href = '../index.html';
    });
}

const returnButton = `
 <button id="returnHome" class="mt-4 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
        <div
            class="inline-flex items-center 
            justify-center px-8 py-3 text-base font-bold text-center 
            rounded-lg bg-primary text-darkGrey hover:bg-primaryHover">
            Return
            <i class="text-3xl ms-2 ph ph-house"></i>
        </div>
    </button>
`;
