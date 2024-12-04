const swiper = new Swiper('.slider-wrapper', {
  grabCursor: true,
  spaceBetween: 20,
  loop: false, // Desativa o loop para limitar os slides
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 2,
      }
    },
  });
  