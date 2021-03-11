'use strict';

(() => {
  const formsOnLightBg = document.querySelectorAll(`.search-form--on-light-bg`);

  const toggleBackground = () => {
    if (formsOnLightBg) {
      formsOnLightBg.forEach((form) => {
        const inputSearch = form.querySelector(`input[type="search"]`);
        const container = inputSearch.closest(`.search-form__bg`);

        inputSearch.addEventListener(`focus`, () => {
          container.classList.add(`search-form__bg--on-light`);
        });

        inputSearch.addEventListener(`blur`, () => {
          container.classList.remove(`search-form__bg--on-light`);
        });
      });
    }
  };

  toggleBackground();
})();
