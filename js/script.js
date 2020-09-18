// Treehouse FSJS Techdegree: Project 1 - A Random Quote Generator


/*** 
 * Hello,
 * Thank you for taking the time to look at my code.
 * I am aiming for exceeds grade
 * 
*/

// Array of objects of quotes and their sources
let quotes = [
  { quote: 'A source who never made a mistake never tried anything new.',  
    source: 'Albert Einstein' ,
    citation: 'Aberdeen American News',
    year: 1988,
    category: 'Motivational'
  },
  { quote: "If opportunity doesn't knock, build a door.", 
    source: 'Milton Berle',
    year: 1988,
    category: 'Motivational'
  },
  { quote: 'A smooth sea never made a skilled sailor.',
    source: 'Franklin D. Roosevelt',
    year: 1988,
    category: 'Motivational'
  },
  { quote: "Happiness often sneaks in through a door you didn't know you left open.", 
    source: 'John Barrymore',
    year: 1988,
    category: 'Motivational'
  },
  { quote: 'Sometimes good things fall apart so better things can fall together', 
    source: 'Marilyn Monroe',
    year: 1988,
    category: 'Motivational'
  },
  { quote: 'Pain is temporary. Quitting lasts forever.', 
    source: 'Lance Armstrong',
    year: 1988,
    category: 'Motivational'
  },
  { quote: 'If you are always trying to be normal, you will never know how amazing you can be.',
    source: 'Maya Angelou',
    year: 1988,
    category: 'Motivational'
  },
  { quote: 'No pressure, no diamonds.',
    source: 'Thomas Carlyle',
    year: 1988,
    category: 'Motivational'
  },
  { quote: 'The secret of getting ahead is getting started',
    source: 'Mark Twain',
    year: 1988,
    category: 'Motivational'
  },
  { quote: "You've got to be willing to lose everything to gain yourself",
    source: 'Iyanla Vanzant',
    year: 1988,
    category: 'Motivational',
  },
  { quote: 'Our goals can only be reached through the vehicle of a plan. There is no other route to success.',
    source: 'Pablo Picasso',
    year: 1988,
    category: 'Motivational'
  } 
];

// Function selects a quote at random by generating a number between [0 - number of quotes] that corresponds to array location
let randomQuote = ' ';
function getRandomQuote () {
  randomNumber = Math.floor( Math.random() * quotes.length );
  randomQuote = quotes[randomNumber];

  do {
    if ( randomNumber === randomNumber ) {
      randomNumber = Math.floor(Math.random() * quotes.length );
    }
    }while ( randomNumber !== randomNumber);
  }

// Function calls  on other functions to generate random quote
let html = ' ';
function printQuote () { 
  getRandomQuote();
  html = ` <p class="quote">${randomQuote.quote}</p> `;
  html += `  <p class="source">${randomQuote.source} `;

// Having issues with this. Unsure what the conditions should look like
  if ( randomQuote.citation ) {
   html +=  `<span class="citation">${randomQuote.citation}</span>`;
  }
  if ( randomQuote.year ) {
    html +=  `<span class="citation">${randomQuote.year}</span>`;
  }
if ( randomQuote.category ) {
  html += `<span class="category">${randomQuote.category}</span>`;
  for ( i = 0; i < randomQuote.category; i++ ) {
  html += `<span class="category">${randomQuote.category}</span>`;
  }
}
// Not sure if I need this line tbh
html += `</p>`
document.getElementById('quote-box').innerHTML = html;
}
printQuote();

// Function to change background color
// Will go back to simplify this function
function getBackgroundColor() {
  var x = Math.floor(Math.random() * 360);
  var y = Math.floor(Math.random() * 60);
  var z = Math.floor(Math.random() * 50);
  let backgroundColor = `hsl( ${x}, ${y}%, ${z}%)`;
  document.body.style.background = backgroundColor;
}

// changes the background & quote every 5 minutes  (1000 milliseconds = 1 sec)
// timer set to 1 sec for testing
let Timer = setInterval(myTimer, 1000 * 1 *1 );
function myTimer() {
 getBackgroundColor();
 printQuote();
}
// This function connected to button
// This resets the timer but has no way of restarting
function resetTimer() {
clearInterval(Timer);
getBackgroundColor();
}
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);