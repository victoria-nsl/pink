const WIDTH_TABLET = 660;

const page = document.body;
const formSetting = document.querySelector('.user-post__form');
const switchesSetting =formSetting.querySelectorAll('.user-post__button-setting');
const settings =formSetting.querySelectorAll('.user-post__item-setting');


const changeSetting = (button, counter) => {
  settings.forEach((setting) => {
    if (setting.classList.contains('user-post__item-setting--active')) {
      setting.classList.remove('user-post__item-setting--active');
    }
  });

  switchesSetting.forEach((switchSetting) => {
    if (switchSetting.classList.contains('user-post__button-setting--active')) {
      switchSetting.classList.remove('user-post__button-setting--active');
      switchSetting.disabled = false;
    }
  });

  settings[counter].classList.add('user-post__item-setting--active');
  button.classList.add('user-post__button-setting--active');
  button.disabled = true;
};


if (formSetting) {
  if (page.clientWidth < WIDTH_TABLET) {

    settings.forEach((setting) => {
      setting.classList.remove('user-post__item-setting--active');
      setting.classList.remove('user-post__item-setting--nojs');
    });

    switchesSetting.forEach((switchSetting) => {
      switchSetting.classList.remove('user-post__button-setting--active');
      switchSetting.classList.remove('user-post__button-setting--nojs');
      switchSetting.disabled = false;
    });

    settings[0].classList.add('user-post__item-setting--active');
    switchesSetting[0].classList.add('user-post__button-setting--active');
    switchesSetting[0].disabled = true;

    switchesSetting.forEach((switchSetting, index) => {
      switchSetting.addEventListener('click', () => {
        changeSetting(switchSetting, index);
      });
    });
  }
}
