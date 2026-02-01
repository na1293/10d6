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

});