document.addEventListener('DOMContentLoaded', () => {
    const menuTrigger = document.getElementById('lh-menu-trigger');
    const menuOverlay = document.getElementById('lh-menu-overlay');
    const backToMenu = document.getElementById('lh-back-to-menu');

    const toggleMenu = () => {
        if (!menuTrigger || !menuOverlay) return;

        menuTrigger.classList.toggle('menu-open');
        menuOverlay.classList.toggle('open');
    };

    if (menuTrigger && menuOverlay) {
        menuTrigger.addEventListener('click', (event) => {
            event.preventDefault();
            toggleMenu();
        });
    }

    if (backToMenu) {
        backToMenu.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }

    const navLinks = document.querySelectorAll('.nav-link-large');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.href === window.location.href) {
                e.preventDefault();
                menuTrigger?.classList.remove('menu-open');
                menuOverlay?.classList.remove('open');
            }
        });
    });
});