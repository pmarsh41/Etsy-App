;
(function() {

    function EtsyClient(key) {
        this.token = key;
        console.log('client on')
        this.draw()
    }


    EtsyClient.prototype = {
        URL_listings: function(token) {
            // returns the URL with my token in it
            return "https://openapi.etsy.com/v2/listings/active.js?includes=Images&api_key=" + token + "&limit=50&callback=?"
        },


        //-----------------------------------
        // Methods for Loading Data
        //------------------------------------

        getData: function() {
            var etsyUrl = this.URL_listings(this.token);
            return $.getJSON(etsyUrl).then(function(data) {
                console.log(data)
                return data
            })
        },


        loadTemplate: function(filename) {
            return $.get('./templates/' + filename + '.html').then(function(data) {
                return data
            })
        }
    }

    //--------------------------------------
    //Method for Loading Template
    //---------------------------------------

    // -------------------------------------
    // Initial Draw
    // ------------------------------------

    EtsyClient.prototype.draw = function() {
        console.log('draw() invoked')
            //1-WHEN ASYNC REQUESTS RESOVLE
        $.when(
            this.getData(), //passes data to 1st paramater in .then()
            this.loadTemplate("menu") //passes data to 2nd parameter in .then()
        ).then(function(data1, tempLoad) {
            console.log('hi')
            console.log(data1)
            console.log(tempLoad)
        })


    }





    window.EtsyClient = EtsyClient;
})();
