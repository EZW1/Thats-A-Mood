const fireVol = document.getElementById('fire-vol');
const rainVol = document.getElementById('rain-vol');
const coffeeVol = document.getElementById('coffee-vol');
const fireSong = document.getElementById('fire-ogg');
const rainSong = document.getElementById('rain-ogg');
const coffeeSong = document.getElementById('coffee-ogg');
// const background = document.getElementsById('bod');


fireSong.volume  = 0;
rainSong.volume  = 0;
coffeeSong.volume = 0;
const volumeCache = {fire: 0, rain: 0, coffee: 0}
const muteAction = document.querySelector('#mute-btn');
muteAction.addEventListener('click', (e) => {
  if(volumeCache.fire === 0 && volumeCache.rain === 0 && volumeCache.coffee === 0) {
    volumeCache.fire = fireVol.value
    volumeCache.rain = rainVol.value
    volumeCache.coffee = coffeeVol.value
    fireVol.value = 0;
    rainVol.value = 0;
    coffeeVol.value = 0;
    fireSong.volume  = 0;
    rainSong.volume  = 0;
    coffeeSong.volume = 0;
    console.log(volumeCache);
    muteAction.setAttribute('src', 'assets/images/unmute.png');
  } else {
    fireVol.value = volumeCache.fire;
    rainVol.value = volumeCache.rain;
    coffeeVol.value = volumeCache.coffee;
    fireSong.volume  = volumeCache.fire / 100;
    rainSong.volume  = volumeCache.rain / 100;
    coffeeSong.volume = volumeCache.coffee / 100;
    volumeCache.fire = 0;
    volumeCache.rain = 0;
    volumeCache.coffee = 0;
    muteAction.setAttribute('src', 'assets/images/mute.png');
  }
});

// PERSISTENT FUNCTIONALITY
// const persistence = document.querySelector('#persistence');
// persistence.addEventListener('click', (e) => {
//   const sending = chrome.runtime.sendMessage({
//     fireVolume: fireSong.volume,
//     rainVolume: rainSong.volume,
//     coffeeVolume: coffeeSong.volume
// })
// });



const randomAction = document.querySelector('#shuffle-btn');
randomAction.addEventListener('click', (e) => {
  fireVol.value = Math.floor(Math.random() * 100);
  rainVol.value = Math.floor(Math.random() * 100);
  coffeeVol.value = Math.floor(Math.random() * 100);
  fireSong.volume  = fireVol.value / 100;
  rainSong.volume  = rainVol.value / 100;
  coffeeSong.volume = coffeeVol.value / 100;
  backgroundChange();
});

fireVol.addEventListener('input', () => {
  fireSong.volume = fireVol.value / 100;
  backgroundChange();
  // console.log(fireVol.value)
});

rainVol.addEventListener('input', () => {
  rainSong.volume = rainVol.value / 100;
  backgroundChange();
  // console.log(rainVol.value)
});

coffeeVol.addEventListener('input', () => {
  coffeeSong.volume = coffeeVol.value / 100;
  backgroundChange();
  // console.log(coffeeVol.value)
});

function backgroundChange() {
  let sheet = document.createElement('style');
  sheet.innerHTML = `body {background-color: rgba(${fireVol.value * 2},${coffeeVol.value * 2},${rainVol.value * 2}, 0.3)}`;

  document.body.appendChild(sheet);
}

let clickCount = 0;

let homeicon = document.querySelector('#mood')
homeicon.addEventListener('mousedown', () => {
  homeicon.classList.add('rotate');
  console.log('mousedown test')
  clickCount++;
  if (clickCount > 20) {
    const title = document.getElementById('title');
    title.innerText = "That's a big mood."
  }
})

homeicon.addEventListener('mouseup', () => {
  console.log('mouseup test');
  console.log(homeicon.classList);
  homeicon.classList.remove('rotate');
  console.log(homeicon.classList);
  
})

// let playNow = document.querySelector('audio').play();
