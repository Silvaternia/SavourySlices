document.addEventListener('DOMContentLoaded', async () => {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const tbody = document.querySelector('tbody');

    orders.forEach(order => {
        if (!order) return;
        
        const orderDiv = document.createElement('tr');
        orderDiv.classList.add('border-b');
        orderDiv.innerHTML = `
                <td class="px-6 py-3">${order.orderId}</td>
                <td class="px-6 py-3">${order.total}</td>
                <td class="px-6 py-3">${order.date}</td>
            `;
        tbody.appendChild(orderDiv);
    });
});
