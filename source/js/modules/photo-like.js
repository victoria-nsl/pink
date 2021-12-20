const blockPhoto = document.querySelector('.photo');
const buttonsLike = document.querySelectorAll('.photo__button-like');
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
  buttonsLike.forEach((buttonLike, index) => {
    buttonLike.addEventListener('click', () => {
      showLike(buttonLike, index);
    });
  });
}
