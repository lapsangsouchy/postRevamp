let projectCards = document.getElementsByClassName('project-card');
let projectBlurbs = document.getElementsByClassName('blurb');
let projectImages = document.getElementsByClassName('project-image');
let btnContainers = document.getElementsByClassName('btn-container');
let links = [
  'https://github.com/lapsangsouchy/mash.js',
  'https://jslegend.itch.io/p5-pokemon-prototype',
  'https://youtu.be/Zx2CBt72Ji8?si=Jkgl7MTUJQ7kPSbo',
];

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
    projectBlurbs[i].style.opacity = 0.5;
    projectImages[i].style.opacity = 0.5;
    githubBtn.style.display = 'block';
  };
  projectCards[i].onmouseout = () => {
    projectBlurbs[i].style.opacity = 1;
    projectImages[i].style.opacity = 1;

    githubBtn.style.display = 'none';
  };
}
