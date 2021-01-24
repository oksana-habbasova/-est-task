const changeButton = document.querySelector('#changeButton');
const primaryLogo = document.querySelector('#primaryLogo');
const secondaryLogo = document.querySelector('#secondaryLogo');

changeButton.addEventListener('click', function () {
  primaryLogo.classList.toggle('hide');
  secondaryLogo.classList.toggle('hide');
});
