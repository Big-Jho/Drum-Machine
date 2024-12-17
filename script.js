function validateInput(event) {
  const key = document.querySelector(`.key[key-id="${event.keyCode}"]`);
  const audio = document.querySelector(`audio[key-id="${event.keyCode}"]`);

  if (key === undefined || key === null) {
    const alert = document.getElementById("alert");
    alert.classList.remove("hidden");

    setTimeout(() => {
      alert.classList.add("hidden");
    }, 2000);
    return;
  }

  key.classList.add("playing");
  setTimeout(() => key.classList.remove("playing"), 100);
  audio.currentTime = 0;
  audio.play();
}

// validateInput();

window.addEventListener("keydown", validateInput);
