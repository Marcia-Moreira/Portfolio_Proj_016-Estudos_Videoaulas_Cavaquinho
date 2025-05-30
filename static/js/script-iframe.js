//* Para Controles/Botões iFrame x iFrame API:

let players = [];

function onYouTubeIframeAPIReady() {
  const iframes = document.querySelectorAll('.aula-video');

  iframes.forEach((iframe) => {
    const player = new YT.Player(iframe, {
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
    players.push(player);
  });
}

function onPlayerReady(event) {
  const container = event.target.getIframe().closest('.video-wrapper');
  const playButton = container.querySelector('.play-btn');

  if (playButton) {
    playButton.addEventListener('click', () => {
      const playerState = event.target.getPlayerState();
      if (playerState === YT.PlayerState.PLAYING) {
        event.target.pauseVideo();
        playButton.textContent = 'Play';
      } else {
        event.target.playVideo();
        playButton.textContent = 'Pause';
      }
    });
  }
}

function onPlayerStateChange(event) {
  const container = event.target.getIframe().closest('.video-wrapper');
  const playButton = container.querySelector('.play-btn');

  if (!playButton) return;

  if (event.data == YT.PlayerState.PLAYING) {
    playButton.textContent = 'Pause';
  } else if (event.data == YT.PlayerState.PAUSED || event.data == YT.PlayerState.ENDED) {
    playButton.textContent = 'Play';
  }
}