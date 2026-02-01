document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('menu-container');
    const readmoreContent = document.getElementById('readmore-content');
    const readmoreBox = document.getElementById('readmore-box');
    const imgFood = document.getElementById('img-food');
    const nameFood = document.getElementById('name-food');
    const priceFood = document.getElementById('price-food');
    const descriptionFood = document.getElementById('description-food');
    const closeReadmoreBtn = document.getElementById('close-readmore-btn');

    if (closeReadmoreBtn) {
        closeReadmoreBtn.addEventListener('click', () => {
            readmoreContent.style.display = 'none';
        });
    }

    if (container) {
        container.addEventListener('click', (e) => {
            // Tìm cái nút gần nhất có class này
            const btn = e.target.closest('.read-more-btn');
            
            if (btn) {
                const id = btn.dataset.id;
                readmoreContent.style.display = 'flex'; // Hiện overlay

                imgFood.src = menuData[id-1].image;
                nameFood.textContent = menuData[id-1].name;
                priceFood.textContent = menuData[id-1].price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
                descriptionFood.textContent = menuData[id-1].description;
            }
        });
    }
});