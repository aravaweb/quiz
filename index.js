function playAudio() {
  var audio = document.getElementById("myAudio");
  audio.play();
  audio.onended = function() {
    window.location.href = "https://aravaweb.github.io/aravamindread";
  };
}
