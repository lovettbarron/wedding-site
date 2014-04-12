/*global aawed, Backbone, JST*/

aawed.Views = aawed.Views || {};

(function () {
    'use strict';

    aawed.Views.FaqView = Backbone.View.extend({

        template: JST['app/scripts/templates/faq.ejs']

    });

})();
