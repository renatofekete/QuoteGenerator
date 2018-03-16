var quote = document.getElementById("quote");
var author = document.getElementById("author");
var btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  var quoteRequest = new XMLHttpRequest();
  quoteRequest.onreadystatechange = function() {
    if (quoteRequest.readyState == 4 && quoteRequest.status == 200) {
      var quoteInfo = JSON.parse(quoteRequest.response);
      quote.innerHTML = quoteInfo.quote;
      author.innerHTML = `Author: ${quoteInfo.author}`;
      
    }
  };
  quoteRequest.open("GET", "https://talaikis.com/api/quotes/random/", true);
  quoteRequest.send();

});