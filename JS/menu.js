document.addEventListener('DOMContentLoaded', function () {

    /* ===== MENU CHÍNH ===== */
    const toggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu-box');
    const closeButton = document.getElementById('menu-close');

    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            const isActive = menu.classList.toggle('active');
            document.body.classList.toggle('no-scroll', isActive);
        });
    }

    if (closeButton && menu) {
        closeButton.addEventListener('click', () => {
            menu.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    }

    /* ===== MENU ORDER ===== */
    const menu_button = document.getElementById('menu-button');
    const menu_order = document.querySelector('.menu-order');
    const menu_order_close = document.getElementById('menu-order-close');

    menu_button?.addEventListener('click', () => {
        menu_order.classList.add('active');
        document.body.classList.add('no-scroll');
    });

    menu_order_close?.addEventListener('click', () => {
        menu_order.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });

    document.querySelectorAll('.menu-order a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const target = document.querySelector(link.getAttribute('href'));
            if (!target) return;

            target.scrollIntoView({ behavior: 'smooth' });

            // đóng menu & mở lại scroll
            menu_order.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });

});
