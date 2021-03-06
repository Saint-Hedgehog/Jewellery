'use strict';

(() => {
  const header = document.querySelector(`.page-header`);
  const menuToggle = document.querySelector(`#main-nav-toggle`);
  const main = document.querySelector(`main`);
  const footer = document.querySelector(`footer`);
  // const body = document.querySelector(`body`);

  const hideMenu = () => {
    if (header) {
      if (header.classList.contains(`page-header--no-js`)) {
        header.classList.remove(`page-header--no-js`);
      }
      if (header.classList.contains(`page-header--nav-open`)) {
        header.classList.remove(`page-header--nav-open`);
        header.classList.add(`page-header--nav-closed`);
      }
    }
  };

  const toggleMenu = () => {
    header.classList.toggle(`page-header--nav-open`);
    header.classList.toggle(`page-header--nav-closed`);
    main.classList.toggle(`js-display-none`);
    footer.classList.toggle(`js-display-none`);
    // body.classList.toggle(`js-no-scroll`);
  };

  hideMenu();
  menuToggle.addEventListener(`click`, toggleMenu);
})();
