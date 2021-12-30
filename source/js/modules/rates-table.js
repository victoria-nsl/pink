const WIDTH_TABLET = 660;

const page = document.body;
const blockRates = document.querySelector('.rates');

if (blockRates && page.clientWidth < WIDTH_TABLET) {
  const tableRates = blockRates.querySelector('.rates__table');
  const buttonsRates = blockRates.querySelectorAll('.rates__button');
  const parentTableRates =  tableRates.offsetParent;
  const numberScrolls = buttonsRates.length;

  blockRates.classList.remove('rates--nojs');
  tableRates.setAttribute('tabindex', '0');

  //функция, устанавливающая активную кнопку
  const setActiveButtonsRates = (index) => {
    buttonsRates.forEach((buttonRates) => {
      buttonRates.classList.remove('rates__button--active');
    });
    buttonsRates[index].classList.add('rates__button--active');
  };

  //изменение положение  таблицы при нажатии на кнопки
  buttonsRates.forEach((buttonRates, index) => {
    buttonRates.addEventListener('click', () => {
      const widthTable = tableRates.offsetWidth;
      if (tableRates.classList.contains('rates__table--start')) {
        tableRates.classList.remove('rates__table--start');
      }
      parentTableRates.scrollLeft = Math.floor(widthTable * index/numberScrolls);
      setActiveButtonsRates(index);
    });
  });

  //изменение активной кнопки при скролле таблицы
  parentTableRates.addEventListener('scroll', () => {
    const widthTable = tableRates.offsetWidth;
    const scrollDistance = parentTableRates.scrollLeft;

    if (tableRates.classList.contains('rates__table--start')) {
      tableRates.classList.remove('rates__table--start');
    }

    for (let i = 0; i < numberScrolls; i++) {
      if (Math.floor(widthTable*i/numberScrolls) <= scrollDistance)  {
        setActiveButtonsRates(i);
      }
    }
  });
}
