var App = null;

requirejs.config({

  baseUrl: 'js/lib',

  paths: {
    util: "../utils/util",
    text: "../lib/text",
    app: '../app',
    models: '../app/models',
    collections: '../app/collections',
    views: '../app/views',
    templates: '../app/templates'
  }

});


/**
 * Define our custom transition Class
 */
Backbone.Transitions = {};
Backbone.Transitions.transit = function(view, transitionType) {
  var _self = this;

  transitionType = transitionType || "slideInOut";
  _self.transitionType = transitionType;

  if (_self.currView) {
    _self.currView.$(".page")
      .addClass(_self.transitionType)
      .removeClass("active");

    //Render the new view after the transition has finished on the current view
    _self.currView.$(".page").one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
      _self.currView.$(".page").remove();
      _self.render(view);
    });
  } else {
    _self.render(view);
  }
  _self.currView = view;

};

Backbone.Transitions.render = function(view) {
  var _self = this;

  // Call the render on view object
  view.render();
  view.$(".page").addClass(_self.transitionType);

  // Delay the transitions on newly added elements by 20 s
  // to prevent the flickering effect
  _.delay(function() {
    view.$(".page")
      .addClass(_self.transitionType)
      .addClass("active");
  }, 20);
};


var Router = Backbone.Router.extend({
  routes: {
    "": "home",
    "friends": "viewFriends",
    "profile": "viewProfile"
  },

  home: function() {
    requirejs(['views/ViewHome'], function (ViewHome) {
      var home = new ViewHome({
        el: ".canvas"
      });
      Backbone.Transitions.transit(home);
    });
  },

  viewProfile: function() {
    requirejs(['views/ViewProfile'], function (viewProfile) {
      var profile = new viewProfile({
        el: ".canvas"
      });
      Backbone.Transitions.transit(profile);
    });
  },

  viewFriends: function() {
    requirejs(['views/ViewFriends'], function (ViewFriends) {
      var friends = new ViewFriends({
        el: ".canvas"
      });
      Backbone.Transitions.transit(friends);
    });
  }

});

App = new Router();
Backbone.history.start();


define(function (require) {

  //Define the header and footer partials for the Handlebars
  //User these partials as {{>header}} anywhere in the templates
  var header = Handlebars.compile(require("text!templates/header.html"));
  Handlebars.registerPartial('header', header);

  var footer = Handlebars.compile(require("text!templates/footer.html"));
  Handlebars.registerPartial('footer', footer);

});