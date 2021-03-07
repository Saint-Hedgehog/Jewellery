'use strict';

(() => {
  if (document.querySelector(`.js-to-cart`)) {
    const toCartBtn = document.querySelector(`.js-to-cart`);
    const overlay = document.querySelector(`#overlay-added`);

    const showModalHandler = (evt) => {
      const closeModalBtn = overlay.querySelector(`.js-close`);

      evt.preventDefault();

      window.utils.showModal(overlay);

      closeModalBtn.addEventListener(`click`, hideModalHandler);
      overlay.addEventListener(`click`, overlayPressHandler);
      document.addEventListener(`keydown`, escPressHandler);
    };

    const hideModalHandler = () => {
      const closeModalBtn = overlay.querySelector(`.js-close`);

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

    toCartBtn.addEventListener(`click`, showModalHandler);
  }
})();
