// 
// document.addEventListener('DOMContentLoaded', () => {

  console.log ('background is running')

  //   let document = popup.html;
  // const offscreen = new OffscreenCanvas(256, 256);

  const fireAudio = document.createElement("audio");
  fireAudio.setAttribute('src', 'assets/sounds/fire.ogg')
  fireAudio.setAttribute('id', 'fire-ogg')
  const fireSoundPlayer = querySelector('#firesoundplayer');
  fireSoundPlayer.appendChild(fireAudio);


  const rainAudio = document.createElement("audio");
  rainAudio.src = 'assets/sounds/rain.ogg'
  // rainAudio.setAttribute('src', 'assets/sounds/rain.ogg');
  rainAudio.setAttribute("id", "rain-ogg");
  const rainSoundPlayer = querySelector('#rainsoundplayer');
  rainSoundPlayer.appendChild(rainAudio);



  const coffeeAudio = document.createElement("audio");
  coffeeAudio.src = 'assets/sounds/coffee.ogg'
  const coffeeSoundPlayer = querySelector('#coffeesoundplayer');
  coffeeSoundPlayer.appendChild(coffeeAudio);
  coffeeAudio.setAttribute('id', 'coffee-ogg');


  fireAudio.play();
  rainAudio.play();
  coffeeAudio.play();
  
  console.log('end of background');