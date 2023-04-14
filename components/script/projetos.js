var swiper = new Swiper(".projetos_slide_content", {
    slidesPerView: 3,
    spaceBetween: 30,
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        850: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
    },
});