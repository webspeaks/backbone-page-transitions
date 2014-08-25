define(function (require) {
    
    return Backbone.View.extend({

        template: Handlebars.compile(require("text!templates/home.html")),

        render: function () {
            this.$el.html(this.template());
            this.$("header .title").text("My Home");
        }
    });
});
