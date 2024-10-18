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
let selector = document.querySelector('#calculate-phone-input');
let im = new Inputmask("+7(999)999-99-99");
im.mask(selector);
    
validation.addField('#calculate-quantity', [
  {
    rule: 'required',
    errorMessage: 'Укажите количество'
  },
])
.addField('#calculate-phone-input', [
  {
    rule: 'required',
    errorMessage: 'Укажите ваш телефон'
  },
])
.addField('#validate-checkbox', [
  {
    rule: 'required',
    errorMessage: 'Здесь необходимо ваше согласие'
  },
]).onSuccess(function () {
    formS.submit();
});