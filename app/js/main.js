$(function(){
    $('.news__slider').slick({
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });
    $('.services__item-title').on('click',  function(){
        $('.services__item').removeClass('services__item--active');
        $(this).parent().addClass('services__item--active');
    });
    $('#fullpage').fullpage({
		//options here
		autoScrolling:true,
        scrollHorizontally: true,
        sectionSelector: '.page-section',
        scrollOverflow: true,
        verticalCentered: false,
        menu: '#header__nav',
        fixedElements: '#top',
        anchors: ['top', 'about', 'porfolio', 'services', 'contacts', 'news'],
        
    });
  
    $(".news__slider").slick({
        nextArrow: `<button class="slider-btn slider-btn__right">
        <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.78161 17L9 9L0.78161 1"/>
        </svg>
     </button>
     `,
        prevArrow: `<button class="slider-btn slider-btn__left">
        <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.21839 1L1 9L9.21839 17"/>
        </svg>
     </button>
     `,
        infinite: false,
     });    
});
