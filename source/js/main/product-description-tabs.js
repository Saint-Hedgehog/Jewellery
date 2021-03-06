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
      });
      targetBtn.classList.add(`product__tab-btn--current`);
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
