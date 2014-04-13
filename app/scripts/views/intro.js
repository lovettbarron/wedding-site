/*global aawed, Backbone, JST*/

aawed.Views = aawed.Views || {};

(function () {
    'use strict';

    aawed.Views.IntroView = Backbone.View.extend({

        template: JST['app/scripts/templates/intro.ejs'],

        init: function() {
        	this.render();
        },

        render: function() {
        	$(this.el).append(this.template());
        }

    });

})();
