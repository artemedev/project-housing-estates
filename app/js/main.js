$(function () {
    $('.news__slider').slick({
        prevArrow: '<button class="slick-btn slick-btn__left"><svg width="22" height="27" viewBox="0 0 22 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.72911e-07 13.5L21.75 0.942635L21.75 26.0574L1.72911e-07 13.5Z" fill="white"/></svg></button>',
        nextArrow: '<button class="slick-btn slick-btn__right"><svg width="22" height="27" viewBox="0 0 22 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 13.5L0.250001 26.0574L0.250002 0.942631L22 13.5Z" fill="white"/></svg></button>',
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1
              }
            },
            {
              breakpoint: 1023,
              settings: {
                slidesToShow: 1,
                
              }
            }
          ]
    });
    $('.services__item-title').on('click', function () {
        $('.services__item').removeClass('services__item--active');
        $(this).parent().addClass('services__item--active');
    });
    $('#menu').hide();

    $('#fullpage').fullpage({
        //options here
        autoScrolling: true,
        scrollHorizontally: false,
        sectionSelector: '.page-section',
        scrollOverflow: true,
        verticalCentered: false,
        menu: '#header__nav',
        fixedElements: '#top',
        anchors: ['top', 'about', 'porfolio', 'services', 'contacts', 'news']
    });
});
