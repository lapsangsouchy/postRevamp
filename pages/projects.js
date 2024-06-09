let projectCards = document.getElementsByClassName('project-card');
let btnContainers = document.getElementsByClassName('btn-container');
let links = [
  'https://github.com/lapsangsouchy/mash.js',
  'https://jslegend.itch.io/p5-pokemon-prototype',
  'https://youtu.be/Zx2CBt72Ji8?si=Jkgl7MTUJQ7kPSbo',
];
// console.log(btnContainers);
// console.dir(btnContainers);

for (let i = 0; i < btnContainers.length; i++) {
  let buttonLink = document.createElement('a');
  buttonLink.href = links[i];
  buttonLink.rel = 'noopener noreferrer';
  buttonLink.target = '_blank';

  let githubBtn = document.createElement('button');
  githubBtn.classList.add('github-btn');
  if (links[i] === 'https://youtu.be/Zx2CBt72Ji8?si=Jkgl7MTUJQ7kPSbo') {
    githubBtn.innerHTML = 'Watch on YouTube!';
  } else {
    githubBtn.innerHTML = 'Check it Out!';
  }

  buttonLink.append(githubBtn);
  btnContainers[i].append(buttonLink);

  projectCards[i].onmouseover = () => {
    btnContainers[i].style.display = 'flex';
  };
  projectCards[i].onmouseout = () => {
    btnContainers[i].style.display = 'none';
  };
  // btnContainers[i].append(buttonLink);
}
