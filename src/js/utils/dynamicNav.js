document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobileNavToggle');
    const mobileCNav = document.getElementById('mobileNav');
    const navContainer = document.querySelectorAll('#headerNav');


    menuToggle.addEventListener('click', () => {
        mobileCNav.classList.toggle('hidden');
    });

    const navItems = {
        'Home': './../../public/index.html',
        'Categories': '#',
        'Best sellers': '#',
        'Search': '#',
        'Contact': '#',
        'About': '#'
    };
    navContainer.forEach(key => {
        for (const [name, url] of Object.entries(navItems)) {
            const navLink = document.createElement('a');
            const navListItem = document.createElement('li');

            navLink.href = url;
            navLink.textContent = name;

            navListItem.classList.add('mt-3', 'text-gray-600', 'hover:underline', 'sm:mx-3', 'sm:mt-0');
            navListItem.appendChild(navLink);
            key.appendChild(navListItem);
        }
    });
});
