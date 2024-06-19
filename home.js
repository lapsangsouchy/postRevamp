/* Select Elements to Change */

let imageToggler = document.getElementById('imageToggler');
let instruction = document.getElementById('instruction');
let audio1 = document.getElementById('audio1');
let audio2 = document.getElementById('audio2');

/* Turn volume audio down */

audio1.volume = 0.2;
audio2.volume = 0.2;

/* Create Event Handlers for mousedown and mouseup */

const mousedownHandler = (changingImage) => {
  changingImage.src = './assets/pikachuJump2.png';

  if (!audio2.paused) {
    audio2.pause();
    audio2.currentTime = 0;
  }
  audio1.play();
};

const mouseupHandler = (changingImage) => {
  changingImage.src = './assets/pikachuJump1.png';
  if (!audio1.paused) {
    audio1.pause();
    audio1.currentTime = 0;
  }
  audio2.play();
};

/* Callback Function to Toggle First Image and Add New Event Listeners */

const changeImage = (e) => {
  e.preventDefault();

  let changingImage = document.getElementById('changingImage');
  console.log(changingImage.src);
  console.dir(changingImage.src);

  // If original image, do all the new stuff
  if (changingImage.src === 'https://pbs.twimg.com/media/C5e2Al2UYAExILo.jpg') {
    // Change image
    changingImage.src = './assets/pikachuJump1.png';

    // Add new text
    instruction.style.visibility = 'visible';

    // Add event listeners to both the image and button
    changingImage.onmousedown = () => {
      mousedownHandler(changingImage);
    };

    changingImage.onmouseup = () => {
      mouseupHandler(changingImage);
    };

    instruction.onmousedown = () => {
      mousedownHandler(changingImage);
    };

    instruction.onmouseup = () => {
      mouseupHandler(changingImage);
    };
  } else {
    // Otherwise, change everything back to normal
    changingImage.src = 'https://pbs.twimg.com/media/C5e2Al2UYAExILo.jpg';
    changingImage.onmousedown = null;
    changingImage.onmouseup = null;
    instruction.style.visibility = 'hidden';
  }
};

/* Add Event Listener to Toggle Button */
imageToggler.onclick = changeImage;
