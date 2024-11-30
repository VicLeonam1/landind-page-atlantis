const swiper = new Swiper('.slider-wrapper', {
  grabCursor: true,
  spaceBetween: 20,
  slidesPerView: 2, // Exibe 2 slides de cada vez
  slidesPerGroup: 2, // Move 2 slides ao mesmo tempo
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
  