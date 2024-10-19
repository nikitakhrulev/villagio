document.addEventListener('DOMContentLoaded', function() {
  const bestSwiper = new Swiper('.bestSwiper', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 1,
      spaceBetween: 50,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '#best-right',
        prevEl: '#best-left',
      },
    });
    const bestSwiper2 = new Swiper('.bestSwiper2', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 3,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        // nextEl: '#best2-right',
        // prevEl: '#best2-left',
      },
    });
    const premiumSwiper = new Swiper('.premiumSwiper', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 1,
      // spaceBetween: 20,
      pagination: {
        el: '.swiperPremium-pagination',
      },
      navigation: {
        nextEl: '#premium-right',
        prevEl: '#premium-left',
      },
      breakpoints: {
        1024: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      },
    });
    const articlesSwiper = new Swiper('.articlesSwiper', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: '.articles__pagination',
      },
      navigation: {
        nextEl: '#articles-right',
        prevEl: '#articles-left',
      },
      breakpoints: {
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    })
    const pressSwiper = new Swiper('.pressSwiper', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: '.press__pagination',
      },
      navigation: {
        nextEl: '#press-right',
        prevEl: '#press-left',
      },
      breakpoints: {
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    })
})
