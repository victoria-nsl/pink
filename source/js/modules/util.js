const KEYCODE_TAB = 9;
const KEY_ESCAPE= 'Escape';
const KEY_ESC = 'Esc';

const reloadBrowser = (widthStart,  widthWindowReload) => {
  if (window.innerWidth >= widthWindowReload && widthStart < widthWindowReload) {
    location.reload();
  }

  if (window.innerWidth <  widthWindowReload && widthStart >=  widthWindowReload) {
    location.reload();
  }
};

const setFocusTab = (evt, firstElement, lastElement) => {
  const isShiftPressed = evt.shiftKey;
  const isTabPressed = (evt.key === 'Tab' || evt.keyCode === KEYCODE_TAB);
  if (!isTabPressed) {
    return;
  }

  if (isShiftPressed && isTabPressed && document.activeElement === firstElement) {
    lastElement.focus();
    evt.preventDefault();
  }

  if (!isShiftPressed && isTabPressed && document.activeElement === lastElement) {
    evt.preventDefault();
    firstElement.focus();
  }
};

const isEscEvent = (evt) =>  evt.key ===  KEY_ESCAPE || evt.key === KEY_ESC;

export {reloadBrowser, setFocusTab, isEscEvent};
