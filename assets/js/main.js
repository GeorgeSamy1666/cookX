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

// form
let form = document.getElementById("reservation-form");
let p = document.querySelector(".confirm");

const regexPatterns = {

    name: /^[\u0600-\u06FFa-zA-Z\s]{3,}$/,

    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,

    phone: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
};

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let nameInput = document.getElementById("name");
        let emailInput = document.getElementById("email");
        let phoneInput = document.getElementById("phone");
        let timeInput = document.getElementById("time");
        let dateInput = document.getElementById("date");



        let isNameValid = regexPatterns.name.test(nameInput.value.trim());
        let isEmailValid = regexPatterns.email.test(emailInput.value.trim());
        let isPhoneValid = regexPatterns.phone.test(phoneInput.value.trim());

        let now = new Date();
        let selectedDateTime = new Date(`${dateInput.value} ${timeInput.value}`);

        p.classList.remove("reserved", "error");

        if (!isNameValid) {
            p.classList.add("error");
            p.textContent = "Please enter a valid name (at least 3 characters).";
            nameInput.focus();
            return;
        }

        if (!isEmailValid) {
            p.classList.add("error");
            p.textContent = "Please enter a valid email address.";
            emailInput.focus();
            return;
        }

        if (!dateInput.value || !timeInput.value || selectedDateTime < now) {
            p.classList.add("error");
            p.textContent = "Please select a future date and time for the reservation.";
            if (!dateInput.value || selectedDateTime < now) {
                dateInput.focus();
            } else {
                timeInput.focus();
            }
            return;
        }

        if (!isPhoneValid) {
            p.classList.add("error");
            p.textContent = "Please enter a valid phone number.";
            phoneInput.focus();
            return;
        }

        p.classList.remove("error");
        p.classList.add("reserved");
        p.textContent = "Thank you for your reservation request! We will confirm via email within 2 hours."


        form.reset();
    });
}

// count

let x = document.getElementById("count40");
let i = 0;
let timer = setInterval(function () {
    x.innerHTML = i;

    if (i === 50) {
        clearInterval(timer);
    } else {
        i++;
    }
}, 50);

let y = document.getElementById("count50");
let j = 0;
let timer2 = setInterval(function () {
    y.innerHTML = j;

    if (j === 100) {
        clearInterval(timer2);
    } else {
        j++;
    }
}, 25);

let z = document.getElementById("count5");
let k = 0;
let timer3 = setInterval(function () {
    z.innerHTML = k.toFixed(1);

    if (k >= 4.8) {
        clearInterval(timer3);
    } else {
        k+=0.1;
    }
}, 50);



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



