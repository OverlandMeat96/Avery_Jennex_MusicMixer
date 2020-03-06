(() => {
  const instrumentIcons = document.querySelectorAll(".instrumentIcons img"),
        playButtons = document.querySelectorAll('.playTrack'),
        pauseButtons = document.querySelectorAll('.pauseTrack'),
        audioElement = document.querySelector('#jukebox'),

        
  function changeImageSet() {
    pieces.forEach((piece, index) => {
    cars[index].src=`images/${piece + this.dataset.puzzleindex}.jpg`;
    cars[index].id=`${piece + this.dataset.puzzleindex}`;
  });


  function loadTrack() {
    
    let audioSource = `audio/${this.dataset.trackref}.mp3`;

    audioElement.src = audioSource;

    audioElement.load();

    playTrack();
  }

  function playTrack() {
    audioElement.play();
  }

  function pauseTrack() {
    audioElement.pause();
  }


playButtons.forEach(button => button.addEventListener("click", playTrack));
pauseButtons.forEach(button => button.addEventListener("click", pauseTrack));

instrumentIcons.forEach(button => button.addEventListener('click', changeImageSet));
}()