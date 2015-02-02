;(function(){

    function EtsyClient(token){
        this.token = token;
        this.members = [];

        var self = this;
        var EtsyRouter = Backbone.Router.extend({

            routes: {
                ":username": "drawUserInfo"
            },
            drawUserInfo: function(username){
                 self.drawUser(username)
            },
            initialize:function(){
                Backbone.history.start();
            }

            })

            var router = new EtsyRouter();
            this.listenToEvents();
            this.draw();

        }

        EtsyClient.prototype = {
            URLs: {
                members: "https"
            }




        }

            home: function(){
                var page = document.querySelector("page");
                page.innerHTML = '';
                alert = ("home");

            },

            loadView: function(name) {
                var page = document.querySelector("page");
                $.get("./templates/"+name+".html").then(function(html){
                    page.innerHTML = html;;
                })

            },
            drawUserInfo: function(username){
                self.drawUser(username)
            },
            initialize: function(){
                Backbone.history.start();
            }
        });
        var router = new EtsyRouter();

        this.draw();
    }

    EtsyClient.prototype = {
        URLs: {
            members: "https://api.etsy.com/orgs/TIY-Houston-Front-End-Engineering/members"
        },
        access_token: function(){
            return "?access_token="+this.token
        },
        /**
         * getData
         * @arguments none.
         * @return promise
         */
        getData: function(){
            var x = $.Deferred();

            if(this.members.length > 0){
                x.resolve(this.members);
            } else {
                var p = $.get(this.URLs.members + this.access_token());
                p.then(function(data){
                    x.resolve(data);
                    this.members = data;
                })
            }

            return x;
        },

        loadTemplate: function(name){
            // modify the event context, return only the data
            return $.get("./templates/"+name+".html").then(function(data){ return data;})
        },

        draw: function(){
            $.when(
                this.getData(),
                this.loadTemplate("menu")
            ).then(function(profile, repos, html){
                var left_column = document.querySelector(".etsy-grid > *:nth-child(odd)");
                left_column.innerHTML = _.template(html, { members: members });
            })
        },

        drawUser: function(username){
        //when the username is called, get the data associated w/ it
        $.when(this.getData(), this.loadTemplate("right")).then(function(, html){

            var right_column = document.querySelector(".etsy-grid > *:nth-child(even)");
            right_column.innerHTML = arr_of_str.join());

           })
        },

    }

    window.EtsyClient = EtsyClient;

})();