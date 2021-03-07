'use strict';

(() => {
  if (document.querySelector(`.catalog__filter-open-btn`)) {
    const showFiltersBtn = document.querySelector(`.catalog__filter-open-btn`);
    const overlay = document.querySelector(`#overlay-filter`);
    const closeModalBtn = overlay.querySelector(`.js-close`);
    const catalog = document.querySelector(`.catalog`);

    catalog.classList.remove(`catalog--no-js`);

    const showModalHandler = (evt) => {
      evt.preventDefault();

      window.utils.showModal(overlay);
      closeModalBtn.addEventListener(`click`, hideModalHandler);
      overlay.addEventListener(`click`, overlayPressHandler);
      document.addEventListener(`keydown`, escPressHandler);
    };

    const hideModalHandler = () => {
      closeModalBtn.removeEventListener(`click`, hideModalHandler);
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

    showFiltersBtn.addEventListener(`click`, showModalHandler);
  }
})();
