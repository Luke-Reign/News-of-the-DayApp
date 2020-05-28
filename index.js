$(document).ready(function() {
    var url = 'http://hn.algolia.com/api/v1/search?query=javascript';
    
    // Making AJAX call to API
    $.getJSON(url, function(data){

        var currentQuote = '';
        var quotes = data.hits;
       
        $('.read').on('click', function() {
// Getting Random news using the Math.random
            currentQuote = quotes[Math.floor(Math.random() * quotes.length)];
            // console.log(currentQuote);

            $('.quoteBody').hide();
            $('.quoteBodyLink').html(currentQuote.title);
            $('.quoteBodyLink')
                .attr('href', currentQuote.url)
                .attr('target', '_blank');
            $('.quoteAuthor').html(currentQuote.author);

            $('.tweetQuote')
                .attr(
                    'href',
                    'https://twitter.com/intent/tweet?text= ' + currentQuote.title + ' - ' + currentQuote.author)
                .attr('target', '_blank')
                .removeClass('disabled');

            $('.read').html('Show me one more');
           
        })

// Getting the first title
        // console.log(quotes[0].title);

        // console.log(data);
    })
})