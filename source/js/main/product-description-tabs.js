'use strict';

(() => {
  if (document.querySelector(`.product__tab-btn`)) {
    const tabBtns = document.querySelectorAll(`.product__tab-btn`);
    const tabPanels = document.querySelectorAll(`.product__tab`);
    let tabName;

    const switchTabHandler = (evt) => {
      const targetBtn = evt.target.closest(`.product__tab-btn`);

      tabBtns.forEach((btn) => {
        btn.classList.remove(`product__tab-btn--current`);
        btn.removeAttribute(`tabindex`);
      });
      targetBtn.classList.add(`product__tab-btn--current`);
      targetBtn.setAttribute(`tabindex`, `-1`);
      tabName = targetBtn.getAttribute(`data-tab-name`);
      showTabPanel();
    };

    const showTabPanel = () => {
      tabPanels.forEach((panel) => {
        if (panel.classList.contains(tabName)) {
          panel.classList.add(`product__tab--current`);
        } else {
          panel.classList.remove(`product__tab--current`);
        }
      });
    };

    tabBtns.forEach((btn) => {
      btn.addEventListener(`click`, switchTabHandler);
    });
  }
})();
