let video = document.getElementById('video')
let VolumeVideo = document.getElementById('VolumeVideo')
let bttnVol = document.getElementById('bttnVol')
let controllers = document.querySelector('.controllers')
let controller = document.querySelector('.controller')
let hiddenControll = document.querySelector('.hiddenControll')

window.onload = ()=>{
  video.volume = 0.2;
}

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

controllers.addEventListener('mouseover', () => {
  VolumeVideo.classList.toggle('VolumeVideoHidden')
})

controllers.addEventListener('mouseout', () => {
  VolumeVideo.classList.toggle('VolumeVideoHidden')
})

hiddenControll.addEventListener("click", ()=>{
  controllers.classList.toggle('hiddenControllers')
})