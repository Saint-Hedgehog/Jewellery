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
