(function ($) {
  $(document).ready(function () {

    // HEADER-BURGER ========================================================================================================================================================

    $('.header__burger').on('click', function () {
        $(this).toggleClass("active");
        if ($(this).hasClass('active')) {
          $('body').css('overflow', 'hidden');
          $('.header__menu-container').addClass('open');
          $('header').removeClass('header_mobile');
        } else {
          $('body').css('overflow', 'auto');
          $('.header__menu-container').removeClass('open');
          $('header').addClass('header_mobile');
        }
      });

    // HEADER-SCROLL ========================================================================================================================================================

    let scrollChange = 5;

    function headerScroll(params) {

      let scroll = $(window).scrollTop();

      if (scroll >= scrollChange) {
        $('.header').addClass('header_scroll');
      } else {
        $('.header').removeClass('header_scroll');
      }
    }

    $(document).on('scroll', () => {
      headerScroll();
    })

    headerScroll();

    //APPEND SOC ICON ON MOBILE==========================================================
   
    function appendSocIcon() {
      if (window.matchMedia("(min-width: 768px)").matches) {
        $('.header__soc-icon').prependTo('.header__contact-info')
      } else {
        $('.header__soc-icon').insertAfter('.menu')
      }
    }

    appendSocIcon();

    $(window).on('resize', () => {
      appendSocIcon();
    });

    // HERO SLIDER ===========================================================

    if ($(".hero-slider").length > 0) {
      const heroSlider = new Swiper('.hero-slider', {
      slidesPerView: 1,
      speed: 1000,
      spaceBetween: 0,
      loop: true,
      autoplay: {
      delay: 5000,
      },
      pagination: {
        el: ".pagination-hero-slider",
        clickable: true,
      },
    })
    };

    //SCROLL TO SECTION ===========================================================================================    

    $('.scroll__next-sect').click(function (event) {
      event.preventDefault();

      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top - 104
      }, 1000);

      return false;
    });

    

  });
})(jQuery);