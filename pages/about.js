let submitBtn = document.getElementById('usernameBtn');
let input = document.querySelector('input');

submitBtn.onclick = (e) => {
  e.preventDefault();

  if (document.getElementById('message')) {
    document
      .getElementById('contact')
      .removeChild(document.getElementById('message'));
  }

  let message = document.createElement('p');
  message.id = 'message';

  if (input.value === '') {
    message.innerHTML = 'Oops you forgot to enter a username!';
  } else {
    message.innerHTML = "Can't wait to code with you! Pika pikaaaa!";
  }

  document.getElementById('contact').append(message);
};
