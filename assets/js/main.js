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


const scrollBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollBtn.classList.add('show');
    } else {
        scrollBtn.classList.remove('show'); 
    }
});
scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
    });
});



// Gallery Modal Carousel Logic for sec6
const indexGalleryData = [
    { src: "assets/images/Elegant dining.jpg", title: "Elegant dining room" },
    { src: "assets/images/Pasta.jpg", title: "Fresh pasta dish" },
    { src: "assets/images/place.jpg", title: "Italian wine & outdoor patio" },
    { src: "assets/images/Resturant In.jpg", title: "Restaurant interior" }
];

let currentSlideIndex = 0;

function openIndexModal(index) {
    currentSlideIndex = index;
    updateIndexSlide();
    const modal = document.getElementById('indexGalleryModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeIndexModal() {
    const modal = document.getElementById('indexGalleryModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function changeIndexSlide(step) {
    currentSlideIndex += step;
    if (currentSlideIndex < 0) {
        currentSlideIndex = indexGalleryData.length - 1;
    } else if (currentSlideIndex >= indexGalleryData.length) {
        currentSlideIndex = 0;
    }
    updateIndexSlide();
}

function updateIndexSlide() {
    const total = indexGalleryData.length;
    const prevIdx = (currentSlideIndex - 1 + total) % total;
    const nextIdx = (currentSlideIndex + 1) % total;

    const mainImgEl = document.getElementById('indexModalImg');
    const prevImgEl = document.getElementById('peekPrevImg');
    const nextImgEl = document.getElementById('peekNextImg');
    const captionEl = document.getElementById('indexModalCaption');

    if (mainImgEl) {
        mainImgEl.style.opacity = '0.3';
        setTimeout(() => {
            mainImgEl.src = indexGalleryData[currentSlideIndex].src;
            mainImgEl.alt = indexGalleryData[currentSlideIndex].title;
            if (captionEl) captionEl.innerText = indexGalleryData[currentSlideIndex].title;
            mainImgEl.style.opacity = '1';
        }, 120);
    }

    if (prevImgEl) {
        prevImgEl.src = indexGalleryData[prevIdx].src;
        prevImgEl.alt = indexGalleryData[prevIdx].title;
    }

    if (nextImgEl) {
        nextImgEl.src = indexGalleryData[nextIdx].src;
        nextImgEl.alt = indexGalleryData[nextIdx].title;
    }
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeIndexModal();
    }
});



