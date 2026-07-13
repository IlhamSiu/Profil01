document.addEventListener('DOMContentLoaded', () => {
    const menuTrigger = document.getElementById('lh-menu-trigger');
    const menuOverlay = document.getElementById('lh-menu-overlay');
    const backToMenu = document.getElementById('lh-back-to-menu');
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('form-status');

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

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const name = contactForm.querySelector('input[name="name"]').value.trim();
            const email = contactForm.querySelector('input[name="email"]').value.trim();
            const message = contactForm.querySelector('textarea[name="message"]').value.trim();

            if (!name || !email || !message) {
                formStatus.textContent = 'Silakan isi semua kolom terlebih dahulu.';
                formStatus.classList.add('error');
                return;
            }

            const subject = `Pesan dari ${name} (${email})`;
            const body = `Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`;
            const mailtoLink = `mailto:ilhammochamad93@email.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            const opened = window.open(mailtoLink, '_blank');
            if (opened) {
                formStatus.textContent = 'Aplikasi email terbuka. Silakan kirim pesan dari sana.';
                formStatus.classList.remove('error');
                contactForm.reset();
            } else {
                formStatus.textContent = 'Jika aplikasi email tidak terbuka, kirim manual ke ilhammochamad93@email.com';
                formStatus.classList.add('error');
            }
        });
    }
});