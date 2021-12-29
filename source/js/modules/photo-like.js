const blockPhoto = document.querySelector('.photo');
const numbersLike = document.querySelectorAll('.photo__like span');

const showLike = (button, counter) => {
  let quantity = +numbersLike[counter].textContent;
  if (!button.classList.contains('photo__button-like--active')) {
    button.classList.add('photo__button-like--active');
    quantity += 1;
  } else {
    button.classList.remove('photo__button-like--active');
    quantity -= 1;
  }
  numbersLike[counter].textContent = quantity;
};

if (blockPhoto) {
  const buttonsLike = blockPhoto.querySelectorAll('.photo__button-like');

  buttonsLike.forEach((buttonLike, index) => {
    buttonLike.addEventListener('click', () => {
      showLike(buttonLike, index);
    });
  });
}
