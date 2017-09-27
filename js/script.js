// quote object array.
var quotes = [
  {
     quote: "Peace begins with a smile.",
     source: "Mother Teresa",
     tag: "Peace"
   },
   {
     quote: "Only I can change my life. No one can do it for me",
     source: "Carol Burnett",
     tag: "Peace"
   },
   {
     quote: "Life was like a box of chocolates; you never know what you're gonna get.",
     source: "Tom Hanks",
     citation: "Forrest Gump",
     year: 1994,
     tag: "Life"
   },
   {
     quote: "I believe things cannot make themselves impossible.",
     source: "Stephen Hawking",
     tag: "Life"
   },
   {
     quote: "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.",
     source: "Albert Einstein",
     tag: "Life"
   },
   {
     quote: "How glorious a greeting the sun gives the mountains!",
     source: "John Muir",
     citation: "The Mountains of California",
     year: 1894,
     tag: "Nature"
   },
];

// Array to store the indexes of quotes which are already displayed.
var savedIndex = [];
var intervalID ;

// Function to select and return random quote object from the quotes array.
function getRandomQuote() {
  var indexExist = '';
  var upperLimit = quotes.length;

  // Initialize the savedIndex array once all the quotes have been displayed
  if (savedIndex.length === upperLimit ) {
     savedIndex.length = 0;
  }

  /* Generate random number and check whether the random number is present in Saved Index array.  If it is already present Generate
     another random number
  */
  do {
      var randomNumber = Math.floor(Math.random()*upperLimit);
      indexExist = false;

      if (savedIndex.indexOf(randomNumber) !== -1) {
        indexExist = true;
      }

  } while(indexExist)

  // Saves the random number in savedIndex array.
  savedIndex.push(randomNumber);
  return quotes[randomNumber];
}

// function to generate random hexadecimal color
function getRandomColor() {
  var color = "#";
  var letter = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  for (var i = 0; i < 6; i +=1) {
    color += letter[Math.floor(Math.random()*16)];
  }
  return color;
}

/* function to create the final HTML string with the quote object returned from getRandomQuote function
   and display the string to the page.
*/
function printQuote() {
    var randomQuote = getRandomQuote();
    var message = "<p class= 'quote'>" + randomQuote.quote + "</p>";
    message += "<p class= 'source'>" + randomQuote.source;
    if ("citation" in randomQuote) {
       message += "<span class='citation'> " + randomQuote.citation + "</span>";
    }

    if ("year" in randomQuote) {
       message += "<span class='year'> " + randomQuote.year + "</span>";
    }

    if ("tag" in randomQuote) {
       message += "<span class='tag'> " + randomQuote.tag + "</span></p>";
    }
    console.log(randomQuote);
    document.getElementById('quote-box').innerHTML = message;
    document.body.style.backgroundColor = getRandomColor();

    //  code to cancel the previously established timed call to function printQuote
    clearInterval(intervalId);

    // Calls printQuote function evey 30 seconds
    intervalId = setInterval(printQuote,30000);
}

// Calls printQuote function evey 30 seconds
intervalId = setInterval(printQuote,30000);

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
