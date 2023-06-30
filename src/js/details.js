const detailLink = document.querySelectorAll('.catalog__detail');
const detailClose = document.querySelectorAll('.details__close');
const modal = document.querySelectorAll('.catalog__modal');

detailLink.forEach((link) => {
    link.addEventListener('click', () => {
        link.closest('.catalog__item').querySelector('.details').classList.add('visible');
        window.addEventListener('click', (event) => {
            if (!event.target.closest('.catalog__modal') && event.target !== link) {
                link.closest('.catalog__item').querySelector('.details').classList.remove('visible');
            }
        });
    });
});

detailClose.forEach((close) => {
    close.addEventListener('click', () => {
        close.closest('.catalog__item').querySelector('.details').classList.remove('visible');
    });
});

modal.forEach((mod) => {
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const windowHeight = document.documentElement.clientHeight;
        const m = mod;
        if (scrollTop >= (windowHeight / 4)) {
            m.style.transform = `translateY(${scrollTop}px)`;
        } else { m.style.transform = 'translateY(0)'; }
    });
});
