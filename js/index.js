document.addEventListener('DOMContentLoaded', function() {
  
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
const openMenuBtn = document.querySelector('.open-mob-nav');
const closeMenuBtn = document.querySelector('.close-mob-nav');
const mobMenu = document.querySelector('.mob-menu');
openMenuBtn.addEventListener('click', openMobMenu);
closeMenuBtn.addEventListener('click', closeMobMenu);
function openMobMenu() {
  mobMenu.style.opacity = '1';
  mobMenu.style.transform = 'translateX(0%)';
  document.body.style.overflowY = 'hidden';
}
function closeMobMenu() {
  mobMenu.style.transform = 'translateX(100%)'
}
// function init() {
//   let map = new ymaps.Map('map', {
//     center: [55.750733529517035, 37.61912743815684],
//     zoom: 14,
//     controls: [],
//       customization: [
//         {
//           stylers: [
//             {

//             }
//           ]
//         }
//       ]
//   });
// }
// ymaps.ready(init);
