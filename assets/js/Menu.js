const prices = document.querySelectorAll(".price");

prices.forEach(price => {
    let start = 0;
    let end = +price.dataset.price;

    const counter = setInterval(() => {
        start++;
        price.textContent = "$" + start;

        if (start >= end) {
            clearInterval(counter);
        }
    }, 40);
});

AOS.init({
    duration: 800,
    once: true,
    offest: 100
});
