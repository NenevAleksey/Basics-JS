const button = document.querySelector('#myBtn');
const spoiler = document.querySelector('#spoiler');

button.addEventListener('click', actionSpoiler);

function actionSpoiler() {
   spoiler.classList.toggle('closed');
   
   spoiler.classList.contains('closed') 
      ? inactiveEsc()
      : activeEsc()
}

function activeEsc() {
   document.addEventListener('keydown', handleEscape)
}

function inactiveEsc() {
   document.removeEventListener('keydown', handleEscape)
}

function handleEscape(event) {
   if (event.key === "Escape") {
      actionSpoiler();
   }
}