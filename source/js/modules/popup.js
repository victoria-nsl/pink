const form = document.querySelector('.form-block__form');
//const buttonForm = form.querySelector('.form-block__button');

const inputSurname = form.querySelector('#surname');
const inputName = form.querySelector('#name');
const inputPatronymic = form.querySelector('#patronymic');
const inputPhone = form.querySelector('#phone');
const inputEmail = form.querySelector('#email');

//const popupSuccess = document.querySelector('.popup--success');
//const buttonClosePopupSuccess = popupSuccess.querySelector('.popup__button--success');

//const popupError = document.querySelector('.popup--error');
//const buttonClosePopupError = popupError.querySelector('.popup__button--success');

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

form.addEventListener('submit', (evt)  => {
  if(!inputSurname.value || !inputName.value || !inputEmail.value ) {
    evt.preventDefault();

  }  else {
    if(isStorageSupport) {
      localStorage.setItem('surname', inputSurname.value);
      localStorage.setItem('name', inputName.value);
      localStorage.setItem('patronymic', inputPatronymic.value);
      localStorage.setItem('email',  inputEmail.value);
      localStorage.setItem('tel',  inputPhone.value);
    }
  }
});
