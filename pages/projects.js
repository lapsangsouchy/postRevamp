/* Select Elements to Change */

let projectCards = document.getElementsByClassName('project-card');
let projectBlurbs = document.getElementsByClassName('blurb');
let projectImages = document.getElementsByClassName('project-image');
let btnContainers = document.getElementsByClassName('btn-container');

/* Create an Array of Links to Projects */

let links = [
  'https://github.com/lapsangsouchy/mash.js',
  'https://jslegend.itch.io/p5-pokemon-prototype',
  'https://youtu.be/Zx2CBt72Ji8?si=Jkgl7MTUJQ7kPSbo',
];

/* Loop Through Each Button Container For Changes */

for (let i = 0; i < btnContainers.length; i++) {
  // Create a new a element and assign corresponding link to it
  let buttonLink = document.createElement('a');
  buttonLink.href = links[i];
  buttonLink.rel = 'noopener noreferrer';
  buttonLink.target = '_blank';

  // Create a button
  let githubBtn = document.createElement('button');
  githubBtn.classList.add('github-btn');

  // If the link we assigned is the YouTube link, we'll change the message
  if (buttonLink.href === 'https://youtu.be/Zx2CBt72Ji8?si=Jkgl7MTUJQ7kPSbo') {
    githubBtn.innerHTML = 'Watch on YouTube!';
  } else {
    // If not we'll add a default message
    githubBtn.innerHTML = 'Check it Out!';
  }

  // Add this button to the link so it ends up like this:
  // <a href='link'> <button> Text </button> </a>
  buttonLink.append(githubBtn);
  btnContainers[i].append(buttonLink);

  /* Add onmouseover event listener to display button */

  projectCards[i].onmouseover = () => {
    // Fade the rest of the card elements
    projectBlurbs[i].style.opacity = 0.5;
    projectImages[i].style.opacity = 0.5;

    // Show our button
    githubBtn.style.display = 'block';
  };

  /* Add onmouseout event listener to hide button */

  projectCards[i].onmouseout = () => {
    // Un-fade the rest of our card
    projectBlurbs[i].style.opacity = 1;
    projectImages[i].style.opacity = 1;

    // Hide button
    githubBtn.style.display = 'none';
  };
}
