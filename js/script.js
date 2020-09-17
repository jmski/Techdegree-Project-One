/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
  { quote: 'A source who never made a mistake never tried anything new.',  
    source: 'Albert Einstein' ,
    citation: 'Aberdeen American News',
    year: 1988
  },
  { quote: "If opportunity doesn't knock, build a door.", 
    source: 'Milton Berle'
  },
  { quote: 'A smooth sea never made a skilled sailor.',
    source: 'Franklin D. Roosevelt'
  },
  { quote: "Happiness often sneaks in through a door you didn't know you left open.", 
    source: 'John Barrymore'
  },
  { quote: 'Sometimes good things fall apart so better things can fall together', 
    source: 'Marilyn Monroe'
  },
  { quote: 'Pain is temporary. Quitting lasts forever.', 
    source: 'Lance Armstrong' 
  },
  { quote: 'If you are always trying to be normal, you will never know how amazing you can be.',
    source: 'Maya Angelou'
  },
  { quote: 'No pressure, no diamonds.',
    source: 'Thomas Carlyle'
  },
  { quote: 'The secret of getting ahead is getting started',
    source: 'Mark Twain'
  },
  { quote: "You've got to be willing to lose everything to gain yourself",
    source: 'Iyanla Vanzant'
  },
  { quote: 'Our goals can only be reached through the vehicle of a plan. There is no other route to success.',
    source: 'Pablo Picasso'
  } 
];

/***
 * `getRandomQuote` function
***/
let randomNumber = 0;
let randomQuote = ' ';
function getRandomQuote (){
  randomNumber = Math.floor( Math.random() * quotes.length );
  return randomQuote = quotes[randomNumber];
}

/***
 * `printQuote` function
***/
let html = ' ';
function printQuote () {
  getRandomQuote();

html = 
  `<p class="quote">${randomQuote.quote}</p> 
    <p class="source">${randomQuote.source}</p>`;

 if ( 'citation' in quotes ) {
  html +=  `<span class="citation">${randomQuote.citation}</span></p>`;
  }
if ( 'year' in quotes ) {
  html +=  `<span class="citation">${randomQuote.year}</span></p>`;

  }
}
printQuote();


/***
 * Change background with each quote
 */

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('quote-box').innerHTML = html;
document.getElementById('load-quote').addEventListener("click", printQuote, false);