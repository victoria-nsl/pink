const reloadBrowser = (widthStart,  widthWindowReload) => {
  if (window.innerWidth >= widthWindowReload && widthStart < widthWindowReload) {
    location.reload();
  }

  if (window.innerWidth <  widthWindowReload && widthStart >=  widthWindowReload) {
    location.reload();
  }
};

export {reloadBrowser};
