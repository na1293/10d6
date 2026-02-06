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

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('readmore-content');
    const closeBtn = document.getElementById('close-readmore-btn');
    const closeIcon = document.getElementById('readmore-close');

    // Mở popup
    document.querySelectorAll('.read-more-btn').forEach(button => {
        button.addEventListener('click', () => {
            const buttonId = button.getAttribute('data-id'); // Lấy id từ nút (luôn là string)
            
            // Tìm item: Ép cả 2 về String để so sánh cho chắc kèo
            const item = menuData.find(m => String(m.id) === String(buttonId));
            
            if (item) {
                document.getElementById('img-food').src = item.image;
                document.getElementById('name-food').innerText = item.name;
                document.getElementById('price-food').innerText = item.price.toLocaleString() + " VND";
                document.getElementById('description-food').innerText = item.description;
                modal.style.display = 'flex';
                document.body.classList.add('no-scroll');
            } else {
                console.error("Không tìm thấy món có ID:", buttonId);
            }
        });
    });

    // Đóng popup
    [closeBtn, closeIcon].forEach(el => {
        el?.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.classList.remove('no-scroll');
        });
    });
});