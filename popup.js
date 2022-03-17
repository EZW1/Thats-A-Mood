const fireVol = document.getElementById('fire-vol');
const rainVol = document.getElementById('rain-vol');
const coffeeVol = document.getElementById('coffee-vol');
const fireSong = document.getElementById('fire-ogg');
const rainSong = document.getElementById('rain-ogg');
const coffeeSong = document.getElementById('coffee-ogg');



const muteAction = document.querySelector('#mute');
// const volume = document.querySelectorAll('input')
// const sliders = document.querySelectorAll('.slider');
muteAction.addEventListener('click', (e) => {
  fireVol.value = 0;
  rainVol.value = 0;
  coffeeVol.value = 0;
  fireSong.volume  = 0;
  rainSong.volume  = 0;
  coffeeSong.volume = 0;
});

fireVol.addEventListener('input', () => {
  fireSong.volume = fireVol.value / 100;
  // console.log(fireVol.value)
});

rainVol.addEventListener('input', () => {
  rainSong.volume = rainVol.value / 100;
  // console.log(rainVol.value)
});

coffeeVol.addEventListener('input', () => {
  coffeeSong.volume = coffeeVol.value / 100;
  // console.log(coffeeVol.value)
});