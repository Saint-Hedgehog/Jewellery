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
