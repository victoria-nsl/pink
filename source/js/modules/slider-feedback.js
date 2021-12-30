const feedbackBlock = document.querySelector('.feedback');

if (feedbackBlock) {
  window.$(document).ready(() => {
    window.$('.feedback__list').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      draggable:false,
      swipe: false,

      responsive:[
        {
          breakpoint: 1024,
          settings: {
            arrows: false,
            dots: true,
            swipe: true,
          },
        },
      ],
    });
  });
}
