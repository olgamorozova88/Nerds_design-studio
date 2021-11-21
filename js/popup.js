const modal = document.querySelector('.modal');
const modalShow = document.querySelector('.contacts-button');
const modalHide = document.querySelector('.modal-close');

modalShow.addEventListener('click', function () {
  modal.classList.remove('modal-hide');
  modal.classList.add('modal-show');
});

modalHide.addEventListener('click', function () {
  modal.classList.remove('modal-show');
  modal.classList.add('modal-hide');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    modal.classList.remove('modal-show');
    modal.classList.add('modal-hide');
  }
})
