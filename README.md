backbone-page-transitions
=========================

Animating between different views in Backbone JS.

This is a small Backbone JS application that shows how we can animate views in Backbone JS. The animation effects have been generated using CSS3.
The advantage of this application is that you need not to change anything in your views to apply the transition effect. This plugin only changes the way the viiews are rendered in the main application. This plugin has a `render` method that will render the views and apply necessary classes for the transition.


**[Live Demo](http://demos.webspeaks.in/backbone-page-transitions/)**

Currently the plugin supports two transition effects:

1. slideInOut

2. slideUpDown

**How to apply this plugin:**

Your old view rendering:
```
requirejs(['views/ViewHome'], function (ViewHome) {
  var home = new ViewHome({
    el: ".canvas"
  });
  home.render();
});
```

New view rendering:
```javascript
requirejs(['views/ViewHome'], function (ViewHome) {
  var home = new ViewHome({
    el: ".canvas"
  });
  Backbone.Transitions.transit(home, transitionType); //transitionType can be slideInOut or slideUpDown
});
```
The CSS code of the plugin will automatically apply the transition in the view rendering. However based on the structure and view rendering of your Backbone application, some tweaks may be required to apply the transitions properly.



