//* Para Controles/Botões iFrame x iFrame API:

// Array para armazenar todos os players (caso tenha mais de um vídeo na página)
let players = [];

/**
 * Função exigida pela API do YouTube.
 * Ela é chamada automaticamente quando o script da API (iframe_api) termina de carregar.
 */
function onYouTubeIframeAPIReady() {
  // Seleciona todos os iframes com a classe 'aula-video'
  const iframes = document.querySelectorAll('.aula-video');

  // Para cada iframe encontrado, cria um player associado
  iframes.forEach((iframe) => {
    const player = new YT.Player(iframe, {
      events: {
        'onReady': onPlayerReady,             // Quando o player estiver pronto
        'onStateChange': onPlayerStateChange  // Quando o estado do player mudar (play, pause, stop)
      }
    });
    players.push(player); // Adiciona esse player no array para referência futura
  });
}

/**
 * Função chamada quando o player está pronto (carregado).
 */
function onPlayerReady(event) {
  // Procura o container pai desse iframe (é o .video-wrapper)
  const container = event.target.getIframe().closest('.video-wrapper');
  // Seleciona o botão Play/Pause dentro desse container
  const playButton = container.querySelector('.play-btn');

  // Verifica se encontrou o botão
  if (playButton) {
    // Adiciona ouvintes para 'click' e 'touchstart' (para funcionar bem em mobile)
    playButton.addEventListener('click', () => togglePlay(event, playButton));
    playButton.addEventListener('touchstart', () => togglePlay(event, playButton));
  }
}

/**
 * Função que alterna entre Play e Pause ao clicar no botão.
 */
function togglePlay(event, playButton) {
  const player = event.target;
  const playerState = player.getPlayerState();

  if (playerState === YT.PlayerState.PLAYING) {
    player.pauseVideo();
    playButton.textContent = 'Play';
  } else {
    player.playVideo();
    playButton.textContent = 'Pause';
  }
}

/**
 * Função que responde quando o estado do vídeo muda.
 * Exemplo: quando começa a tocar, quando pausa ou quando termina.
 */
function onPlayerStateChange(event) {
  const container = event.target.getIframe().closest('.video-wrapper');
  const playButton = container.querySelector('.play-btn');

  if (!playButton) return; // Se não encontrar o botão, sai da função

  // Atualiza o texto do botão conforme o estado do vídeo
  if (event.data === YT.PlayerState.PLAYING) {
    playButton.textContent = 'Pause';
  } else if (event.data === YT.PlayerState.PAUSED || event.data === YT.PlayerState.ENDED) {
    playButton.textContent = 'Play';
  }
}