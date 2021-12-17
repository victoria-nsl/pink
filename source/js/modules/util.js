const currentWidth = window.innerWidth;

window.addEventListener('resize', () => {
  if (window.innerWidth >= 660 && currentWidth < 660) {
    location.reload();
  }

  if (window.innerWidth < 660 && currentWidth >= 660) {
    location.reload();
  }
});


