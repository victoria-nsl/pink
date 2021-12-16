const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const formPhoto = document.querySelector('.user-post__form');
const fileChooser = formPhoto.querySelector('#photo');
const photoChooser = formPhoto.querySelector('.user-post__wrapper-image img');

const uploadPhoto = (fileUser,photoUser) => {
  const file = fileUser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      photoUser.src = reader.result;
    });
    reader.readAsDataURL(file);
  }
};

fileChooser.addEventListener('change', () => {
  uploadPhoto(fileChooser, photoChooser);
});
