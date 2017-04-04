$(document).ready(function(){
    getQuote();
    $('#genQuote').click(getQuote);

    $('#tweet').click(function(){

    window.open('https://twitter.com/intent/tweet?text='+document.getElementById("quoteText").innerHTML+' - '+document.getElementById("quoteAuthor").innerHTML);

    }); // tweet button
});

function getQuote(){
    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(data){
        var a = data.quoteAuthor;
        var newQuote = [];
        newQuote['quoteText'] = data.quoteText;
        newQuote['quoteAuthor'] = a;
        if (a === ""){
            a = "Anonymous";
        }

        document.getElementById("quoteText").innerHTML = data.quoteText;
        document.getElementById("quoteAuthor").innerHTML = a;
        console.log(document.getElementById("quoteText").innerHTML);
    });
}
