'use strict';

(() => {
  const accordionBlocksMainPage = document.querySelectorAll(`.faq .accordion__item`);

  const accordionBlocksCatalogPage = document.querySelectorAll(`.catalog__filter-form .accordion__item`);
  const accordionBlocks = document.querySelectorAll(`.catalog__filter-form h3`);

  if (accordionBlocksMainPage) {
    accordionBlocksMainPage.forEach((item) => {
      item.classList.remove(`accordion__item--shown`);
    });

    accordionBlocksMainPage.forEach((item) => {
      const toggleAccordionHendler = () => {
        item.classList.toggle(`accordion__item--shown`);
      };

      const enterPressHandler = (evt) => {
        if (evt.key === `Enter`) {
          evt.preventDefault();
          toggleAccordionHendler();
        }
      };

      item.classList.remove(`accordion__item--shown`);
      item.addEventListener(`click`, toggleAccordionHendler);
      item.addEventListener(`keydown`, enterPressHandler);
    });
  }

  if (accordionBlocks) {
    accordionBlocksCatalogPage.forEach((item) => {
      item.classList.remove(`accordion__item--shown`);
    });

    accordionBlocks.forEach((item) => {
      const toggleAccordionHendler = () => {
        item.classList.toggle(`accordion__item--shown`);
        item.parentNode.classList.toggle(`accordion__item--arrow-rotate`);
      };

      const enterPressHandler = (evt) => {
        if (evt.key === `Enter`) {
          evt.preventDefault();
          toggleAccordionHendler();
        }
      };

      item.classList.remove(`accordion__item--shown`);
      item.addEventListener(`click`, toggleAccordionHendler);
      item.addEventListener(`keydown`, enterPressHandler);
    });
  }
})();
