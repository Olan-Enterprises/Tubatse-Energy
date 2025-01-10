var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/////////////////////////////////////////////////////////
// On scroll counter logic

const counters = document.querySelectorAll('.swiperCounter span');

function animateCounter(counter) {
    const target = +counter.getAttribute('data-count');
    const duration = 5000;
    const interval = 1000 / 60;
    const step = target / (duration / interval);

    let current = 0;

    function updateCounter() {
        current += step;
        if(current >= target) {
            counter.textContent = target;
        }
        else {
            counter.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        }
    }

    updateCounter();
}

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const counter = entry.target.querySelector('span');
                if (!counter.classList.contains('counted')) {
                    counter.classList.add('counted');
                    animateCounter(counter);
                }
            }
        });
    },
    { threshold: 0.5 }
);

counters.forEach((counter) => {
    observer.observe(counter.closest('.swiperCounter'));
});

const _introSlides = document.querySelector(".introSlides");
const _swiper = document.querySelector(".swiper");
const introSlidesSvg = document.querySelector(".introSlides svg");
const _swiperCounters = document.querySelector(".swiperCounters");
const _swiperCounters1 = document.querySelector(".swiperCounters1");
const _introCountersDecoration = document.querySelector(".introCountersDecoration");

function HandleSwiperCountersPos() {
    if(window.innerWidth > 1500) {
        _introSlides.style.height = "500px";
        _swiper.style.borderBottomRightRadius = "0";
        introSlidesSvg.style.display = "block";
        _swiperCounters.style.display = "flex";
        _swiperCounters.style.position = "absolute";
        _swiperCounters1.style.display = "none";
        _introCountersDecoration.style.display = "none";
    }
    else if(window.innerWidth <= 1500) {
        _introSlides.style.height = "400px";
        _swiper.style.borderBottomRightRadius = "20px";
        introSlidesSvg.style.display = "none";
        _swiperCounters.style.display = "none";
        _swiperCounters.style.position = "static";
        _swiperCounters1.style.margin = "2em 0 0 0";
        _swiperCounters1.style.display = "flex";
        _introCountersDecoration.style.display = "block";
    }
}

window.addEventListener("DOMContentLoaded", HandleSwiperCountersPos);
window.addEventListener("resize", HandleSwiperCountersPos);