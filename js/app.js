window.onload = app;

// runs when the DOM is loaded
function app(){
    "use strict";

    // load some scripts (uses promises :D)
    loader.load(
        //css
        {url: "./dist/style.css"},
        //js
        {url: "./bower_components/jquery/dist/jquery.min.js"},
        {url: "./bower_components/lodash/lodash.min.js"},
        {url: "./bower_components/backbone/backbone.js"},
        {url: "./js/etsy.js"}

    ).then(function(){
        document.querySelector("html").style.opacity = 1;
        // start app?

        // $("form").on("submit", function(event){
        //     event.preventDefault();
        //     window.location.hash = '#/search/'+this.querySelector('input').value;
        // })

        var api_key = "l4h8f589rh3xsn0updz5tq6n";

        new EtsyClient(api_key);

    })

}