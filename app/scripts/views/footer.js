/*global aawed, Backbone, JST*/

aawed.Views = aawed.Views || {};

(function () {
    'use strict';

    aawed.Views.FooterView = Backbone.View.extend({

        template: JST['app/scripts/templates/footer.ejs']

    });

})();
