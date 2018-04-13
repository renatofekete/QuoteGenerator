var quote = document.getElementById("quote");
var author = document.getElementById("author");
var btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  var quoteRequest = new XMLHttpRequest();
  quoteRequest.onreadystatechange = function() {
    if (quoteRequest.readyState == 4 && quoteRequest.status == 200) {
      var quoteInfo = JSON.parse(quoteRequest.response);
      var tweet = `${quoteInfo.quote} -- ${quoteInfo.author}`
      quote.innerHTML = `${quoteInfo.quote} <a href="https://twitter.com/intent/tweet/?text= ${tweet}" data-show-count="false">Tweet</a>`;
      author.innerHTML = `Author: <a title ="Wikipedia: ${quoteInfo.author}" target= "_blank" href="https://en.wikipedia.org/wiki/${quoteInfo.author}" >${quoteInfo.author}</a>`;
      
    }
  };
  quoteRequest.open("GET", "https://talaikis.com/api/quotes/random/", true);
  quoteRequest.send();

});
