const KEY_ESCAPE= 'Escape';
const KEY_ESC = 'Esc';

const form = document.querySelector('.form-block__form');
//const buttonForm = form.querySelector('.form-block__button');

const inputSurname = form.querySelector('#surname');
const inputName = form.querySelector('#name');
const inputPatronymic = form.querySelector('#patronymic');
const inputPhone = form.querySelector('#phone');
const inputEmail = form.querySelector('#email');

const popupSuccess = document.querySelector('.popup--success');
const buttonClosePopupSuccess = popupSuccess.querySelector('.popup__button--success');

const popupError = document.querySelector('.popup--error');
const buttonClosePopupError = popupError.querySelector('.popup__button--error');

let isStorageSupport = true;
let storageSurname = '';
let storageName = '';
let storagePatronymic = '';
let storageEmail = '';
let storageTel = '';


try {
  storageSurname = localStorage.getItem('surname');
  storageName = localStorage.getItem('name');
  storagePatronymic = localStorage.getItem('patronymic');
  storageEmail = localStorage.getItem('email');
  storageTel = localStorage.getItem('tel');

} catch (err) {
  isStorageSupport = false;
}

if (storageSurname || storageName || storagePatronymic || storageEmail || storageTel) {
  inputSurname.value = storageSurname || '' ;
  inputName.value = storageName || '' ;
  inputPatronymic.value = storagePatronymic || '' ;
  inputEmail.value = storageEmail || '';
  inputPhone.value = storageTel || '';
}


const isEscEvent = (evt) =>  evt.key ===  KEY_ESCAPE || evt.key === KEY_ESC;

const closePopup = () => {
  if(popupSuccess.classList.contains('popup-show')) {
    popupSuccess.classList.remove('popup-show');
  }
  if(popupError.classList.contains('popup-show')) {
    popupError.classList.remove('popup-show');
  }
};

const onButtonClick = (evt) => {
  evt.preventDefault();
  closePopup();
};

const onPopupClick = (evt) => {
  if (evt.target.matches('section')) {
    evt.stopPropagation();
    closePopup();
  }
};

const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closePopup();
    document.removeEventListener('keydown', onPopupEscKeydown);
  }
};

const showPopup = (popup, buttonClosePopup) => {
  popup.classList.add('popup-show');
  buttonClosePopup.focus();
  buttonClosePopup.addEventListener('click', onButtonClick);
  document.addEventListener('keydown', onPopupEscKeydown);
  popup.addEventListener('click', onPopupClick);
};


form.addEventListener('submit', (evt)  => {
  if(!inputSurname.value || !inputName.value || !inputEmail.value ) {
    evt.preventDefault();
    showPopup(popupError, buttonClosePopupError);
  }  else {
    if(isStorageSupport) {
      localStorage.setItem('surname', inputSurname.value);
      localStorage.setItem('name', inputName.value);
      localStorage.setItem('patronymic', inputPatronymic.value);
      localStorage.setItem('email',  inputEmail.value);
      localStorage.setItem('tel',  inputPhone.value);
    }
    showPopup(popupSuccess,buttonClosePopupSuccess);
  }
});
