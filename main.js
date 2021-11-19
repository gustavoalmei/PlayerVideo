let playPause = document.querySelector("#playPause")
let fastForward = document.querySelector("#fastForward")
let volumeVideo = document.querySelector("#volumeVideo")
let timeLive = document.querySelector("#timeLive")
let timeMax = document.querySelector("#timeMax")
let progress = document.querySelector("#progress")
let videoAudio = document.querySelector("#videoAudio")
let controlVol = document.querySelector(".controlVol")

// convertendo time
function convertTime(){
  let Minutes = Math.floor(videoAudio.duration / 60)
  let Seconds = Math.floor(videoAudio.duration % 60)
  let MinutesLive = Math.floor(videoAudio.currentTime / 60)
  let SecondsLive = Math.floor(videoAudio.currentTime % 60)

  if (MinutesLive < 10) {
    MinutesLive = '0' + MinutesLive
  }
  if (SecondsLive < 10) {
    SecondsLive = '0' + SecondsLive
  }
  if (Minutes < 10) {
    Minutes = '0' + Minutes
  }
  if (Seconds < 10) {
    Seconds = '0' + Seconds
  }

  timeMax.innerText = `${Minutes}:${Seconds}`
  timeLive.innerText = `${MinutesLive}:${SecondsLive}`

  timeMax.innerText = `${Minutes}:${Seconds}`
  timeLive.innerText = `${MinutesLive}:${SecondsLive}`
}
setInterval(convertTime, 1000)

// Adicionando função a barra de progresso
function barProgress(){
  progress.max = videoAudio.duration
  progress.value = videoAudio.currentTime
}
setInterval(barProgress, 100)

// Play e pause
let playing = false;
function playVideo(){
  if(playing == false){
    playPause.setAttribute('src', "assets/img/pause-circle-regular-50.png")
    videoAudio.play()
    return playing = true
  }else{
    playPause.setAttribute('src', "assets/img/play-circle-regular-50.png")
    videoAudio.pause()
    return playing = false
  }
}

function advanced(){
  videoAudio.currentTime += 10
}

function changeTime(){
  videoAudio.currentTime = progress.value
}

let soundMuted = false

// controle de audio e som
function ChangeVolume() {
  videoAudio.volume = volumeInput.value / 100

  if (volumeInput.value == 0) {
    volumeVideo.setAttribute('src', './assets/img/volume-mute-regular-50.png')
    videoAudio.muted = true
    soundMuted = true
    return soundMuted
  } else if (volumeInput.value <= 30) {
    volumeVideo.setAttribute('src', './assets/img/volume-low-regular-48.png')
    videoAudio.muted = false
    soundMuted = false
    return soundMuted
  } else {
    volumeVideo.setAttribute('src', './assets/img/volume-full-regular-50.png')
    videoAudio.muted = false
    soundMuted = false
    return soundMuted
  }
}

// Mutando
let UserVol
function mute() {
  UserVol = videoAudio.volume * 100

  if (videoAudio.muted == true) {
    volumeVideo.setAttribute('src', './assets/img/volume-full-regular-50.png')
    videoAudio.muted = false
    soundMuted = false
    volumeInput.value = UserVol
  } else {
    volumeVideo.setAttribute('src', './assets/img/volume-mute-regular-50.png')
    videoAudio.muted = true
    soundMuted = true
    volumeInput.value = 0
  }
}

function hiddenvol(){
  controlVol.style.display = "none"
}

function shownvol(){
  controlVol.style.display = "flex"
}

window.onload = ()=>{
  videoAudio.volume = 0.5
}

playPause.addEventListener("click", playVideo)
fastForward.addEventListener("click", advanced)
progress.addEventListener("input", changeTime)
volumeInput.addEventListener("input", ChangeVolume)
volumeVideo.addEventListener("mouseover", shownvol)
controlVol.addEventListener("mouseleave", hiddenvol)