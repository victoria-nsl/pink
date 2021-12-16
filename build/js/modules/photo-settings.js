const WIDTH_TABLET = 660;

const page = document.body;
const formSetting = document.querySelector('.user-post__form');
const switchesSetting =formSetting.querySelectorAll('.user-post__button-setting');
const settings =formSetting.querySelectorAll('.user-post__item-setting');


const changeSetting = (button, counter) => {
  switchesSetting.forEach((switchSetting) => {
    if (switchSetting.classList.contains('user-post__button-setting--active')) {
      switchSetting.classList.remove('user-post__button-setting--active');
    }
  });

  settings.forEach((setting) => {
    if (setting.classList.contains('user-post__item-setting--active')) {
      setting.classList.remove('user-post__item-setting--active');
    }
  });

  button.classList.add('user-post__button-setting--active');
  settings[counter].classList.add('user-post__item-setting--active');
};


if (formSetting) {
  if (page.clientWidth < WIDTH_TABLET) {

    settings.forEach((setting) => {
      if (setting.classList.contains('user-post__item-setting--nojs')) {
        setting.classList.remove('user-post__item-setting--nojs');
      }
    });

    switchesSetting.forEach((switchSetting) => {
      if (switchSetting.classList.contains('user-post__button-setting--nojs')) {
        switchSetting.classList.remove('user-post__button-setting--nojs');
      }
    });

    switchesSetting.forEach((switchSetting, index) => {
      switchSetting.addEventListener('click', () => {
        changeSetting(switchSetting, index);
      });
    });
  }
}
