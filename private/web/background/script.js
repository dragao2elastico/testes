// Obtém o elemento do vídeo
var videoElement = document.getElementById("video-bg");

// Define o URL do vídeo do canal Unburnable Ink do Youtube
videoElement.src = "https://www.youtube.com/watch?v=oHg5SJYRHA0";

// Define o modo de reprodução do vídeo como "repetir"
videoElement.loop = true;

// Reproduz o vídeo
videoElement.play();
