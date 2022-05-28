const names = document.querySelectorAll("h2");
const sounds = document.querySelectorAll("audio");
const stopSounds = () => {
  sounds.forEach((sound) => {
    sound.pause();
    sound.currentTime = 0;
    // or sound.load();
  });
};
names.forEach((name) => {
  name.addEventListener("click", (eo) => {
    stopSounds();
    name.nextElementSibling.play();
  });
});
