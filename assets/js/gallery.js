document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {

            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            
            const filterValue = btn.getAttribute('data-filter');

            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filterValue === 'all' || filterValue === category) {
                    item.classList.remove('hide');
                } else {
                    item.classList.add('hide');
                }
            });
        });
    });
});


// images scroll

document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');
                if (filterValue === 'all' || filterValue === category) {
                    item.classList.remove('hide');
                } else {
                    item.classList.add('hide');
                }
            });
        });
    });
});

const imagesData = [
    { src: "assets/images/Elegant dining.jpg", title: "Elegant dining room" },
    { src: "assets/images/Pasta.jpg", title: "Fresh pasta dish" },
    { src: "assets/images/Italian Wine.jpg", title: "Italian wine selection" },
    { src: "assets/images/Resturant In.jpg", title: "Restaurant interior" },
    { src: "assets/images/Risto.jpg", title: "Signature risotto" },
    { src: "assets/images/cozy bar.jpg", title: "Cozy bar area" },
    { src: "assets/images/Steak.jpg", title: "Tiramisu dessert" },
    { src: "assets/images/coaktails.jpg", title: "Cocktails" },
];


let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;
    updateLightbox();
    document.getElementById('lightboxModal').style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightboxModal').style.display = 'none';
}

function changeImage(step) {
    currentIndex += step;
    if (currentIndex < 0) {
        currentIndex = imagesData.length - 1;
    } else if (currentIndex >= imagesData.length) {
        currentIndex = 0;
    }
    updateLightbox();
}

function updateLightbox() {
    document.getElementById('lightboxImg').src = imagesData[currentIndex].src;
    document.getElementById('lightboxTitle').innerText = imagesData[currentIndex].title;
}


