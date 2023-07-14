// Selecionando todos os elementos <video> desejados usando querySelectorAll
const videos = document.querySelectorAll('video');

// Iterando sobre cada elemento e adicionando eventListeners
videos.forEach(video => {
  video.addEventListener('mouseenter', () => {
    video.muted=true;
    /**A propriedade currentTime define ou retorna a posição atual (em segundos) da reprodução de áudio/vídeo.
    Ao definir esta propriedade, a reprodução saltará para a posição especificada.*/
    video.currentTime=1;
    //A propriedade playbackRate define ou retorna a velocidade de reprodução atual do áudio/vídeo.
    video.playbackRate=0.5;
    video.play();
  });

  video.addEventListener('mouseleave', () => {
    video.currentTime = 0;
    video.playbackRate = 1;
    
    video.pause();
  });
});

