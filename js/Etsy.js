;(function() {

    function EtsyClient(key) {
        this.token = token;
        this.vendors = [];
        this.inventoryData = [];

        var self = this;
        var EtsyRouter = Backbone.Router.extend({

            routes: {
                ":username": "drawUserInfo"
            },
            drawInfo: function(username) {
                self.drawUser(userId)
            },
            initialize: function() {
                Backbone.history.start();
            }

        })

        var router = new EtsyRouter();

        this.draw();
    }

    EtsyClient.prototype = {
        URLs: {
            listings: "https://openapi.etsy.com/v2/listings/active"
        },

        access_token: function() {
            return "?api_key=" + this.key
        },
        getData: function() {
            // Pull inventory data from Etsy
            return $.getJson("https://openapi.etsy.com/v2/listings/active")
                .then(function(data) {
                    return data;
                })
        },
        loadTemplate: function() {
            $.when(
                this.getData(),
                this.loadTemplate("inventoryTemplate")
            ).then(function(inventory, html) {

            })

            //console.log(inventory);
            var inventoryPage = document.querySelector(".wrapper");

        },

        loadView: function(name) {
            var page = document.querySelector("page");
            $.get("./templates/" + name + ".html").then(function(html) {
                page.innerHTML = html;;
            })

        },
        drawUserInfo: function(username) {
            self.drawUser(username)
        },

        initialize: function() {
            Backbone.history.start();
        }
    };

    window.EtsyClient = EtsyClient;
})();