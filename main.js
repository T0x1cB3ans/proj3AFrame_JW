const box = document.querySelector('.clickable');
const video = document.querySelector('#mikey');
let isPlaying = false;

box.addEventListener('click', () => {
  console.log('box was clicked!');
  isPlaying = !isPlaying;

  if (isPlaying) {
    box.setAttribute('material', 'src: #mikey');
    video.play().catch(err => console.log('video problem:', err));
  } else {
    video.pause();
    box.setAttribute('material', 'src: #meme');
  }
});