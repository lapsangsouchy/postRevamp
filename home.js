let imageToggler = document.getElementById('imageToggler');
console.log(imageToggler);

const changeImage = (e) => {
  e.preventDefault();
  console.log('test');
  let changingImage = document.getElementById('changingImage');
  console.log(changingImage.src);
  console.dir(changingImage.src);
  if (changingImage.src === 'https://pbs.twimg.com/media/C5e2Al2UYAExILo.jpg') {
    changingImage.src =
      'https://i.pinimg.com/originals/06/a4/68/06a468cb80122f3d28831fe88f681d9d.png';
  } else {
    changingImage.src = 'https://pbs.twimg.com/media/C5e2Al2UYAExILo.jpg';
  }
};

imageToggler.onclick = changeImage;
