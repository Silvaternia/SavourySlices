document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobileNavToggle');
    const mobileCNav = document.getElementById('mobileNav');
    const navContainers = document.querySelectorAll('.headerNav');

    menuToggle.addEventListener('click', () => {
        mobileCNav.classList.toggle('hidden');
    });

    const navItems = {
        Home: '../index.html',
        Categories: '#',
        BestSellers: '#',
        Search: '#',
        Contact: '#',
        About: '#',
    };

    const createNavItem = (name, url) => {
        const navLink = document.createElement('a');
        const navListItem = document.createElement('li');

        navLink.href = url;
        navLink.textContent = name;

        navListItem.classList.add('mt-3', 'text-gray-600', 'hover:underline', 'sm:mx-3', 'sm:mt-0');
        navListItem.appendChild(navLink);

        return navListItem;
    };

    navContainers.forEach(container => {
        Object.entries(navItems).forEach(([name, url]) => {
            const navListItem = createNavItem(name, url);
            container.appendChild(navListItem);
        });
    });
});
