// Obtém o elemento do vídeo
var videoElement = document.getElementById("background-video");

// Define o URL do vídeo do canal Unburnable Ink do Youtube
videoElement.src = "https://www.youtube.com/watch?v=oHg5SJYRHA0";

// Define o modo de reprodução do vídeo como "repetir"
videoElement.loop = true;

// Reproduz o vídeo
videoElement.play();

// Obtém os elementos de controle
var videoElement = document.getElementById("background-video");
var playPauseButton = document.getElementById("play-pause-button");
var volumeControl = document.getElementById("volume-control");
var fullscreenButton = document.getElementById("fullscreen-button");

// Define as funções de controle
function togglePlayPause() {
  if (videoElement.paused) {
    videoElement.play();
    playPauseButton.innerHTML = "Pause";
  } else {
    videoElement.pause();
    playPauseButton.innerHTML = "Play";
  }
}

function updateVolume() {
  videoElement.volume = volumeControl.value;
}

function toggleFullScreen() {
  if (videoElement.requestFullscreen) {
    videoElement.requestFullscreen();
  } else if (videoElement.mozRequestFullScreen) {
    videoElement.mozRequestFullScreen();
  } else if (videoElement.webkitRequestFullscreen) {
    videoElement.webkitRequestFullscreen();
  }
}
