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
        {url: "./bower_components/lodash/dist/lodash.min.js"}
         {url: "./bower_components/backbone/backbone.js"}
    ).then(function(){
        document.querySelector("html").style.opacity = 1;
        // start app?

        var api_key = "l4h8f589rh3xsn0updz5tq6n";

        window.es = new EtsyApp (api_key);

    })

}