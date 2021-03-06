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
