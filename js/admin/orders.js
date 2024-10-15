document.addEventListener('DOMContentLoaded', async () => {
    const ordersData = localStorage.getItem('orders');
    const orders = ordersData ? JSON.parse(ordersData) : [];
    const tbody = document.querySelector('tbody');

    const createOrderRow = (order) => {
        const orderDiv = document.createElement('tr');
        orderDiv.classList.add('border-b');
        orderDiv.innerHTML = `
                <td class="px-6 py-3">${order.orderId}</td>
                <td class="px-6 py-3">${order.total}</td>
                <td class="px-6 py-3">${order.date}</td>
            `;
        return orderDiv;
    };
    orders.forEach(order => {
        if (!order) return;
        const orderRow = createOrderRow(order);
        tbody.appendChild(orderRow);
    });
});
