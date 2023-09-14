document.addEventListener("DOMContentLoaded", function() {
  var videoPlayer = document.getElementById("videoPlayer");
  var meuConteudo = document.getElementById("meuConteudo");
  var controlsVisible = false;
  var contentVisible = false;

  function showControls() {
      videoPlayer.setAttribute("controls", "controls");
      controlsVisible = true;
  }

  function showContent() {
      meuConteudo.style.display = "block";
      contentVisible = true;
  }

  videoPlayer.addEventListener("timeupdate", function() {
      if (videoPlayer.currentTime >= 30 && !controlsVisible) {
          showControls();
      }

      if (videoPlayer.currentTime >= 30 && !contentVisible) {
          showContent();
      }
  });

  function playVideo() {
      videoPlayer.play();
      removeEventListeners();
  }

  function removeEventListeners() {
      document.removeEventListener("click", playVideo);
      document.removeEventListener("touchstart", playVideo);
  }

  var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  if (isMobile) {
      document.addEventListener("touchstart", playVideo);
  } else {
      document.addEventListener("click", playVideo);
  }
});
