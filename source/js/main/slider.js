'use strict';
/* global Swiper */

(() => {
  if (document.querySelector(`.slider`)) {
    const slider = new Swiper(`.slider__wrapper`, {
      navigation: {
        nextEl: `.slider__btn--next`,
        prevEl: `.slider__btn--previous`,
      },
      pagination: {
        el: `.slider__pagination`,
        renderBullet(index, bulletClass) {
          return `<button class="` + bulletClass + `"type="button">` + (index + 1) + `</button>`;
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
              return `<span class="` + currentClass + `"type="button">0 ` + index + ` </span>` +
                ` of ` + `<span class="` + totalClass + `"type="button">0 ` + total + ` </span>`;
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
      watchSlidesVisibility: true,
    });

    slider.on(`progress`, () => {
      inertNotVisible();
    });

    const inertNotVisible = () => {
      slider.slides.forEach((slide) => {
        if (!slide.classList.contains(`swiper-slide-visible`)) {
          slide.childNodes[1].setAttribute(`tabindex`, `-1`);
        } else {
          slide.childNodes[1].setAttribute(`tabindex`, `0`);
        }
      });
      slider.pagination.bullets.forEach((bullet) => {
        if (bullet.classList.contains(`pagination__current-page`)) {
          bullet.setAttribute(`tabIndex`, `-1`);
        } else {
          bullet.setAttribute(`tabIndex`, `0`);
        }
      });
    };

    setTimeout(inertNotVisible, 0);
  }
})();
