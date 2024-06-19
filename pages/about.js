/* Select Elements to Change */

let submitBtn = document.getElementById('usernameBtn');
let input = document.querySelector('input');

// "... trained to become Pokemon Masters until <span></span>!"
let currentYearSpan = document.getElementById('currentYear');

// "That's been about <span></span> years now!"
let yearDelta = document.getElementById('yearDelta');

/* Use Date Constructor to Get Current Date */

let currentDay = new Date();

/* Use getFullYear to get the Year (by default it will be a number and not a string!) */

let currentYear = currentDay.getFullYear();

// Change the currentYear to a string and put it in our currentYearSpan
currentYearSpan.innerHTML = currentYear.toString();

// Calculate years between now and 1997 and put in yearDelta (years between)
yearDelta.innerHTML = (currentYear - 1997).toString();

/* Add Event Listener to the Contact Submit Button */

submitBtn.onclick = (e) => {
  e.preventDefault();

  // If we have a message displayed already, clear it
  if (document.getElementById('message')) {
    document
      .getElementById('contact')
      .removeChild(document.getElementById('message'));
  }

  // Create our message element
  let message = document.createElement('p');
  message.id = 'message';

  // If user doesn't input anything, alert
  if (input.value === '') {
    message.innerHTML = 'Oops you forgot to enter a username!';
  } else {
    // If user has input, send affirmative message
    message.innerHTML = "Can't wait to code with you! Pika pikaaaa!";
  }

  // Add our message!
  document.getElementById('contact').append(message);
};
