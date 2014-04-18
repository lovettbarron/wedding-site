/*global aawed, Backbone, JST*/

aawed.Views = aawed.Views || {};

(function () {
    'use strict';

    aawed.Views.FooterView = Backbone.View.extend({

        template: JST['app/scripts/templates/12-finale.ejs'],

        init: function() {
        	this.render();
        },

        render: function() {
        	$(this.el).append(this.template())
        }

    });

})();
