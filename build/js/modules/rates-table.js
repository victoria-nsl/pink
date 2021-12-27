const WIDTH_TABLET = 660;
const WIDTH_COLUMN_MOBILE = 280;
const WIDTH_MARGIN_MOBILE = 20;

const page = document.body;
const blockRates = document.querySelector('.rates');


if (blockRates && page.clientWidth < WIDTH_TABLET) {

  const tableRates = blockRates.querySelector('.rates__table');
  const buttonsRates = blockRates.querySelectorAll('.rates__button');

  tableRates.classList.remove('rates__table--nojs');

  const widthTableRates = buttonsRates.length*WIDTH_COLUMN_MOBILE;

  tableRates.style.transform =`translateX(${((WIDTH_MARGIN_MOBILE - WIDTH_COLUMN_MOBILE)/widthTableRates*100)}%)`;

  const setActiveButtonsRates = (index) => {
    buttonsRates.forEach((buttonRates) => {
      buttonRates.classList.remove('rates__button--active');
    });
    buttonsRates[index].classList.add('rates__button--active');
  };

  buttonsRates.forEach((buttonRates, index) => {
    buttonRates.addEventListener('click', () => {
      if (index === 0) {
        tableRates.style.transform =`translateX(${(WIDTH_MARGIN_MOBILE/widthTableRates*100)}%)`;
      } else {
        tableRates.style.transform =`translateX(${((WIDTH_MARGIN_MOBILE - WIDTH_COLUMN_MOBILE*index)/widthTableRates*100)}%)`;
      }
      setActiveButtonsRates(index);
    });

  });
}
