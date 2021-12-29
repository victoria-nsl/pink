const KEYCODE_TAB = 9;

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

export {reloadBrowser, setFocusTab};
