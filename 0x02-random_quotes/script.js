const BUTTON = document.querySelector("#change-btn");
const AUTHOR = document.querySelector("#author");
const QUOTE = document.querySelector("#quote");
const BOX = document.querySelector("#quote-box");
let quotes = [
{
  "index" : 1,
  "author" : "Doug Hutchison",
  "quote" : "I think being in love with life is a key to eternal youth",
  "source" : "https://www.success.com/17-quotes-about-living-a-beautiful-life/"
},
{
  "index" : 2,
  "author" : "Walter Hagen",
  "quote" : "You’re only here for a short visit. Don’t hurry, don’t worry. And be sure to smell the flowers along the way",
  "source" : "https://www.success.com/17-quotes-about-living-a-beautiful-life/"
},
{
  "index" : 3,
  "author" : "Charles Darwin",
  "quote" : "A man who dares to waste one hour of time has not discovered the value of life",
  "source" : "https://www.success.com/17-quotes-about-living-a-beautiful-life/"
},
{
  "index" : 4,
  "author" : "Eleanor Roosevelt",
  "quote" : "If life were predictable it would cease to be life, and be without flavor.",
  "source" : "https://www.success.com/17-quotes-about-living-a-beautiful-life/"
},
{
  "index" : 5,
  "author" : "Ralph Waldo Emerson",
  "quote" : "All life is an experiment. The more experiments you make the better.",
  "source" : "https://www.success.com/17-quotes-about-living-a-beautiful-life/"
}
]
console.log(quotes);
let quote_index = 0;

BUTTON.addEventListener("click", function() {
  if (quote_index < quotes.length - 1) {
    quote_index += 1;
  }
  else {
    quote_index = 0;
  }
  QUOTE.innerHTML = quotes[quote_index].quote;
  AUTHOR.innerHTML = quotes[quote_index].author;
  QUOTE.setAttribute("cite", quotes[quote_index].source);
  BOX.classList.add("quote-box");
});
