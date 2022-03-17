function playSound(volume) {
  console.log('MESSAGE RECEIVED');
  let url = chrome.runtime.getURL('audio.html');
  
  // set this string dynamically in your code, this is just an example
  // this will play success.wav at half the volume and close the popup after a second
  url += `?volume=${volume.fireVolume}&src=https://st2.asoftmurmur.com/assets/p/content/fire/main-fire.ogg&length=100000`;

  chrome.windows.create({
      type: 'popup',
      focused: false,
      top: 1,
      left: 1,
      height: 10,
      width: 10,
      url,
  })
}

chrome.runtime.onMessage.addListener(playSound);