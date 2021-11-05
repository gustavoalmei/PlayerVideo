let video = document.getElementById('video')
let rangeVolume = document.getElementById('VolumeVideo')
let VolumeVideo = document.getElementById('VolumeVideo')
let bttnVol = document.getElementById('bttnVol')
let controller = document.getElementById('controller')
let container = document.querySelector('.container')

function teste() {
  video.classList('hiddenController')
}

function StartPlayer() {
  video.play()
}

function PausePlayer() {
  video.pause()
}

function StopPlayer() {
  video.pause()
  video.currentTime = 0
}

VolumeVideo.addEventListener('input', () => {
  video.volume = VolumeVideo.value / 100
})

bttnVol.addEventListener('mouseup', () => {
  VolumeVideo.classList.toggle('VolumeVideoShow')
})

// container.addEventListener('click', () => {
//   controller.classList.toggle('controllerHidden')
//   setInterval(500, classList.toggle('controllerHidden'))
// })
