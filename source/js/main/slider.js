'use strict';
/* global Swiper */

(() => {
  if (document.querySelector(`.slider`)) {
    new Swiper(`.slider__wrapper`, {
      navigation: {
        nextEl: `.slider__btn--next`,
        prevEl: `.slider__btn--previous`,
      },
      pagination: {
        el: `.slider__pagination`,
        renderBullet(index, bulletClass) {
          return `<span class="` + bulletClass + `">` + (index + 1) + `</span>`;
        },
        bulletClass: `pagination__list-item`,
        bulletActiveClass: `pagination__current-page`,
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          pagination: {
            type: `fraction`,
            renderFraction(currentClass, totalClass, index, total) {
              return `<span class="` + currentClass + `">0 ` + index + ` </span>` +
                ` of ` + `<span class="` + totalClass + `">0 ` + total + ` </span>`;
            },
          },
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          pagination: {
            type: `bullets`,
          },
        },
        1024: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          pagination: {
            type: `bullets`,
          },
        },
      },
      lazy: {
        loadPrevNext: true,
      },
      spaceBetween: 30,
      speed: 1000,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      autoHeight: true,
      a11y: {
        enabled: true,
      }
    });
  }
})();
