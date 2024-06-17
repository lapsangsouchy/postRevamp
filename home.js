let imageToggler = document.getElementById('imageToggler');
let audio1 = document.getElementById('audio1');
let audio2 = document.getElementById('audio2');

// Audio volume adjust so people on headphones won't have their ears hurt
audio1.volume = 0.2;
audio2.volume = 0.2;

let instruction = document.getElementById('instruction');

function isPlaying(audio) {
  return !audio.paused;
}

const mousedownHandler = (changingImage) => {
  changingImage.src = './assets/pikachuJump2.png';

  if (isPlaying(audio2)) {
    audio2.pause();
    audio2.currentTime = 0;
  }
  audio1.play();
};

const mouseupHandler = (changingImage) => {
  changingImage.src = './assets/pikachuJump1.png';
  if (isPlaying(audio1)) {
    audio1.pause();
    audio1.currentTime = 0;
  }
  audio2.play();
};

const changeImage = (e) => {
  e.preventDefault();

  let changingImage = document.getElementById('changingImage');
  console.log(changingImage.src);
  console.dir(changingImage.src);

  // If original image, do all the new stuff
  if (changingImage.src === 'https://pbs.twimg.com/media/C5e2Al2UYAExILo.jpg') {
    // Change image
    changingImage.src = './assets/pikachuJump1.png';
    //Add new text
    instruction.style.visibility = 'visible';

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

    // // Onmousedown
    // changingImage.onmousedown = () => {
    //   changingImage.src = './assets/pikachuJump2.png';

    //   if (isPlaying(audio2)) {
    //     audio2.pause();
    //     audio2.currentTime = 0;
    //   }
    //   audio1.play();
    // };
    // // Onmouseup
    // changingImage.onmouseup = () => {
    //   changingImage.src = './assets/pikachuJump1.png';
    //   if (isPlaying(audio1)) {
    //     audio1.pause();
    //     audio1.currentTime = 0;
    //   }
    //   audio2.play();
    // };
  } else {
    // Otherwise, change everything back
    changingImage.src = 'https://pbs.twimg.com/media/C5e2Al2UYAExILo.jpg';
    changingImage.onmousedown = null;
    changingImage.onmouseup = null;
    instruction.style.visibility = 'hidden';
  }
};

imageToggler.onclick = changeImage;
