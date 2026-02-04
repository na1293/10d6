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
    // === Slider Image ===
    const track = document.querySelector('.slide-track');
    const slides = document.querySelectorAll('.slide-track img');
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');

    let index = 0;
    update_title();
    function updateSlide() {
        track.style.transform = `translateX(-${index * 100}%)`;
        update_title();
    }

    function update_title() {
        const title_hero = document.getElementById('title-hero');
        const p_hero = document.getElementById('p-hero');

        if (!title_hero || !p_hero) {
            alert("Không tìm thấy phần tử tiêu đề hoặc đoạn văn!");
        };

        if (index === 0) {
            title_hero.innerText = "Chào mừng đến với Hội Trợ Xuân!";
            p_hero.innerText = "Theo dõi chúng mình làm những chiếc bánh chưng ngon khó cưỡng trong cuộc thi nhé!";
        } else {
            title_hero.innerText = "Trải nghiệm ẩm thực đặc sắc!";
            p_hero.innerText = "Khám phá các món ăn truyền thống và hiện đại tại Hội Trợ Xuân.";
        }
    }


    nextBtn.onclick = () => {
        index = (index + 1) % slides.length;
        updateSlide();
    };

    prevBtn.onclick = () => {
        index = (index - 1 + slides.length) % slides.length;
        updateSlide();
    };

});