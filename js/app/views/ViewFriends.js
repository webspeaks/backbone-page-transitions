define(function (require) {
    
    return Backbone.View.extend({

        template: Handlebars.compile(require("text!templates/friends.html")),

        render: function () {
            this.$el.html(this.template());
            this.$("header .title").text("My Friends");
        }
    });
});
