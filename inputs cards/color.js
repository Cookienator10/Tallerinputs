
var circle = document.querySelector('.circle');
var cardContainer = document.querySelector('.card-container');
var footerContainer = document.querySelector('.footer-container');

function changeColors() {
  var colorValue = document.getElementById('change').value;

  // Cambiar el color del border-top de la tarjeta
  cardContainer.style.borderTopColor = colorValue;

  // Cambiar el color de fondo del contenedor del footer
  footerContainer.style.backgroundColor = colorValue;
}

function changeCircleColor() {
  var colorValue = document.getElementById('change').value;

  // Cambiar el color del círculo cromático
  circle.style.background = `conic-gradient(${colorValue}, red, yellow, lime, aqua, blue, magenta, ${colorValue})`;
}

var changeInput = document.getElementById('change');
changeInput.addEventListener('input', changeColors);
changeInput.addEventListener('input', changeCircleColor);