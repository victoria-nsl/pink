import {isEscEvent, setFocusTab} from './util.js';

const body = document.body;
const form = document.querySelector('.form-block__form');

if(form) {
  const inputsRequired = form.querySelectorAll('[data-input-required]');
  const inputSurname = form.querySelector('#surname');
  const inputName = form.querySelector('#name');
  const inputPatronymic = form.querySelector('#patronymic');
  const inputPhone = form.querySelector('#phone');
  const inputEmail = form.querySelector('#email');

  const popups = document.querySelectorAll('.popup');
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


  const closePopup = () => {
    popups.forEach((popup) => {
      if(popup.classList.contains('popup-show')) {
        popup.classList.remove('popup-show');
      }
    });
    body.classList.remove('page-no-scroll');
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

  const onButtonTabKeydown = (evt) => {
    setFocusTab(evt, evt.target, evt.target);
  };

  const showPopup = (popup, buttonClosePopup) => {
    popup.classList.add('popup-show');
    buttonClosePopup.focus();
    body.classList.add('page-no-scroll');
    buttonClosePopup.addEventListener('click', onButtonClick);
    document.addEventListener('keydown', onPopupEscKeydown);
    popup.addEventListener('click', onPopupClick);
    buttonClosePopup.addEventListener('keydown', onButtonTabKeydown);
  };


  form.addEventListener('submit', (evt)  => {
    if(!inputSurname.value || !inputName.value || !inputEmail.value ) {
      evt.preventDefault();
      inputsRequired.forEach((inputRequired) => {
        if(!inputRequired.value) {
          inputRequired.classList.add('form__input-error');
        }
      });
      showPopup(popupError, buttonClosePopupError);
    }  else {
      if(isStorageSupport) {
        localStorage.setItem('surname', inputSurname.value);
        localStorage.setItem('name', inputName.value);
        localStorage.setItem('patronymic', inputPatronymic.value);
        localStorage.setItem('email',  inputEmail.value);
        localStorage.setItem('tel',  inputPhone.value);
      }
      inputsRequired.forEach((inputRequired) => {
        if(inputRequired.value && inputRequired.classList.contains('form__input-error')) {
          inputRequired.classList.remove('form__input-error');
        }
      });
      showPopup(popupSuccess,buttonClosePopupSuccess);
    }
  });
}
