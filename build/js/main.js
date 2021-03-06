'use strict';

(() => {
  const accordionBlocks = document.querySelectorAll(`.accordion__item`);

  if (accordionBlocks) {
    accordionBlocks.forEach((item) => {
      item.classList.remove(`accordion__item--shown`);
      item.addEventListener(`click`, (evt) => {
        evt.currentTarget.classList.toggle(`accordion__item--shown`);
      });
    });
  }
})();

'use strict';

(function () {
  if (document.querySelector(`.js-to-cart`)) {
    const toCartBtn = document.querySelector(`.js-to-cart`);
    const overlay = document.querySelector(`#overlay-added`);

    const showModalHandler = function (evt) {
      const closeModalBtn = overlay.querySelector(`.js-close`);

      evt.preventDefault();

      window.utils.showModal(overlay);

      closeModalBtn.addEventListener(`click`, hideModalHandler);
      overlay.addEventListener(`click`, overlayPressHandler);
      document.addEventListener(`keydown`, escPressHandler);
    };

    const hideModalHandler = function () {
      const closeModalBtn = overlay.querySelector(`.js-close`);

      closeModalBtn.removeEventListener(`click`, hideModalHandler);
      overlay.removeEventListener(`click`, overlayPressHandler);
      document.removeEventListener(`keydown`, escPressHandler);

      window.utils.hideModal(overlay);
    };

    const escPressHandler = function (evt) {
      if (evt.key === `Escape`) {
        window.utils.hideModal(overlay);
      }
    };

    const overlayPressHandler = function (evt) {
      if (!evt.target.closest(`.js-modal`)) {
        window.utils.hideModal(overlay);
      }
    };

    toCartBtn.addEventListener(`click`, showModalHandler);
  }
})();

'use strict';

(function () {
  if (document.querySelector(`.catalog__filter-open-btn`)) {
    const showFiltersBtn = document.querySelector(`.catalog__filter-open-btn`);
    const overlay = document.querySelector(`#overlay-filter`);
    const closeModalBtn = overlay.querySelector(`.js-close`);
    const catalog = document.querySelector(`.catalog`);

    catalog.classList.remove(`catalog--no-js`);

    const showModalHandler = function (evt) {
      evt.preventDefault();

      window.utils.showModal(overlay);
      closeModalBtn.addEventListener(`click`, hideModalHandler);
      overlay.addEventListener(`click`, overlayPressHandler);
      document.addEventListener(`keydown`, escPressHandler);
    };

    const hideModalHandler = function () {
      closeModalBtn.removeEventListener(`click`, hideModalHandler);
      overlay.removeEventListener(`click`, overlayPressHandler);
      document.removeEventListener(`keydown`, escPressHandler);

      window.utils.hideModal(overlay);
    };

    const escPressHandler = function (evt) {
      if (evt.key === `Escape`) {
        window.utils.hideModal(overlay);
      }
    };

    const overlayPressHandler = function (evt) {
      if (!evt.target.closest(`.js-modal`)) {
        window.utils.hideModal(overlay);
      }
    };

    showFiltersBtn.addEventListener(`click`, showModalHandler);
  }
})();

'use strict';

(() => {
  if (document.querySelectorAll(`.js-login`)) {
    if (document.querySelector(`#overlay-login form`)) {
      const openLoginModalBtns = document.querySelectorAll(`.js-login`);
      const overlay = document.querySelector(`#overlay-login`);
      const isStorageSupport = true;
      let storage = ``;

      const closeLoginModalBtn = overlay.querySelector(`.js-close`);
      const form = overlay.querySelector(`form`);
      const userEmail = form.querySelector(`input[type="email"]`);
      const userPassword = form.querySelector(`input[type="password"]`);


      const showLoginModalHandler = (evt) => {
        evt.preventDefault();

        window.utils.showModal(overlay);

        if (storage) {
          userEmail.value = localStorage.getItem(`email`);
        }

        if (userEmail.value) {
          userPassword.focus();
        } else {
          userEmail.focus();
        }

        form.addEventListener(`submit`, submitHandler);
        closeLoginModalBtn.addEventListener(`click`, hideLoginModalHandler);
        overlay.addEventListener(`click`, overlayPressHandler);
        document.addEventListener(`keydown`, escPressHandler);
      };

      const hideLoginModalHandler = () => {
        closeLoginModalBtn.removeEventListener(`click`, hideLoginModalHandler);
        overlay.removeEventListener(`click`, overlayPressHandler);
        document.removeEventListener(`keydown`, escPressHandler);

        window.utils.hideModal(overlay);
      };

      const escPressHandler = (evt) => {
        if (evt.key === `Escape`) {
          window.utils.hideModal(overlay);
        }
      };

      const overlayPressHandler = (evt) => {
        if (!evt.target.closest(`.js-modal`)) {
          window.utils.hideModal(overlay);
        }
      };

      const submitHandler = () => {
        if (userEmail && isStorageSupport) {
          localStorage.setItem(`email`, userEmail.value);
        }
      };

      try {
        storage = localStorage.getItem(`email`);
      } catch (err) {
        isStorageSupport = false;
      }

      openLoginModalBtns.forEach((btn) => {
        btn.addEventListener(`click`, showLoginModalHandler);
      });
    }
  }
})();

'use strict';

(() => {
  const header = document.querySelector(`.page-header`);
  const menuToggle = document.querySelector(`#main-nav-toggle`);
  const main = document.querySelector(`main`);
  const footer = document.querySelector(`footer`);
  // const body = document.querySelector(`body`);

  const hideMenu = () => {
    if (header) {
      if (header.classList.contains(`page-header--no-js`)) {
        header.classList.remove(`page-header--no-js`);
      }
      if (header.classList.contains(`page-header--nav-open`)) {
        header.classList.remove(`page-header--nav-open`);
        header.classList.add(`page-header--nav-closed`);
      }
    }
  };

  const toggleMenu = () => {
    header.classList.toggle(`page-header--nav-open`);
    header.classList.toggle(`page-header--nav-closed`);
    main.classList.toggle(`js-display-none`);
    footer.classList.toggle(`js-display-none`);
    // body.classList.toggle(`js-no-scroll`);
  };

  hideMenu();
  menuToggle.addEventListener(`click`, toggleMenu);
})();

'use strict';

// product card tabs
(function () {
  if (document.querySelector(`.product__tab-btn`)) {
    const tabBtns = document.querySelectorAll(`.product__tab-btn`);
    const tabPanels = document.querySelectorAll(`.product__tab`);
    let tabName;

    const switchTabHandler = function (evt) {
      const targetBtn = evt.target.closest(`.product__tab-btn`);

      tabBtns.forEach(function (btn) {
        btn.classList.remove(`product__tab-btn--current`);
        btn.removeAttribute(`tabindex`);
      });
      targetBtn.classList.add(`product__tab-btn--current`);
      targetBtn.setAttribute(`tabindex`, `-1`);
      tabName = targetBtn.getAttribute(`data-tab-name`);
      showTabPanel();
    };

    const showTabPanel = function () {
      tabPanels.forEach(function (panel) {
        if (panel.classList.contains(tabName)) {
          panel.classList.add(`product__tab--current`);
        } else {
          panel.classList.remove(`product__tab--current`);
        }
      });
    };

    tabBtns.forEach(function (btn) {
      btn.addEventListener(`click`, switchTabHandler);
    });
  }
})();

'use strict';

(function () {
  const formsOnLightBg = document.querySelectorAll(`.search-form--on-light-bg`);
  const formsOnDarkBg = document.querySelectorAll(`.search-form--on-dark-bg`);

  const toggleBackground = function () {
    if (formsOnLightBg) {
      formsOnLightBg.forEach(function (form) {
        const inputSearch = form.querySelector(`input[type="search"]`);
        const container = inputSearch.closest(`.search-form__bg`);

        inputSearch.addEventListener(`focus`, function () {
          container.classList.add(`search-form__bg--on-light`);
        });

        inputSearch.addEventListener(`blur`, function () {
          container.classList.remove(`search-form__bg--on-light`);
        });
      });
    }

    if (formsOnDarkBg) {
      formsOnDarkBg.forEach(function (form) {
        const inputSearch = form.querySelector(`input[type="search"]`);
        const container = inputSearch.closest(`.search-form__bg`);

        inputSearch.addEventListener(`focus`, function () {
          container.classList.add(`search-form__bg--on-dark`);
        });

        inputSearch.addEventListener(`blur`, function () {
          container.classList.remove(`search-form__bg--on-dark`);
        });
      });
    }
  };

  toggleBackground();
})();

'use strict';
/* global Swiper */

(function () {
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
        1024:
        {
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

'use strict';

(function () {
  const body = document.querySelector(`body`);

  const showModal = function (el) {
    if (body) {
      body.classList.add(`js-no-scroll`);
    }

    if (el) {
      el.classList.add(`js-display-block`);
    }

  };

  const hideModal = function (el) {
    if (el) {
      el.classList.remove(`js-display-block`);
    }

    if (body) {
      body.classList.remove(`js-no-scroll`);
    }
  };

  window.utils = {
    showModal,
    hideModal,
  };
})();
