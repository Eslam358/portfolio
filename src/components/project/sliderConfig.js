
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export const swiperConfig = {
    spaceBetween: 10,
    slidesPerView: 1,
    pagination: { 
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 3
    },
    modules: [Autoplay, Pagination, Navigation],
    autoplay: { 
      delay: 99000, 
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
    className: "projects-swiper",
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    watchOverflow: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 15
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1920: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    }

      
  };
  
  export const motionConfig = {
    transition: { 
      type: "spring", 
      damping: 15, 
      stiffness: 100,
      mass: 0.8
    }
  };