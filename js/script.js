 \ // Treehouse FSJS Techdegree: Project 1 - A Random Quote Generator


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

  // Prevents the same number to roll twice in a row, will reroll if the numbers are the same
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

// If quote has citation, year or category, display them on the website
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
// Closes paragraph tag and prints quote 
html += `</p>`
document.getElementById('quote-box').innerHTML = html;
}
printQuote();

// Function to change background color to hsl
function getBackgroundColor() {
  var x = Math.floor(Math.random() * 360); // Hue
  var y = Math.floor(Math.random() * 60); // Saturation
  var z = Math.floor(Math.random() * 50); // Lightness
  let backgroundColor = `hsl( ${x}, ${y}%, ${z}%)`;
  document.body.style.background = backgroundColor;
}

//  Timer is set to 5 minutes
// (millisecond) * ( second) * (minute).
let Timer = setInterval(myTimer, 1000 * 60 *5 );

// changes the background & quote every 5 minutes
// When user clicks on button, the function runs; the timer is cleared, then restarts timer.
function myTimer() {
 clearInterval(Timer);
 getBackgroundColor();
 printQuote();
 Timer = setInterval(myTimer, 1000 * 6 * 5 );
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);