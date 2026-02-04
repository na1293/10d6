document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('menu-toggle'); // Nút mở menu (ba gạch)
    const menu = document.getElementById('menu-box'); // Toàn bộ phần overlay menu
    const closeButton = document.getElementById('menu-close'); // Nút đóng menu (dấu X)

    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            menu.classList.toggle('active'); // Thêm/bỏ class 'active' để hiện/ẩn menu
        });
    }

    if (closeButton && menu) {
        closeButton.addEventListener('click', () => {
            menu.classList.remove('active'); // Khi bấm nút đóng, xóa class 'active' để ẩn menu
        });
    }

    const menu_button = document.getElementById('menu-button');
    const menu_order = document.querySelector('.menu-order');
    const menu_order_close = document.getElementById('menu-order-close');
    menu_button?.addEventListener('click', () => {
        menu_order.classList.toggle('active');
    });

    menu_order_close?.addEventListener('click', () => {
        menu_order.classList.remove('active');
    });

    document.querySelectorAll('.menu-order a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const target = document.querySelector(link.getAttribute('href'));
            if (!target) return;

            target.scrollIntoView({ behavior: 'smooth' });

            // tự đóng menu
            document.querySelector('.menu-order').classList.remove('active');
        });
    });


});