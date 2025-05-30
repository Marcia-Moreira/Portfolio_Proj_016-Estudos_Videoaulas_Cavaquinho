//* Script Geral: Para usar no "VIDEO", não funciona no "iFRAME"

// Seleciona todos os vídeos e controles
document.querySelectorAll(".video-section").forEach((section) => {
  const video = section.querySelector(".aula-video");
  const playBtn = section.querySelector(".play-btn");
  const fullscreenBtn = section.querySelector(".fullscreen-btn");

  // Controle Play/Pause
  playBtn.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      playBtn.textContent = "Pause";
    } else {
      video.pause();
      playBtn.textContent = "Play";
    }
  });

  // Controle Tela Cheia
  fullscreenBtn.addEventListener("click", () => {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      /* Safari */
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      /* IE11 */
      video.msRequestFullscreen();
    }
  });

  // Atualiza o texto do botão conforme o estado do vídeo
  video.addEventListener("play", () => {
    playBtn.textContent = "Pause";
  });

  video.addEventListener("pause", () => {
    playBtn.textContent = "Play";
  });
});
