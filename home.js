let imageToggler = document.getElementById('imageToggler');
let audio1 = document.getElementById('audio1');
let audio2 = document.getElementById('audio2');
let instruction = document.getElementById('instruction');

function isPlaying(audio) {
  return !audio.paused;
}

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
    instruction.style.backgroundColor = 'lightgreen';
    instruction.innerHTML = 'Now click the new image for something cool!';
    // Onmousedown
    changingImage.onmousedown = () => {
      changingImage.src = './assets/pikachuJump2.png';

      if (isPlaying(audio2)) {
        audio2.pause();
        audio2.currentTime = 0;
      }
      audio1.play();
    };
    // Onmouseup
    changingImage.onmouseup = () => {
      changingImage.src = './assets/pikachuJump1.png';
      if (isPlaying(audio1)) {
        audio1.pause();
        audio1.currentTime = 0;
      }
      audio2.play();
    };
  } else {
    // Otherwise, change everything back
    changingImage.src = 'https://pbs.twimg.com/media/C5e2Al2UYAExILo.jpg';
    changingImage.onmousedown = null;
    changingImage.onmouseup = null;
    instruction.style.backgroundColor = 'transparent';
    instruction.innerHTML = '';
  }
};

imageToggler.onclick = changeImage;
