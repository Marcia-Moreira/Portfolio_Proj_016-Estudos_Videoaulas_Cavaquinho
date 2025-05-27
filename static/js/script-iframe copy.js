// Para Controles iFrame x iFrame API:

let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  const playBtn = document.querySelector(".play-btn");
  playBtn.addEventListener("click", () => {
    if (player.getPlayerState() === YT.PlayerState.PLAYING) {
      player.pauseVideo();
      playBtn.textContent = "Play";
    } else {
      player.playVideo();
      playBtn.textContent = "Pause";
    }
  });
}
