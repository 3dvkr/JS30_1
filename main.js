function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

function playSound(e) {
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!sound) return;

    key.classList.add('playing');
    sound.currentTime = 0;
    sound.play();
}

const allKeys = Array.from(document.querySelectorAll('.key'));
allKeys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);