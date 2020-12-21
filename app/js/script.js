document.addEventListener('DOMContetLoaded', () => {
    const hero = document.querySelector('.hero');
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        let scrollTop = window.scrollY;
        let heroCenter = hero.offcetHeight / 2;
        console.log(scrollTop);
        console.log(heroCenter);
    })
});