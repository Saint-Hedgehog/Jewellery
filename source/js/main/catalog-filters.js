'use strict';

(function () {
  const showFiltersBtn = document.querySelector(`.catalog__filter-open-btn`);
  const catalogFilter = document.querySelector(`.catalog__filter-overlay`);
  const closeBtn = document.querySelector(`.catalog__filter-close-btn`);

  if (showFiltersBtn && catalogFilter && closeBtn) {


    if (catalogFilter.classList.contains(`js-display-block`)) {
      catalogFilter.classList.remove(`js-display-block`);
    }

    if (closeBtn.classList.contains(`js-display-block`)) {
      closeBtn.classList.remove(`js-display-block`);
    }

    const showModalHandler = function (evt) {
      evt.preventDefault();
      catalogFilter.classList.toggle(`js-display-block`);
    };

    showFiltersBtn.addEventListener(`click`, showModalHandler);
    closeBtn.addEventListener(`click`, showModalHandler);
  }
})();
