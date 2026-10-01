const box = document.querySelector('.clickable');
let isOrange = false;

box.addEventListener('click', () => {
  isOrange = !isOrange;
  box.setAttribute('color', isOrange ? 'orange' : 'white');
});