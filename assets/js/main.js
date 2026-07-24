document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burger-menu');
    const navLinks = document.getElementById('nav-links');

    if (burgerMenu && navLinks) {
        burgerMenu.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            burgerMenu.classList.toggle('active');

            const icon = burgerMenu.querySelector('i');
            if (icon) {
                if (navLinks.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-xmark');
                } else {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (navLinks.classList.contains('active') && !burgerMenu.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
                burgerMenu.classList.remove('active');
                const icon = burgerMenu.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            }
        });

        // Close menu when clicking any link inside
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                burgerMenu.classList.remove('active');
                const icon = burgerMenu.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }
});
