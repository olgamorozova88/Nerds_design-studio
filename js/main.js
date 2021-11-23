/* Modal */

const modal = document.querySelector('.modal');
const modalShow = document.querySelector('.contacts-button');
const modalHide = document.querySelector('.modal-close');
const feedbackForm = modal.querySelector('.contact-us-form');
const nameField = modal.querySelector('input[id=contact-us-name]');
const mailField = modal.querySelector('input[id=contact-us-mail]');
const textField = modal.querySelector('input[id=contact-us-text]');

modalShow.addEventListener('click', function () {
  modal.classList.remove('modal-hide');
  modal.classList.add('modal-show');
  nameField.focus();
});

modalHide.addEventListener('click', function () {
  modal.classList.remove('modal-show');
  modal.classList.add('modal-hide');
  modal.classList.remove("modal-error")
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    modal.classList.remove('modal-show');
    modal.classList.add('modal-hide');
    modal.classList.remove("modal-error")
  }
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!nameField.value || !mailField.value || !textField.value) {
  evt.preventDefault();
  modal.classList.remove("modal-error");
  modal.offsetWidth = modal.offsetWidth;
  modal.classList.add("modal-error");
  }
});

/* Slider */

const sliderButtonFirst = document.querySelector('.slider-controls-1');
const sliderButtonSecond = document.querySelector('.slider-controls-2');
const sliderButtonThird = document.querySelector('.slider-controls-3');
const slidePhones = document.querySelector('.slider-item-phones');
const slideMonoblocks = document.querySelector('.slider-item-monoblocks');
const slideTablets = document.querySelector('.slider-item-tablets');

sliderButtonFirst.addEventListener('click', function () {
  if (slideMonoblocks.classList.contains('current-slide') || slideTablets.classList.contains('current-slide')) {
    slideMonoblocks.classList.remove('current-slide');
    slideTablets.classList.remove('current-slide');
    slidePhones.classList.add('current-slide');
  };
  if (sliderButtonSecond.classList.contains('current') || sliderButtonThird.classList.contains('current')) {
    sliderButtonSecond.classList.remove('current');
    sliderButtonThird.classList.remove('current');
    sliderButtonFirst.classList.add('current');
  }
});

sliderButtonSecond.addEventListener('click', function () {
  if (slidePhones.classList.contains('current-slide') || slideTablets.classList.contains('current-slide')) {
    slidePhones.classList.remove('current-slide');
    slideTablets.classList.remove('current-slide');
    slideMonoblocks.classList.add('current-slide');
  }
  if (sliderButtonFirst.classList.contains('current') || sliderButtonThird.classList.contains('current')) {
    sliderButtonFirst.classList.remove('current');
    sliderButtonThird.classList.remove('current');
    sliderButtonSecond.classList.add('current');
  }
});

sliderButtonThird.addEventListener('click', function () {
  if (slidePhones.classList.contains('current-slide') || slideMonoblocks.classList.contains('current-slide')) {
    slidePhones.classList.remove('current-slide');
    slideMonoblocks.classList.remove('current-slide');
    slideTablets.classList.add('current-slide');
  }
  if (sliderButtonFirst.classList.contains('current') || sliderButtonSecond.classList.contains('current')) {
    sliderButtonFirst.classList.remove('current');
    sliderButtonSecond.classList.remove('current');
    sliderButtonThird.classList.add('current');
  }
});